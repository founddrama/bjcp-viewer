import React from 'react';
import { BJCPStyle } from '../types';
import { formatRangeForRow, formatSG } from '../bjcp/bjcp-formatters';
import cyrb53 from '../ts/cyrb53-hash';

type StyleRowProps = {
  isSelected: boolean;
  onClick: () => void;
  style: BJCPStyle;
};

function StyleRow({
  style,
  isSelected,
  onClick,
}: StyleRowProps): JSX.Element {
  const { abv, ibu, og, fg, srm } = style.stats;

  return (
    <tr key={cyrb53(style.name)} onClick={onClick} className={isSelected ? 'is-selected' : ''}>
      <td>{style['@_id']}.</td>
      <td>{style.name}</td>
      {formatRangeForRow(abv, { suffix: '%' })}
      {formatRangeForRow(ibu)}
      {formatRangeForRow(og, { formatter: formatSG })}
      {formatRangeForRow(fg, { formatter: formatSG })}
      {formatRangeForRow(srm)}
    </tr>
  );
}

export default StyleRow;
