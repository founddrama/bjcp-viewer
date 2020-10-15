import { parse } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';
import { BJCPClass, BJCPCategory, BJCPStyle } from '../beer-style';

const bjcpXML = readFileSync('src/xml/2015-bjcp-styleguide.xml', 'utf8');

let styleguide = parse(bjcpXML, {
                        ignoreAttributes: false,
                        allowBooleanAttributes: true
                      }).styleguide;

styleguide = styleguide.class.find((i: BJCPClass) => i['@_type'] == 'beer' )
  .category.map((category: BJCPCategory) => category.subcategory)
  .reduce((acc: BJCPStyle[], subcategories: BJCPStyle[]) => acc.concat(subcategories), []);

writeFileSync('src/js/2015-bjcp-styleguide.json',
              JSON.stringify(styleguide, null, 2),
              'utf8');
