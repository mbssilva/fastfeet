import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/" component={() => <h1>Error 404 :(</h1>} />
    </Switch>
  );
}
