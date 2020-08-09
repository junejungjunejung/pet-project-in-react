import React from 'react';
import { firebase } from '../../firebase/firebase';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';

import PostList from './PostList';


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
    userName = 'Anon'
  }
});

const UserDashboardPage = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <div>
        <Toolbar />
        <Typography variant="h3" component="h2">
          Hi, { userName }. How’s your day?
        </Typography>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">SortBy</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Date</option>
            <option value={20}>Name</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" disableElevation>New Post</Button>
        <PostList />

        <Pagination count={10} />
      </div>
    </React.Fragment>
  );
}

export default UserDashboardPage;