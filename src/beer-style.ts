import { type } from "os";

type BJCPClassName = 'beer' | 'mead' | 'cider';

interface Identified {
  ['@_type']?: BJCPClassName;
  ['@_id']?: string;
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
  category: BJCPCategory[];
} & Identified;

export type BJCPCategory = {
    //revision
    notes: string;
    subcategory: BJCPStyle[];
} & Identified;

export type BJCPStyle = {
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
} & Identified;
