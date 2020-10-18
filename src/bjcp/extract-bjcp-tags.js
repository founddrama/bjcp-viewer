import { parse } from 'fast-xml-parser';
import { readFileSync, writeFileSync } from 'fs';

const bjcpXML = readFileSync('src/xml/2015-bjcp-styleguide.xml', 'utf8');

const beerList = parse(bjcpXML, {
    ignoreAttributes: false,
    allowBooleanAttributes: true
  }).styleguide.class.find(i => i['@_type'] == 'beer');

const tagSet = new Set(
  beerList.category.map(c => c.subcategory)
    .reduce((acc, sc) => acc.concat(sc.map(s => s.tags ? s.tags.split(', ') : [])), [])
    .reduce((acc, f) => acc.concat(f), [])
    .sort()
);
  
console.log('BJCP beer style tags:');
tagSet.forEach(t => console.log(t));
