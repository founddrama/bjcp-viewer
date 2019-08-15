import React from 'react';
import ReactDOM from 'react-dom';

const bjcpFormatters = require('./bjcp/bjcp-formatters');

class BeerStyleDetail extends React.Component {
  generateColorBand(srm) {
    let range = [];
    for (let i = Math.floor(srm.low || 1); i < (srm.high+1 || 40); i++) {
      range.push(i);
    }

    const ctStyle = {
      display: 'flex',
      height: '1.5rem'
    };

    return (
      <div style={ctStyle}>
      {
        range.map((i) => {
          let styles = {
            backgroundColor: `var(--srm_${i})`,
            flexGrow: 1
          };
          return (
            <div key={i} style={styles}></div>
          );
        })
      }
      </div>
    );
  }

  componentDidUpdate () {
    const element = ReactDOM.findDOMNode(this);
    if (element != null) {
      element.scrollTop = 0;
    }
  }

  render() {
    const style = this.props.style;
    if (!style) {
      return (<article></article>);
    } else {
      const stats = style.stats;

      return (
        <article>
          <h2>{style['@_id']}. {style.name}</h2>
          <table>
            <thead>
              <tr>
                <th>ABV</th>
                <th>IBU</th>
                <th>O.G.</th>
                <th>F.G.</th>
                <th>SRM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {bjcpFormatters.formatRange(stats.abv.low, stats.abv.high, {suffix:'%'})}
                {bjcpFormatters.formatRange(stats.ibu.low, stats.ibu.high)}
                {bjcpFormatters.formatRange(bjcpFormatters.formatSG(stats.og.low), bjcpFormatters.formatSG(stats.og.high))}
                {bjcpFormatters.formatRange(bjcpFormatters.formatSG(stats.fg.low), bjcpFormatters.formatSG(stats.fg.high))}
                {bjcpFormatters.formatRange(stats.srm.low, stats.srm.high)}
              </tr>
              <tr>
                <td colSpan="5">
                  {this.generateColorBand(stats.srm)}
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Overall Impression</h3>
          <p>{style.impression}</p>
          <h3>Aroma</h3>
          <p>{style.aroma}</p>
          <h3>Appearance</h3>
          <p>{style.appearance}</p>
          <h3>Flavor</h3>
          <p>{style.flavor}</p>
          <h3>Mouthfeel</h3>
          <p>{style.mouthfeel}</p>
          <h3>Comments</h3>
          <p>{style.comments}</p>
          <h3>History</h3>
          <p>{style.history}</p>
          <h3>Ingredients</h3>
          <p>{style.ingredients}</p>
          <h3>Comparison</h3>
          <p>{style.comparison}</p>
          <h3>Examples</h3>
          <p>{style.examples}</p>
        </article>
      );
    }
  }
}

export default BeerStyleDetail;
