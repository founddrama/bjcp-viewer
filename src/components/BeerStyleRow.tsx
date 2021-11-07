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
        {formatRange(abv, { suffix:'%' })}
        {formatRange(ibu)}
        {formatRange(og, { formatter: formatSG })}
        {formatRange(fg, { formatter: formatSG })}
        {formatRange(srm)}
      </tr>
    );
  }
}

export default BeerStyleRow;
