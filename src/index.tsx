import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleGuideApp from './components/StyleGuideApp';
import './css/bjcp.css';

const beerStyles = require('./bjcp/2015-bjcp-styleguide-flattened.json');

ReactDOM.render(
  <Router>
    <StyleGuideApp styles={beerStyles} />
  </Router>,
  document.getElementById('root')
);
