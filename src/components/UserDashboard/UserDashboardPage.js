import React from 'react';
import { firebase } from '../../firebase/firebase';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import selectPosts from '../../selectors/posts';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import PostFilter from './PostFilter';

const useStyles = makeStyles((theme) => ({
  postControl: {
    display: 'flex',
    justifyContent: "space-between",
  },
  createButton: {
    backgroundColor: '#5EC1E5'
  },
  createButtonLink: {
    color: 'white',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  pagination: {
    justifyContent: "flex-start",
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
    <div id="dashboard-layout">
      <Typography variant="h1" gutterBottom>
        Hi, { userName }.<br/>How’s your day?
      </Typography>
      <div className={classes.postControl}>
        <PostFilter />
        <Button className={classes.createButton} variant="contained" color="primary" disableElevation>
          <Link  className={classes.createButtonLink} to="/create">
              New Post
          </Link>
        </Button>
      </div>

      <PostList className={classes.formControl} page={page} itemsPerPage={itemsPerPage} posts={props.posts}/>

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