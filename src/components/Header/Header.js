import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { firebase } from '../../firebase/firebase';
import { login, logout } from '../../actions/auth';
import configureStore from '../../store/configureStore';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Comment, GitHub, LinkedIn } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// need to auto toggle login/out buttons
let loginButtonToggle;
let homeButtonToggle;

const store = configureStore();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));

    loginButtonToggle = <Logout color="inherit" />
    homeButtonToggle = <Link to='/dashboard'>BlogAboutYourDay</Link>
  } else {
    store.dispatch(logout());

    loginButtonToggle = <Login color="inherit" />
    homeButtonToggle = <Link to='/'>BlogAboutYourDay</Link>
  }
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default" className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Comment />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            { homeButtonToggle}
            </Typography>

          <a href="https://www.linkedin.com/in/junejungjunejung/" target="_blank" rel="noopener noreferrer">
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
          </a>

          <a href="https://github.com/junejungjunejung" target="_blank" rel="noopener noreferrer">
            <IconButton color="inherit">
              <GitHub />
            </IconButton>
          </a>

          <Divider orientation="vertical" flexItem />

          { loginButtonToggle}

        </Toolbar>
      </AppBar>
    </div>
  );
}