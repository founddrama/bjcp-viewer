import React from 'react';

export function formatSG(sg) {
  if(!sg) return;

  let _sg = sg.toString();
  while (_sg.length < 5) {
    _sg += '0';
  }

  return _sg;
}

export function formatRange(lower, upper, opts = {}) {
  if (!lower && !upper) {
    return (<td><em>varies</em></td>);
  } else {
    return (
      <td>{opts.prefix ? opts.prefix : ''}{lower}-{upper}{opts.suffix ? opts.suffix : ''}</td>
    );
  }
}
