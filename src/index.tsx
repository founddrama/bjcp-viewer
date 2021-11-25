import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleGuideApp from './components/StyleGuideApp';
import './css/bjcp.css';

const styles = require('./bjcp/2015-bjcp-styleguide-flattened.json');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <StyleGuideApp styles={styles} />
  </Router>,
  document.getElementById('root')
);
