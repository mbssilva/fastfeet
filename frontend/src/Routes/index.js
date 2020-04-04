import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/" component={Error404} />
    </Switch>
  );
}
