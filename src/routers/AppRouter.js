import React, { useState }from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import UserDashboardPage from '../components/UserDashboard/UserDashboardPage';
import LandingPage from '../components/Landing/LandingPage';
import CreatePostPage from '../components/UserDashboard/CreatePostPage';
import ReadPost from '../components/UserDashboard/ReadPost';
import EditPost from '../components/UserDashboard/EditPost';
import UserRoute from './UserRoute';
import PublicRoute from './PublicRoute';

import Unsplash, { toJson } from 'unsplash-js';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  main: {
    marginLeft: 300,
    width: '100%',
    backgroundSize: 'cover'
  }
}));

const unsplash = new Unsplash({
  accessKey: "",
});

const AppRouter = () => {
  const classes = useStyles();
  
  const [bgi, setBgi] = useState('');

  unsplash.search.photos("cloudy sky", 1, 1, { orientation: "landscape" })
  .then(toJson)
  .then(json => {
    setBgi(json.results[0].urls.regular)
  }).catch(err => {
    console.log(err)
  });

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Container className={classes.main} style={{background:`url(${bgi}) no-repeat center center fixed`}}>
        <Switch>
          <PublicRoute path="/" component={LandingPage} exact={true} />
          <UserRoute path="/dashboard" component={UserDashboardPage} />
          <UserRoute path="/create" component={CreatePostPage} />
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
