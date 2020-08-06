import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Pagination from '@material-ui/lab/Pagination';

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
      <Container>
        <Toolbar />
        <Typography variant="h3" component="h2">
          Hi, UserName. How’s your day?
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

        <PostList />

        <Pagination count={10} />
      </Container>
    </React.Fragment>
  );
}

export default UserDashboardPage;