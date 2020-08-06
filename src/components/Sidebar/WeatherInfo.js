import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="outlined-basic" placeholder="Search a location" variant="outlined" />
      </form>
      <Button variant="outlined" color="primary">Let’s have a convo !</Button>
      <Typography variant="h6">See weather information</Typography>
      <Typography variant="body1" component="p" gutterBottom>Back ground image of the right side will change based on the location you input in the form above.</Typography>
    </Grid>
    </React.Fragment>
  );
}