import { XMLParser } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true
});
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

  return range.map(r => {
    const { low, high, label } = r;
    return {
      ...(low !== undefined && { low }),
      ...(high !== undefined && { high }),
      ...(label !== undefined && { label })
    };
  });
};

const normalizeStats = (style) => {
  const { stats } = style;
  const { notes } = stats;
  
  for (const key in stats) {
    const sourceStat = stats[key];
    stats[key] = {
      ['@_flexible']: sourceStat['@_flexible'] === 'true',
      ...(sourceStat.range !== undefined && { range: normalizeStatRange(sourceStat.range) })
    };
  }

  style.stats = {
    ...stats,
    ...(!!notes && { notes }),
  };

  return style;
};

const normalizeExamples = (style) => {
  if (style.examples === undefined || style.examples.list === undefined) {
    return style;
  }

  let { list } = style.examples;
  if (!Array.isArray(list)) {
    list = [{ '#text': list }];
  }

  style.examples.list = list.map(example => {
    const text = example['#text'];
    const label = example['@_label'];

    return {
      ...(text !== undefined && { text }),
      ...(label !== undefined && { label }),
    };
  });

  return style;
};

let styleguide = parser.parse(bjcpXML).styleguide;

// IN THE BELOW:
// - Flatten with `map(category)`
// - Set the type (from the classification) on each style
// - Stats block: parse numbers and normalize ranges
// - Transform tags from comma-separated string into a proper list
styleguide = styleguide.class.map(classification => {
  const type = classification['@_type'];
  return classification.category.map(category => category.subcategory)
  .reduce((acc, styles) => acc.concat(styles), [])
  .map(style => (style['@_type'] = type, style))
  .map(normalizeStats)
  .map(normalizeExamples)
  .map(tagsStringToList);
}).reduce((p, c) => p.concat(c), []);

writeJsonToDisk(styleguide, 'src/bjcp/bjcp-styleguide.json');

styleguide = styleguide.reduce((flattenedStyles, style) => {
  flattenedStyles.push(style);

  if ('specialty' in style) {
    const type = style['@_type'];
    const specialties = [].concat(style.specialty);
    delete flattenedStyles[flattenedStyles.length - 1].specialty;
    flattenedStyles = flattenedStyles.concat(
      specialties
        .map(normalizeStats)
        .map(normalizeExamples)
        .map(tagsStringToList)
        .map((s, i) => ({
          ...s,
          ['@_id']: `${style['@_id']}${i+1}`,
          ['@_type']: type
        }))
    );
  }

  return flattenedStyles;
}, []);

writeJsonToDisk(styleguide, 'src/bjcp/bjcp-styleguide-flattened.json');
