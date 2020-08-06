import React from 'react';
import ReadMeItem from './ReadMeItem';

import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Container>
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