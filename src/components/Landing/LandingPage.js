import React from 'react';
import ReadMeItem from './ReadMeItem';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const LandingPage = () => {
  return (
      <Container id="landing-layout">
        <Typography component="h1" gutterBottom>
          Welcome to my interactive development portfolio project.<br />Please look around!
        </Typography>
        <ReadMeItem />
      </Container>
  );
}

export default LandingPage;