import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/Homepage/HomePage';
import RegisterPage from '../views/RegisterPage/RegisterPage';

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/register" component={RegisterPage} />
        </Switch>
    </BrowserRouter>
  )
}

export default Router;