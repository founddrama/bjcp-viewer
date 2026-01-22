import React from 'react';
import StyleRow from './StyleRow';
import { BJCPStyle } from '../types';

type StyleListProps = {
  emitSelectedStyle: (styleId: string) => void;
  styles: BJCPStyle[];
  style?: BJCPStyle;
};

function StyleList({
  emitSelectedStyle,
  styles,
  style,
}: StyleListProps): JSX.Element {
  const getSelected = (styleId: string): boolean =>
    styleId === style?.['@_id'];

  const onRowClick = (_id: string): void => {
    emitSelectedStyle(_id);
  };

  const renderRow = (style: BJCPStyle): JSX.Element => {
    const _id = style['@_id'];
    return (
      <StyleRow
        key={_id}
        style={style}
        isSelected={getSelected(_id)}
        onClick={() => onRowClick(_id)}
      />
    );
  }

  
  return (
    <div className="style-list-container">
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Style</th>
            <th>ABV</th>
            <th>IBU</th>
            <th>O.G.</th>
            <th>F.G.</th>
            <th>SRM</th>
          </tr>
        </thead>
        <tbody>
          {styles.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
}

export default StyleList;
