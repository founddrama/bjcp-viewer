type BJCPClassName = 'beer' | 'mead' | 'cider';

interface Named {
  name: string;
};

interface Identified extends Named {
  ['@_id']: string;
  ['@_type']: BJCPClassName;
}

export interface StyleStatRange {
  ['@_low']?: number;
  ['@_high']?: number;
  ['@_label']?: string;
};

export type StyleStat = {
  ['@_flexible']: boolean;
  range?: StyleStatRange | StyleStatRange[];
};

type BeerStyleStats = {
  abv: StyleStat;
  ibu: StyleStat;
  og: StyleStat;
  fg: StyleStat;
  srm: StyleStat;
  notes?: string;
};

export type BJCPClass = Identified & {
  category: BJCPCategory[];
};

export type BJCPCategory = Identified & {
  // "revision" omitted
  notes: string;
  subcategory: BJCPStyle[];
};

export type BJCPStyle = Identified & {
  stats: BeerStyleStats;
  preamble?: string;
  impression: string;
  aroma: string;
  appearance: string;
  flavor: string;
  mouthfeel: string;
  comments: string;
  history?: string;
  ingredients?: string;
  comparison?: string;
  examples: string;
  entry_instructions?: string;
  specialty?: BJCPStyle[];
  tags?: BJCPBeerTags[];
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
