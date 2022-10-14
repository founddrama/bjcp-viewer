import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import StyleGuideApp from './components/StyleGuideApp';
import './css/bjcp.css';

import styles from './bjcp/bjcp-styleguide-flattened.json';
import { BJCPStyle } from './types';
const $root = document.getElementById('root');

if (Boolean(process.env.REACT_APP_USE_HASH_ROUTER)) {
  ReactDOM.render(
    <HashRouter>
      <StyleGuideApp styles={styles as BJCPStyle[]} />
    </HashRouter>,
    $root
  );
} else {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StyleGuideApp styles={styles as BJCPStyle[]} />
    </BrowserRouter>,
    $root
  );
}
