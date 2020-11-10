import React from 'react';
import { BJCPStyle } from '../beer-style-types';
import { formatRange, formatSG } from '../bjcp/bjcp-formatters';

type BeerStyleRowProps = {
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLTableRowElement>;
  style: BJCPStyle;
};

class BeerStyleRow extends React.Component<BeerStyleRowProps> {
  render(): JSX.Element {
    const { style, isSelected, onClick } = this.props;
    const { abv, ibu, og, fg, srm } = style.stats;

    return (
      <tr onClick={onClick} className={isSelected ? 'is-selected' : ''}>
        <td>{style['@_id']}.</td>
        <td>{style.name}</td>
        {formatRange(abv.low, abv.high, {suffix:'%'})}
        {formatRange(ibu.low, ibu.high)}
        {formatRange(formatSG(og.low), formatSG(og.high))}
        {formatRange(formatSG(fg.low), formatSG(fg.high))}
        {formatRange(srm.low, srm.high)}
      </tr>
    );
  }
}

export default BeerStyleRow;
