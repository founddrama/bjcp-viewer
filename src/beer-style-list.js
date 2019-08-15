import React from 'react';
import BeerStyleRow from './beer-style-row';

class BeerStyleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: null
    };
  }

  getSelected(styleId) {
    return styleId === this.state.selectedStyle;
  }

  onRowClick(_id) {
    this.setState((state, props) => {
      return { selectedStyle: _id };
    });
    this.props.emitSelectedStyle(_id);
  }

  renderRow(style) {
    const _id = style['@_id'];
    return (
      <BeerStyleRow key={_id}
                    style={style}
                    isSelected={this.getSelected(_id)}
                    onClick={this.onRowClick.bind(this, _id)}/>
    );
  }

  render() {
    return (
      <div className="style-list-container">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Style</th>
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
