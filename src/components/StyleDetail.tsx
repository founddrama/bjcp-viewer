import React from 'react';
import ReactDOM from 'react-dom';
import {
  StyleStatRange,
  BJCPBeerTags,
  BJCPStyle,
  ExampleWithLists,
} from '../types';
import { formatSG, formatRange } from '../bjcp/bjcp-formatters';
import cyrb53 from '../ts/cyrb53-hash';

type StyleDetailProps = {
  style: BJCPStyle | undefined;
  onCloseClick: () => void;
};

class StyleDetail extends React.PureComponent<StyleDetailProps> {
  isBeer(style: BJCPStyle): boolean {
    return style['@_type'] === 'beer';
  }

  isMead(style: BJCPStyle): boolean {
    return style['@_type'] === 'mead';
  }

  isCider(style: BJCPStyle): boolean {
    return style['@_type'] === 'cider';
  }

  private generateColorBand(srm: StyleStatRange): JSX.Element {
    let range = [];
    const low = srm.low;
    const high = srm.high;

    for (let i = Math.floor(low || 1); i < (high ? high + 1 : 40); i++) {
      range.push(i);
    }

    const ctStyle = {
      display: 'flex',
      height: '1.5rem'
    };

    return (
      <div key={cyrb53(`${low}-${high}`)} style={ctStyle} data-testid="srm-gradient">
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

  generateColorBands(srm?: StyleStatRange[]): JSX.Element {
    let ranges: StyleStatRange[];
    if (srm === undefined) {
      ranges = [{ low: 1, high: 40 }];
    } else {
      ranges = [...srm];
    }
    
    return <>{ranges.map(this.generateColorBand)}</>;
  }

  componentDidUpdate (): void {
    const element = ReactDOM.findDOMNode(this);
    if (element != null) {
      (element as HTMLElement).scrollTop = 0;
    }
  }

  private renderParagraphs(content: string): JSX.Element {
    return (
      <>
        {content.split('\n').map(p => (
          <p key={cyrb53(p, p.length)}>{p.trim()}</p>
        ))}
      </>
    );
  }

  renderPreamble(content: string | undefined): JSX.Element | undefined {
    if(!content) return;

    return (
      <div className="preamble" data-testid="style-preamble">
        {this.renderParagraphs(content)}
      </div>
    );
  }

  renderSectionHeading(title: string): JSX.Element {
    return (
      <h3 id={title.toLowerCase().replace(/\s/g, '-')}>{title}</h3>
    );
  }

  renderExamples(content: ExampleWithLists | undefined): JSX.Element | undefined {
    if(!content) return;

    return (
      <div>
        {this.renderSectionHeading('Examples')}
        <p>
          {content.list.map((example, index, array) => {
            const { label, text } = example;
            return (
              <span key={cyrb53(text)}>
                {label !== undefined && <><strong>{label}:</strong>{' '}</>}
                {text}{(index + 1) < array.length && '; '}
              </span>
            );
          })}
        </p>
      </div>
    );
  }

  renderSection(content: string | undefined, title: string): JSX.Element | undefined {
    if(!content) return;

    return (
      <div>
        {this.renderSectionHeading(title)}
        {this.renderParagraphs(content)}
      </div>
    );
  }

  renderStatsNotes(notes: string | undefined): JSX.Element | undefined {
    if(!notes) return;

    return (
      <div className="stats-notes" data-testid="style-stats-notes">
        {this.renderParagraphs(notes)}
      </div>
    );
  }

  renderStatTable = (style: BJCPStyle): JSX.Element | null => {
    if (this.isMead(style)) {
      return null;
    }

    const { abv, ibu, og, fg, srm, notes } = style.stats;

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ABV</th>
              {this.isBeer(style) ? <th>IBU</th> : null}
              <th>O.G.</th>
              <th>F.G.</th>
              {this.isBeer(style) ? <th>SRM</th> : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              {formatRange(abv, { suffix: '%' })}
              {this.isBeer(style) ? formatRange(ibu) : null}
              {formatRange(og, { formatter: formatSG })}
              {formatRange(fg, { formatter: formatSG })}
              {this.isBeer(style) ? formatRange(srm) : null}
            </tr>
            { this.isBeer(style) ?
              <tr>
                <td colSpan={5} className="srm-gradient">
                  {this.generateColorBands(srm.range)}
                </td>
              </tr>
            : null }
          </tbody>
        </table>
        {this.renderStatsNotes(notes)}
      </>
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
        {this.renderPreamble(style.preamble)}
        {this.renderSection(style.impression, 'Overall Impression')}
        {this.renderSection(style.aroma, 'Aroma')}
        {this.renderSection(style.appearance, 'Appearance')}
        {this.renderSection(style.flavor, 'Flavor')}
        {this.renderSection(style.mouthfeel, 'Mouthfeel')}
        {this.renderSection(style.comments, 'Comments')}
        {this.renderSection(style.history, 'History')}
        {this.renderSection(style.ingredients, 'Ingredients')}
        {this.renderSection(style.comparison, 'Comparison')}
        {this.renderExamples(style.examples)}
        {this.renderSection(style.entry_instructions, 'Entry Instructions')}
        {this.renderSection(this.renderTags(style.tags), 'Tags')}
      </article>
    );
  }
}

export default StyleDetail;
