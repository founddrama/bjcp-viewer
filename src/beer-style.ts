import { type } from "os";

type BJCPClassName = 'beer' | 'mead' | 'cider';

interface Identified {
  ['@_id']: string;
  name: string;
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

export type BJCPClass = {
  ['@_type']: BJCPClassName;
  name: string;
  category: BJCPCategory[];
};

export type BJCPCategory = {
  ['@_id']: string;
  name: string;
  //revision
  notes: string;
  subcategory: BJCPStyle[];
};

export type BJCPStyle = {
  ['@_id']: string;
  name: string;
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
  tags: string;
  // ^tags should be a union?
};
