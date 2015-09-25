import 'babel-core/polyfill';

import React from 'react';
import { Router, Route } from 'react-router'

import Root from './containers/Root';
import App from './containers/App';


React.render((
  <Router>
    <Route path="/" component={Root} />
  </Router>
), document.body)
