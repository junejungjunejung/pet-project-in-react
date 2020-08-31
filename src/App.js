import React, { useState }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Landing/LandingPage';
import UserDashboardPage from './components/UserDashboard/UserDashboardPage';
import CreatePost from './components/UserDashboard/CreatePost';
import ReadPost from './components/UserDashboard/ReadPost';
import EditPost from './components/UserDashboard/EditPost';
import NotFoundPage from './components/NotFoundPage';

import UserRoute from './routers/UserRoute';
import { createBrowserHistory } from 'history';
import Unsplash, { toJson } from 'unsplash-js';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

export const history = createBrowserHistory();

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

const App = () => {
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
  <BrowserRouter history={history}>
    <div>
      <Header />
      <Sidebar />
      <Container className={classes.main} style={{background:`url(${bgi}) no-repeat center center fixed`}}>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <UserRoute path="/dashboard" component={UserDashboardPage} />
          <UserRoute path="/create" component={CreatePost} />
          <UserRoute path="/read/:id" component={ReadPost} />
          <UserRoute path="/edit/:id" component={EditPost} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  </BrowserRouter>
  )
};


export default App;
