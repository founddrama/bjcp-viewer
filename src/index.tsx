import React from 'react';
import ReactDOM from 'react-dom';
import BeerStyleList from './beer-style-list';
import BeerStyleDetail from './beer-style-detail';
import './css/bjcp.css';
import { BJCPStyle } from './beer-style';

const beerStyles = require('./bjcp/2015-bjcp-styleguide.json');

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
      styles: this.flattenSpecialtyStyles(beerStyles)
    };
  }

  flattenSpecialtyStyles(styles: BJCPStyle[]): BJCPStyle[] {
    return styles.reduce((flattenedStyles: BJCPStyle[], style: BJCPStyle) => {
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
