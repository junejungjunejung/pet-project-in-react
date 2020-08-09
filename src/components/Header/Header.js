import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { firebase } from '../../firebase/firebase';

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

// need to toggle login/out buttons
let loginButtonToggle;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loginButtonToggle = <Logout color="inherit" />
  } else {
    loginButtonToggle = <Login color="inherit" />
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
            BlogAboutYourDay
          </Typography>

          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit">
          <GitHub />
          </IconButton>

          <Divider orientation="vertical" flexItem />

          { loginButtonToggle}

        </Toolbar>
      </AppBar>
    </div>
  );
}