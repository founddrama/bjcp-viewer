const xml = require('fast-xml-parser');
const fs = require('fs');

const bjcpXML = fs.readFileSync('src/xml/2015-bjcp-styleguide.xml', 'utf8');

let styleguide = xml.parse(bjcpXML, {
                            ignoreAttributes: false,
                            allowBooleanAttributes: true
                          }).styleguide;

styleguide = styleguide.class.find( (i) => i['@_type'] == 'beer' ).category
  .map((category) => category.subcategory)
  .reduce((acc, subcategories) => acc.concat(subcategories), []);

fs.writeFileSync('src/js/2015-bjcp-styleguide.json',
                  JSON.stringify(styleguide, null, 2),
                  'utf8');
