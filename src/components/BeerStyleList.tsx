import React from 'react';
import BeerStyleRow from './BeerStyleRow';
import { BJCPStyle } from '../beer-style-types';

type BeerStyleListProps = {
  emitSelectedStyle: Function;
  styles: BJCPStyle[];
};

type BeerStyleListState = {
  selectedStyle?: string | null;
};

class BeerStyleList extends React.Component<BeerStyleListProps, BeerStyleListState> {
  constructor(props: BeerStyleListProps) {
    super(props);
    this.state = {
      selectedStyle: null
    };
  }

  getSelected(styleId: string): boolean {
    return styleId === this.state.selectedStyle;
  }

  onRowClick(_id: string): void {
    this.setState({ selectedStyle: _id }, () => {
      this.props.emitSelectedStyle(_id);
    });
  }

  renderRow(style: BJCPStyle): JSX.Element {
    const _id = style['@_id'];
    return (
      <BeerStyleRow
        key={_id}
        style={style}
        isSelected={this.getSelected(_id)}
        onClick={this.onRowClick.bind(this, _id)}
      />
    );
  }

  render(): JSX.Element {
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
            {this.props.styles.map(this.renderRow.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BeerStyleList;
