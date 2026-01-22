import React, { useEffect, useRef } from 'react';
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

function StyleDetail(props: StyleDetailProps): JSX.Element | null {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const el = containerRef.current;
    if (el) {
      el.scrollTop = 0;
    }
  });

  const isBeer = (style: BJCPStyle): boolean =>
    style['@_type'] === 'beer';

  const isMead = (style: BJCPStyle): boolean =>
    style['@_type'] === 'mead';

  // currently unused
  const isCider = (style: BJCPStyle): boolean =>
    style['@_type'] === 'cider';

  const generateColorBand = (srm: StyleStatRange): JSX.Element => {
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
  };

  const generateColorBands = (srm?: StyleStatRange[]): JSX.Element => {
    let ranges: StyleStatRange[];
    if (srm === undefined) {
      ranges = [{ low: 1, high: 40 }];
    } else {
      ranges = [...srm];
    }
    
    return <>{ranges.map(generateColorBand)}</>;
  }

  const renderParagraphs = (content: string): JSX.Element =>
    (
      <>
        {content.split('\n').map(p => (
          <p key={cyrb53(p, p.length)}>{p.trim()}</p>
        ))}
      </>
    );

  const renderPreamble = (content: string | undefined): JSX.Element | undefined => {
    if(!content) return;

    return (
      <div className="preamble" data-testid="style-preamble">
        {renderParagraphs(content)}
      </div>
    );
  }

  const renderSectionHeading = (title: string): JSX.Element =>
    (
      <h3 id={title.toLowerCase().replace(/\s/g, '-')}>{title}</h3>
    );

  const renderExamples = (content: ExampleWithLists | undefined): JSX.Element | undefined => {
    if(!content) return;

    return (
      <div>
        {renderSectionHeading('Examples')}
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

  const renderSection = (content: string | undefined, title: string): JSX.Element | undefined => {
    if(!content) return;

    return (
      <div>
        {renderSectionHeading(title)}
        {renderParagraphs(content)}
      </div>
    );
  }

  const renderStatsNotes = (notes: string | undefined): JSX.Element | undefined => {
    if(!notes) return;

    return (
      <div className="stats-notes" data-testid="style-stats-notes">
        {renderParagraphs(notes)}
      </div>
    );
  }

  const renderStatTable = (style: BJCPStyle): JSX.Element | null => {
    if (isMead(style)) {
      return null;
    }

    const { abv, ibu, og, fg, srm, notes } = style.stats;

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ABV</th>
              {isBeer(style) ? <th>IBU</th> : null}
              <th>O.G.</th>
              <th>F.G.</th>
              {isBeer(style) ? <th>SRM</th> : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              {formatRange(abv, { suffix: '%' })}
              {isBeer(style) ? formatRange(ibu) : null}
              {formatRange(og, { formatter: formatSG })}
              {formatRange(fg, { formatter: formatSG })}
              {isBeer(style) ? formatRange(srm) : null}
            </tr>
            { isBeer(style) ?
              <tr>
                <td colSpan={5} className="srm-gradient">
                  {generateColorBands(srm.range)}
                </td>
              </tr>
            : null }
          </tbody>
        </table>
        {renderStatsNotes(notes)}
      </>
    );
  }

  const renderTags = (tags: BJCPBeerTags[] | undefined) =>
    tags?.map((t) => `#${t.replace('-', '\u2011')}`).join(' ');

  
  const { style, onCloseClick } = props;
  if(!style) return null;

  return (
    <article ref={containerRef}>
      <span className="close-icon" onClick={onCloseClick}>&times;</span>
      <h2>{style['@_id']}. {style.name}</h2>
      {renderStatTable(style)}
      {renderPreamble(style.preamble)}
      {renderSection(style.impression, 'Overall Impression')}
      {renderSection(style.aroma, 'Aroma')}
      {renderSection(style.appearance, 'Appearance')}
      {renderSection(style.flavor, 'Flavor')}
      {renderSection(style.mouthfeel, 'Mouthfeel')}
      {renderSection(style.comments, 'Comments')}
      {renderSection(style.history, 'History')}
      {renderSection(style.ingredients, 'Ingredients')}
      {renderSection(style.comparison, 'Comparison')}
      {renderExamples(style.examples)}
      {renderSection(style.entry_instructions, 'Entry Instructions')}
      {renderSection(renderTags(style.tags), 'Tags')}
    </article>
  );
}

export default StyleDetail;
