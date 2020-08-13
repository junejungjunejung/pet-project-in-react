import React from 'react';
import ReadMeItem from './ReadMeItem';

import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: 'url("https://cdn2.thecatapi.com/images/MWU55D0sw.jpg") no-repeat center center fixed',
    backgroundSize: 'cover'
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Toolbar />
        <Typography variant="h3" component="h2" gutterBottom>
          Welcome to BlogAboutYourDay
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          This is my interactive development portfolio project. Please look around!
        </Typography>
        <ReadMeItem />
      </Container>
    </React.Fragment>
  );
}

export default LandingPage;