import React from 'react';
import ReactDOM from 'react-dom';
import BeerStyleList from './components/BeerStyleList';
import BeerStyleDetail from './components/BeerStyleDetail';
import './css/bjcp.css';
import { BJCPStyle } from './beer-style-types';

const beerStyles = require('./bjcp/2015-bjcp-styleguide-flattened.json');

type StyleGuideProps = {};

type StyleGuideState = {
  selectedStyle: BJCPStyle | undefined;
  styles: BJCPStyle[];
};

class StyleGuide extends React.Component<StyleGuideProps, StyleGuideState> {
  constructor(props: StyleGuideProps) {
    super(props);
    this.state = {
      selectedStyle: undefined,
      styles: beerStyles
      // consider doing ^this ahead-of-time / elsewhere?
    };
  }

  findStyleById(styleId: string): BJCPStyle | undefined {
    return this.state.styles.find((style) => style['@_id'] === styleId)
  }

  setSelectedStyle(styleId: string) {
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
