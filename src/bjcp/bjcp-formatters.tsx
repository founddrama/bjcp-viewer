import React from 'react';

export function formatSG(sg: number | undefined): string | undefined {
  if(!sg) return;

  return sg.toFixed(3);
}

type RangeInput = number | string | undefined;

interface RangeOptions {
  prefix?: string;
  suffix?: string;
}

export function formatRange(lower: RangeInput, upper: RangeInput, opts: RangeOptions = {}): JSX.Element {
  if (!lower || !upper) {
    return <td><em>varies</em></td>;
  } else {
    return (
      <td>{opts.prefix ? opts.prefix : ''}{lower}-{upper}{opts.suffix ? opts.suffix : ''}</td>
    );
  }
}
