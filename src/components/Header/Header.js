import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { firebase } from '../../firebase/firebase';
import { login, logout } from '../../actions/auth';

import { connect } from 'react-redux';
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
//maybe use useEffect hook(=componentDidUpdate) for subscribing changes

const Header = (uid) => {
  const classes = useStyles();
  console.log(uid);

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default" className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Comment />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            {uid ? <Link to='/dashboard'>BlogAboutYourDay</Link> : <Link to='/'>BlogAboutYourDay</Link>}
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
          {uid ? <Logout color="inherit" /> : <Login color="inherit" />}
        </Toolbar>
      </AppBar>
    </div>
  );
}


const mapStateToProps = (state) => ({
  uid: !!state.auth.uid
});

export default connect(mapStateToProps)(Header);