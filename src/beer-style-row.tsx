import React from 'react';
import { BeerStyle } from './beer-style';

const bjcpFormatters = require('./bjcp/bjcp-formatters');

type BeerStyleRowProps = {
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLTableRowElement>;
  style: BeerStyle;
};

type BeerStyleRowState = {
  style: BeerStyle;
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
        {bjcpFormatters.formatRange(stats.abv.low, stats.abv.high, {suffix:'%'})}
        {bjcpFormatters.formatRange(stats.ibu.low, stats.ibu.high)}
        {bjcpFormatters.formatRange(bjcpFormatters.formatSG(stats.og.low), bjcpFormatters.formatSG(stats.og.high))}
        {bjcpFormatters.formatRange(bjcpFormatters.formatSG(stats.fg.low), bjcpFormatters.formatSG(stats.fg.high))}
        {bjcpFormatters.formatRange(stats.srm.low, stats.srm.high)}
      </tr>
    );
  }
}

export default BeerStyleRow;
