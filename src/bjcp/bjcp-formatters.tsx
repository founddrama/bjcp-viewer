import React from 'react';
import { StyleStat } from '../types';

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
    return <td><em>Varies</em></td>;
  }

  let ranges: RangeInput[];
  if (Array.isArray(styleStat.range)) {
    ranges = styleStat.range;
  } else {
    ranges = [styleStat.range];
  }

  if (opts.formatter) {
    ranges = ranges.map(range => ({
      ...range,
      ['@_low']: opts.formatter!(range['@_low']),
      ['@_high']: opts.formatter!(range['@_high']),
    }));
  }

  return (
    <td>
      {ranges.map(range => (
        <div>
          {opts.prefix ? opts.prefix : ''}{range['@_low']}-{range['@_high']}{opts.suffix ? opts.suffix : ''}
        </div>
      ))}
    </td>
  );
}
