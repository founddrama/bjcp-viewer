import React from 'react';
import { BJCPStyle } from '../types';
import { formatRange, formatSG } from '../bjcp/bjcp-formatters';
import cyrb53 from '../ts/cyrb53-hash';

type StyleRowProps = {
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLTableRowElement>;
  style: BJCPStyle;
};

class StyleRow extends React.PureComponent<StyleRowProps> {
  render(): JSX.Element {
    const { style, isSelected, onClick } = this.props;
    const { abv, ibu, og, fg, srm } = style.stats;

    return (
      <tr key={cyrb53(style.name)} onClick={onClick} className={isSelected ? 'is-selected' : ''}>
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

export default StyleRow;
