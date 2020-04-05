import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Login from '../pages/Login';
import Orders from '../pages/Dashboard/Orders';
import Deliverers from '../pages/Dashboard/Deliverers';
import Recipients from '../pages/Dashboard/Recipients';
import Problems from '../pages/Dashboard/Problems';
import Error from '../pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard/orders" component={Orders} isPrivate />
      <Route path="/dashboard/deliverers" component={Deliverers} isPrivate />
      <Route path="/dashboard/recipients" component={Recipients} isPrivate />
      <Route path="/dashboard/problems" component={Problems} isPrivate />

      <Route path="/" component={Error} />
    </Switch>
  );
}
