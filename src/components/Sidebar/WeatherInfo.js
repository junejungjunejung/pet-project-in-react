import React, { useState }from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useWeatherApi } from '../../actions/weather';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));


export default function WeatherInfo() {
  const classes = useStyles();

  const [location, setLocation] = useState('');
  const [{forecast, search, isLoading, isError, bgiWeather, bgiTime}, setSearch] = useWeatherApi();
  
  const bgiQuery = `${bgiWeather} ${bgiTime}`;

  return (
    <React.Fragment>
    <Typography variant="h5" component="h2">Weather Information</Typography>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
    <form
      onSubmit={e => {
        e.preventDefault();
        setSearch(location)
      }}>
      <TextField 
        placeholder="Search a location" 
        variant="outlined" 
        value={location} 
        onChange={e => setLocation(e.target.value)}
      />
      <Button type="submit" variant="outlined" color="primary">Click Here !</Button>
    </form>
            
      {isLoading && <p>Loading...</p>}
      {(search && isError) &&<p> Try another search </p>}

      <Typography variant="h6">See weather information</Typography>
      {!search || isError ? 
        <Typography variant="body1" component="p" gutterBottom>Back ground image of the right side will change based on the location you input in the form above.</Typography>: 
        <Typography variant="body1" component="p">{search}<br/>{forecast}</Typography>}
    </Grid>
    </React.Fragment>
  );
}