import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import UserDashboardPage from '../components/UserDashboard/UserDashboardPage';
import LandingPage from '../components/Landing/LandingPage';
import UserRoute from './UserRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <PublicRoute path="/" component={LandingPage} exact={true} />
      <UserRoute path="/dashboard" component={UserDashboardPage} />
      <Route component={LandingPage} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default AppRouter;
