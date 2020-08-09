import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import UserDashboardPage from '../components/UserDashboard/UserDashboardPage';
import LandingPage from '../components/Landing/LandingPage';
import CreatePost from '../components/CreatePost';
import ReadPost from '../components/ReadPost';
import EditPost from '../components/EditPost';
import UserRoute from './UserRoute';
import PublicRoute from './PublicRoute';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: 300
  }
}));

const AppRouter = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Container className={classes.main}>
        <Switch>
          <PublicRoute path="/" component={LandingPage} exact={true} />
          <UserRoute path="/dashboard" component={UserDashboardPage} />
          <UserRoute path="/create" component={CreatePost} />
          <UserRoute path="/read/:id" component={ReadPost} />
          <UserRoute path="/edit/:id" component={EditPost} />
          <Route component={LandingPage} />
        </Switch>
      </Container>
      <Footer />
  </React.Fragment>
  )
};

export default AppRouter;
