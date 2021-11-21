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
    const { low, high } = srm;
    for (let i = Math.floor(low || 1); i < (high ? high + 1 : 40); i++) {
      range.push(i);
    }

    const ctStyle = {
      display: 'flex',
      height: '1.5rem'
    };

    return (
      <div style={ctStyle} data-testid="srm-gradient">
      {
        range.map((i) => (
          <div key={i} style={{
            backgroundColor: `var(--srm_${i})`,
            flexGrow: 1,
          }}></div>
        ))
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

  renderSection(content: string | undefined, title: string): JSX.Element | undefined {
    if(!content) return;

    return (
      <div>
        <h3 id={title.toLowerCase().replace(/\s/g, '-')}>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }

  renderStatTable = (style: BJCPStyle): JSX.Element | null => {
    const type = style['@_type'];
    if (type === 'mead') {
      return null;
    }

    const { abv, ibu, og, fg, srm } = style.stats;

    return (
      <table>
        <thead>
          <tr>
            <th>ABV</th>
            {ibu ? <th>IBU</th> : null}
            <th>O.G.</th>
            <th>F.G.</th>
            {srm ? <th>SRM</th> : null}
          </tr>
        </thead>
        <tbody>
          <tr>
            {formatRange(abv, { suffix: '%' })}
            {formatRange(ibu)}
            {formatRange(og, { formatter: formatSG })}
            {formatRange(fg, { formatter: formatSG })}
            {formatRange(srm)}
          </tr>
          { type === 'beer' ?
            <tr>
              <td colSpan={5} className="srm-gradient">
                {this.generateColorBand(srm)}
              </td>
            </tr>
          : null }
        </tbody>
      </table>
    );
  }

  renderTags = (tags: BJCPBeerTags[] | undefined) => tags?.map((t) => `#${t.replace('-', '\u2011')}`).join(' ');

  render(): JSX.Element | null {
    const { style, onCloseClick } = this.props;
    if(!style) return null;

    return (
      <article>
        <span className="close-icon" onClick={onCloseClick}>&times;</span>
        <h2>{style['@_id']}. {style.name}</h2>
        {this.renderStatTable(style)}
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
        {this.renderSection(style.entry_instructions, 'Entry Instructions')}
        {this.renderSection(this.renderTags(style.tags), 'Tags')}
      </article>
    );
  }
}

export default BeerStyleDetail;
