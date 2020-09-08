import React, { useState }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
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
  root: {
    height: 'calc(100vh)',
  },
  main: {
    marginLeft: 300,
    width: '100%',
    backgroundSize: 'cover'
  }
}));
//need to hide the key from github
const unsplash = new Unsplash({
  accessKey: "",
});

const App = () => {
  const weather = useSelector(state => ({...state.weather.weather}));
  const weatherQuery = `${weather.bgiTime} ${weather.bgiWeather}`
  const classes = useStyles();
  const [bgi, setBgi] = useState('');
  const [credit, setCredit] =useState('');
  const [creditLink, setCreditLink] =useState('');

  //getting interactive background image from unsplash api (using weather info state)
  if((Object.keys(weather).length === 0)){//default image
    unsplash.search.photos('sunny sky', 1, 1, { orientation: "landscape" })
    .then(toJson)
    .then(json => {
      setBgi(json.results[0].urls.regular)
      setCredit(json.results[0].user.name)
      setCreditLink(json.results[0].user.links.photos)
    }).catch(err => {
      console.log(err)
    });
  }else{//image set by weather information button click
    unsplash.search.photos(weatherQuery, 1, 1, { orientation: "landscape" })
    .then(toJson)
    .then(json => {
      setBgi(json.results[0].urls.regular)
      setCredit(json.results[0].user.name)
      setCreditLink(json.results[0].user.links.photos)
    }).catch(err => {
      console.log(err)
    });
  }

return (
  <BrowserRouter history={history}>
    <div className={classes.root} style={{background:`url(${bgi}) no-repeat center center fixed`}}>
      <Header />
      <Sidebar />
      <Container className={classes.main} >
        <p>photo by <a href={creditLink}>{credit}</a>/<a href="https://unsplash.com/">Unsplash</a></p>
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
