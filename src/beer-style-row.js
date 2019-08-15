import React from 'react';

const bjcpFormatters = require('./bjcp/bjcp-formatters');

class BeerStyleRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style
    };
  }

  render() {
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
