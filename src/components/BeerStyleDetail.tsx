import React from 'react';
import ReactDOM from 'react-dom';
import { BeerStyleStatRange, BJCPBeerTags, BJCPStyle } from '../beer-style-types';
import { formatSG, formatRange } from '../bjcp/bjcp-formatters';

type BeerStyleDetailProps = {
  style: BJCPStyle | undefined;
  onCloseClick: React.MouseEventHandler<HTMLTableRowElement>;
};

class BeerStyleDetail extends React.Component<BeerStyleDetailProps> {
  generateColorBand(srm: BeerStyleStatRange): JSX.Element {
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

  componentDidUpdate (): void {
    const element = ReactDOM.findDOMNode(this);
    if (element != null) {
      (element as HTMLElement).scrollTop = 0;
    }
  }

  renderSection(content: string, title: string): JSX.Element | undefined {
    if(!content) return;

    return (
      <div>
        <h3 id={title.toLowerCase().replace(/\s/g, '-')}>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }

  renderTags(tags: BJCPBeerTags[]) {
    return tags.map((t) => `#${t.replace('-', '\u2011')}`).join(' ');
  };

  render(): JSX.Element | null {
    const style = this.props.style;
    if(!style) return null;
      
    const stats = style.stats;

    return (
      <article>
        <span className="close-icon" onClick={this.props.onCloseClick}>&times;</span>
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
              {formatRange(stats.abv.low, stats.abv.high, {suffix:'%'})}
              {formatRange(stats.ibu.low, stats.ibu.high)}
              {formatRange(formatSG(stats.og.low), formatSG(stats.og.high))}
              {formatRange(formatSG(stats.fg.low), formatSG(stats.fg.high))}
              {formatRange(stats.srm.low, stats.srm.high)}
            </tr>
            <tr>
              <td colSpan={5} className="srm-gradient">
                {this.generateColorBand(stats.srm)}
              </td>
            </tr>
          </tbody>
        </table>
        {this.renderSection(style.impression, 'Overall Impression')}
        {this.renderSection(style.aroma, 'Aroma')}
        {this.renderSection(style.appearance, 'Appearance')}
        {this.renderSection(style.flavor, 'Flavor')}
        {this.renderSection(style.mouthfeel, 'Mouthfeel')}
        {this.renderSection(style.comments, 'Comments')}
        {this.renderSection(style.history, 'History')}
        {this.renderSection(style.ingredients, 'Ingredients')}
        {this.renderSection(style.comparison, 'Comparison')}
        {this.renderSection(style.examples, 'Examples')}
        {this.renderSection(this.renderTags(style.tags), 'Tags')}
      </article>
    );
  }
}

export default BeerStyleDetail;
