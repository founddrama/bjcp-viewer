import React from 'react';

type RangeValue = number | string | undefined;

type RangeInput = {
  low: RangeValue;
  high: RangeValue;
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

export function formatRange(rangeInput: RangeInput, opts: RangeOptions = {}): JSX.Element {
  let { low, high } = rangeInput;

  if (opts.formatter) {
    low = opts.formatter(low);
    high = opts.formatter(high);
  }

  if (!low || !high) {
    return <td><em>varies</em></td>;
  } else {
    return (
      <td>{opts.prefix ? opts.prefix : ''}{low}-{high}{opts.suffix ? opts.suffix : ''}</td>
    );
  }
}
