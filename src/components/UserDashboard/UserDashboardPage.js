import React from 'react';
import { firebase } from '../../firebase/firebase';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination';

import { Link } from 'react-router-dom';
import PostList from './PostList';
import PostFilter from './PostFilter';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  pagination: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

let userName;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userName = user.displayName;
  } else {
    userName = 'Anon.'
  }
});

const UserDashboardPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Toolbar />
      <Typography variant="h3" component="h2">
        Hi, { userName }. How’s your day?
      </Typography>
      <PostFilter />
      <Link  to="/create" variant="contained" color="primary">New Post</Link>
      <PostList />

      <Pagination count={10} />
    </div>
  );
}

export default UserDashboardPage;