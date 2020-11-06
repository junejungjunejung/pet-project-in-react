import React from 'react';
import Login from './Login';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Comment, GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
          <Login color="inherit" />
        </Toolbar>
      </AppBar>
    </div>
  );
}