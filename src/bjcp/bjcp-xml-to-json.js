import { parse } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';

const bjcpXML = readFileSync('src/xml/2015-bjcp-styleguide.xml', 'utf8');

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
}

let styleguide = parse(bjcpXML, {
                        ignoreAttributes: false,
                        allowBooleanAttributes: true
                      }).styleguide;

// IN THE BELOW:
// - map(category) => do the flattening work here
// - transform tags from comma-separated string into a proper list
styleguide = styleguide.class.map(classification => {
  const type = classification['@_type'];
  return classification.category.map(category => category.subcategory)
  .reduce((acc, styles) => acc.concat(styles), [])
  .map(style => (style['@_type'] = type, style))
  .map(tagsStringToList);
}).reduce((p, c) => p.concat(c), []);

writeJsonToDisk(styleguide, 'src/bjcp/2015-bjcp-styleguide.json');

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

writeJsonToDisk(styleguide, 'src/bjcp/2015-bjcp-styleguide-flattened.json');
