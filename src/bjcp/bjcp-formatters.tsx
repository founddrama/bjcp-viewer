import React from 'react';

export function formatSG(sg: number | undefined): string | undefined {
  if(!sg) return;

  let _sg = sg.toString();
  while (_sg.length < 5) {
    _sg += '0';
  }

  return _sg;
}

interface RangeOptions {
  prefix?: string;
  suffix?: string;
}

export function formatRange(lower: number, upper: number, opts: RangeOptions = {}): JSX.Element {
  if (!lower && !upper) {
    return (<td><em>varies</em></td>);
  } else {
    return (
      <td>{opts.prefix ? opts.prefix : ''}{lower}-{upper}{opts.suffix ? opts.suffix : ''}</td>
    );
  }
}
