import React from 'react';
import ReactDOM from 'react-dom';
import BeerStyleList from './beer-style-list';
import BeerStyleDetail from './beer-style-detail.js'
import './css/bjcp.css';

const beerStyles = require('./bjcp/2015-bjcp-styleguide.json');

class StyleGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: null,
      styles: this.flattenSpecialtyStyles(beerStyles)
    };
  }

  flattenSpecialtyStyles(styles) {
    return styles.reduce((flattenedStyles, style) => {
      flattenedStyles.push(style);

      if (style.specialty) {
        flattenedStyles = flattenedStyles.concat(style.specialty.map((specialty, i) => {
          specialty['@_id'] = `${style['@_id']}${i+1}`;
          return specialty;
        }));
      }

      return flattenedStyles;
    }, []);
  }

  findStyleById(styleId) {
    return this.state.styles.find((style) => style['@_id'] === styleId)
  }

  setSelectedStyle(styleId) {
    this.setState((state, props) => {
      return { selectedStyle: this.findStyleById(styleId) }
    })
  }

  render() {
    return (
      <main>
        <h1>2015 BJCP Style Guide</h1>
        <BeerStyleList styles={this.state.styles} emitSelectedStyle={this.setSelectedStyle.bind(this)} />
        <BeerStyleDetail style={this.state.selectedStyle} />
      </main>
    );
  }
}

ReactDOM.render(<StyleGuide />,
  document.getElementById('root'));
