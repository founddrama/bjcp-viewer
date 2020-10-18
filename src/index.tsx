import React from 'react';
import ReactDOM from 'react-dom';
import BeerStyleList from './components/BeerStyleList';
import BeerStyleDetail from './components/BeerStyleDetail';
import './css/bjcp.css';
import { BJCPStyle } from './beer-style-types';

const beerStyles = require('./bjcp/2015-bjcp-styleguide-flattened.json');

type StyleGuideProps = {
  styles: BJCPStyle[];
};

type StyleGuideState = {
  selectedStyle: BJCPStyle | undefined;
};

class StyleGuide extends React.Component<StyleGuideProps, StyleGuideState> {
  constructor(props: StyleGuideProps) {
    super(props);
    this.state = { selectedStyle: undefined };
  }

  findStyleById(styleId: string): BJCPStyle | undefined {
    return this.props.styles.find((style) => style['@_id'] === styleId)
  }

  setSelectedStyle(styleId: string) {
    this.setState({ selectedStyle: this.findStyleById(styleId) });
  }

  onCloseClick() {
    this.setState({ selectedStyle: undefined });
  }

  render() {
    return (
      <main>
        <h1>2015 BJCP Style Guide</h1>
        <BeerStyleList styles={this.props.styles} emitSelectedStyle={this.setSelectedStyle.bind(this)} />
        <BeerStyleDetail style={this.state.selectedStyle} onCloseClick={this.onCloseClick.bind(this)} />
      </main>
    );
  }
}

ReactDOM.render(<StyleGuide styles={beerStyles} />,
  document.getElementById('root'));
