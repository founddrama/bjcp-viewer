import { BJCPStyle } from "../beer-style-types";

export const mockStyle: BJCPStyle = {
  ['@_id']: '1A',
  name: 'German Bier',
  stats: {
    abv: { low: 3.4, high: 6.8 },
    ibu: { low: 25, high: 40 },
    og: { low: 1.05, high: 1.065 },
    fg: { low: 1.01, high: 1.015 },
    srm: { low: 3, high: 8 },
  },
  impression: 'good beer for judging',
  aroma: 'smells good',
  appearance: 'pale and foamy',
  flavor: 'tasty beer',
  mouthfeel: 'full-bodied and fizzy',
  comments: 'interesting fact about this beer',
  history: 'has its roots in Germany',
  ingredients: 'malt + hops + water + yeast',
  comparison: 'different from this other beer in this subtle way',
  examples: 'something from Germany, and an Americanized version',
  tags: ['bottom-fermented', 'central-europe', 'pale-color'],
};
