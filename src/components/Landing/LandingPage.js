import React from 'react';
import ReadMeItem from './ReadMeItem';

import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Toolbar />
        <Typography component="h1" gutterBottom>
          Welcome to my interactive development portfolio project.<br />Please look around!
        </Typography>
        <ReadMeItem />
      </Container>
    </React.Fragment>
  );
}

export default LandingPage;