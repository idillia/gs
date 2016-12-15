import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Overview from './components/bms/OverviewPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Overview}/>
  </Route>  
);

  