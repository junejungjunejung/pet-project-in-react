import React from 'react';
import BuildTools from './BuildTools';
import ContactForm from './ContactForm';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <BuildTools />
          <ContactForm />
        </Toolbar>
        <Typography>2020 BlogAboutYourDay</Typography>
      </AppBar>
    </React.Fragment>
  );
}