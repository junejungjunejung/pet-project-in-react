import React from 'react';
import { firebase } from '../../firebase/firebase';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import selectPosts from '../../selectors/posts';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import PostFilter from './PostFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  pagination: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

//show user name(google) on user dashboard page
let userName;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userName = user.displayName;
  } else {
    userName = 'Anon.'
  }
});

const UserDashboardPage = (props) => {
  const classes = useStyles();

  //states for pagination
  const itemsPerPage = 4;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(props.posts.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Toolbar />
      <Typography variant="h3" gutterBottom>
        Hi, { userName }. How’s your day?
      </Typography>
      <PostFilter />
      <Button variant="contained" color="primary" disableElevation>
        <Link  to="/create">
            New Post
        </Link>
      </Button>
      <PostList page={page} itemsPerPage={itemsPerPage} posts={props.posts}/>
      <Divider />
      <Pagination 
        count={noOfPages}
        page={page}
        shape="rounded"
        onChange={handleChange}
        defaultPage={1}
        size="large"
        showFirstButton
        showLastButton
        classes={{ ul: classes.pagination }}
       />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(UserDashboardPage);