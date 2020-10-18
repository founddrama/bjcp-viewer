import React from 'react';
import { BJCPStyle } from '../beer-style-types';
import { formatRange, formatSG } from '../bjcp/bjcp-formatters';

type BeerStyleRowProps = {
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLTableRowElement>;
  style: BJCPStyle;
};

type BeerStyleRowState = {
  style: BJCPStyle;
};

class BeerStyleRow extends React.Component<BeerStyleRowProps, BeerStyleRowState> {
  constructor(props: BeerStyleRowProps) {
    super(props);
    this.state = {
      style: props.style
    };
  }

  render(): JSX.Element {
    const style = this.state.style;
    const stats = style.stats;

    return (
      <tr onClick={this.props.onClick} className={this.props.isSelected ? 'is-selected' : ''}>
        <td>{style['@_id']}.</td>
        <td>{style.name}</td>
        {formatRange(stats.abv.low, stats.abv.high, {suffix:'%'})}
        {formatRange(stats.ibu.low, stats.ibu.high)}
        {formatRange(formatSG(stats.og.low), formatSG(stats.og.high))}
        {formatRange(formatSG(stats.fg.low), formatSG(stats.fg.high))}
        {formatRange(stats.srm.low, stats.srm.high)}
      </tr>
    );
  }
}

export default BeerStyleRow;
