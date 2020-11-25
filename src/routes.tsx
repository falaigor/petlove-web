import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OngsMap from './pages/OngsMap';
import Ong from './pages/Ong';
import CreateOng from './pages/CreateOng';

import Login from './pages/dashboard/Login';
import Dashboard from './pages/dashboard/Dashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OngsMap} />

        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        
        <Route path="/ongs/create" component={CreateOng} />
        <Route path="/ongs/:id" component={Ong} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;