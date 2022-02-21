import { parse } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';
import { normalize } from 'path/posix';

const bjcpXML = readFileSync('src/xml/bjcp-styleguide.xml', 'utf8');

const writeJsonToDisk = (json, filename) => {
  writeFileSync(filename,
    JSON.stringify(json, null, 2),
    'utf8');
  console.info(`📝 wrote: ${filename}`);
};

const tagsStringToList = (style) => {
  if (style.tags) {
    style.tags = style.tags.split(', ');
  }

  return style;
};

const normalizeStatRange = (range) => {
  if (!Array.isArray(range)) {
    range = [range];
  }

  return range.map(r => ({
    ...(r['@_low'] !== undefined && { low: JSON.parse(r['@_low']) }),
    ...(['@_high'] !== undefined && { high: JSON.parse(r['@_high']) }),
    ...(r['@_label'] !== undefined && { label: r['@_label'] })
  }));
};

const normalizeStats = (style) => {
  const { stats } = style;
  
  for (const key in stats) {
    const sourceStat = stats[key];
    stats[key] = {
      ['@_flexible']: sourceStat['@_flexible'] === 'true',
      ...(!!sourceStat.range && { range: normalizeStatRange(sourceStat.range) })
    };
  }

  style.stats = stats;

  return style;
};

let styleguide = parse(bjcpXML, {
                        ignoreAttributes: false,
                        allowBooleanAttributes: true
                      }).styleguide;

// IN THE BELOW:
// - Flatten Specialty IPAs with `map(category)`
// - Set the type (from the classification) on each style
// - Stats block: parse numbers and normalize ranges
// - Transform tags from comma-separated string into a proper list
styleguide = styleguide.class.map(classification => {
  const type = classification['@_type'];
  return classification.category.map(category => category.subcategory)
  .reduce((acc, styles) => acc.concat(styles), [])
  .map(style => (style['@_type'] = type, style))
  .map(normalizeStats)
  .map(tagsStringToList);
}).reduce((p, c) => p.concat(c), []);

writeJsonToDisk(styleguide, 'src/bjcp/bjcp-styleguide.json');

styleguide = styleguide.reduce((flattenedStyles, style) => {
  flattenedStyles.push(style);

  if ('specialty' in style) {
    const type = style['@_type'];
    const specialties = [].concat(style.specialty);
    delete flattenedStyles[flattenedStyles.length - 1].specialty;
    flattenedStyles = flattenedStyles.concat(specialties.map(tagsStringToList).map((s, i) => {
      return {
        ...s,
        ['@_id']: `${style['@_id']}${i+1}`,
        ['@_type']: type
      };
    }));
  }

  return flattenedStyles;
}, []);

writeJsonToDisk(styleguide, 'src/bjcp/bjcp-styleguide-flattened.json');
