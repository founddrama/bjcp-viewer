import React from 'react';
import cyrb53 from '../ts/cyrb53-hash';
import { FormattedStyleStateRange, StyleStat } from '../types';

type RangeValue = number | string | undefined;

type RangeInput = {
  ['@_low']?: RangeValue;
  ['@_high']?: RangeValue;
};

interface RangeOptions {
  prefix?: string;
  suffix?: string;
  formatter?: (input: RangeValue) => string | undefined;
};

export function formatSG(sg: RangeValue): string | undefined {
  if(!sg) return;
  if (typeof sg === 'number') {
    return sg.toFixed(3);
  } else {
    return sg;
  }
}

export function formatRange(styleStat: StyleStat, opts: RangeOptions = {}): JSX.Element {
  if (styleStat['@_flexible'] || styleStat.range === undefined) {
    let label;
    if (styleStat.range !== undefined) {
      label = styleStat.range[0].label;
    }

    return (
      <td>
        {label ? <div className="style-range-label">{label}</div> : <em>varies</em>}
      </td>
    );
  }

  const { range } = styleStat;
  let formattedRanges: FormattedStyleStateRange[] = [...range];

  if (opts.formatter) {
    formattedRanges = range.map(r => ({
      ...r,
      low: opts.formatter!(r.low),
      high: opts.formatter!(r.high),
    }));
  }

  return (
    <td>
      {formattedRanges.map(range => (
        <div key={cyrb53(`${range.low}-${range.high}`)}>
          {opts.prefix ? opts.prefix : ''}{range.low}-{range.high}{opts.suffix ? opts.suffix : ''}
          {range.label ? <div className="style-range-label">({range.label})</div> : null}
        </div>
      ))}
    </td>
  );
}

export function formatRangeForRow(styleStat: StyleStat, opts: RangeOptions = {}): JSX.Element {
  if (styleStat['@_flexible'] || styleStat.range === undefined) {
    return formatRange({ '@_flexible': true }, opts);
  }

  // get rid of any labels
  // collapse ranges to min/max
  let summarizedStyleState: StyleStat = {
    ...styleStat,
    range: [{
      low: Math.min.apply(null, styleStat.range.map(r => r.low!)),
      high: Math.max.apply(null, styleStat.range.map(r => r.high!)),
    }],
  };
  return formatRange(summarizedStyleState, opts);
}
