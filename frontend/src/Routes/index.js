import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Login from '../pages/Login';

import ErrorPage from '../pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/" component={ErrorPage} />
    </Switch>
  );
}
