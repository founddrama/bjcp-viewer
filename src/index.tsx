import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import StyleGuideApp from './components/StyleGuideApp';
import './css/bjcp.css';

const styles = require('./bjcp/2015-bjcp-styleguide-flattened.json');
const routerProps = { basename: process.env.PUBLIC_URL };
const $root = document.getElementById('root');

if (Boolean(process.env.REACT_APP_USE_HASH_ROUTER)) {
  ReactDOM.render(
    <HashRouter {...routerProps}>
      <StyleGuideApp styles={styles} />
    </HashRouter>,
    $root
  );
} else {
  ReactDOM.render(
    <BrowserRouter {...routerProps}>
      <StyleGuideApp styles={styles} />
    </BrowserRouter>,
    $root
  );
}
