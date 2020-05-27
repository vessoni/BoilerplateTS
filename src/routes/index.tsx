import React from 'react';
// <Switch> is unique in that it renders a route exclusively.
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
