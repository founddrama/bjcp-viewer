type BJCPClassName = 'beer' | 'mead' | 'cider';

interface Named {
  name: string;
};

interface Identified extends Named {
  ['@_id']: string;
}

export interface BeerStyleStatRange {
  low: number;
  high: number;
};

type BeerStyleStats = {
  abv: BeerStyleStatRange;
  ibu: BeerStyleStatRange;
  og: BeerStyleStatRange;
  fg: BeerStyleStatRange;
  srm: BeerStyleStatRange;
};

export type BJCPClass = Named & {
  ['@_type']: BJCPClassName;
  category: BJCPCategory[];
};

export type BJCPCategory = Identified & {
  //revision
  notes: string;
  subcategory: BJCPStyle[];
};

export type BJCPStyle = Identified & {
  stats: BeerStyleStats;
  impression: string;
  aroma: string;
  appearance: string;
  flavor: string;
  mouthfeel: string;
  comments: string;
  history: string;
  ingredients: string;
  comparison: string;
  examples: string;
  specialty?: BJCPStyle[];
  tags: BJCPBeerTags[];
};

export type BJCPBeerTags = 
  'aged' | 'amber-ale-family' | 'amber-color' | 'amber-lager-family' | 'any-fermentation' |
  'balanced' | 'balanced,' | 'bitter' | 'bock-family' | 'bottom-fermented' | 'bottom-fermenting' |
  'british-isles' | 'brown-ale-family' | 'central-europe' | 'craft-style' | 'dark-color' |
  'dark-lager-family' | 'eastern-europe' | 'fruit' | 'high-strength' | 'historical-style' |
  'hoppy' | 'ipa-family' | 'lagered' | 'malty' | 'north-america' | 'pacific' | 'pale-ale-family' |
  'pale-color' | 'pale-lager-family' | 'pilsner-family' | 'porter-family' | 'roasty' |
  'session-beer' | 'session-strength' | 'smoke' | 'sour' | 'sour-ale-family' | 'specialty-beer' |
  'spic' | 'spice' | 'standard-strength' | 'stout-family' | 'strong-ale-family' |
  'sweet' | 'top-fermented' | 'top-fermenting' | 'traditional-style' | 'very-high-strength' |
  'western-europe' | 'wheat-beer-family' | 'wild-fermentation' | 'wild-fermented' |
  'wood';
