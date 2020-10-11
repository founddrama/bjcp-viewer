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

export type BeerStyle = {
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
  specialty?: BeerStyle[];
};
