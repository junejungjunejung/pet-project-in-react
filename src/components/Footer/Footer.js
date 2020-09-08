import React from 'react';
import BuildTools from './BuildTools';
import ContactForm from './ContactForm';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    marginTop: 'auto',
    flexFlow: 'column',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  container: {
    display: 'flex',
    flexFlow: 'row, wrap',
    justifyContent: 'space-between'
  },
  copyright: {
    justifyContent: "center",
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Container className={classes.container} >
          <BuildTools />
          <ContactForm />
        </Container>
        <Typography className={classes.copyright} variant="body2" color="textSecondary">
          {'© '}{new Date().getFullYear()} June Jung. 
        </Typography>
      </footer>
    </React.Fragment>
  );
}