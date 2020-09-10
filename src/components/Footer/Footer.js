import React from 'react';
import BuildTools from './BuildTools';
import ContactForm from './ContactForm';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer id="footer-layout" className={classes.footer}>
      <div className="footer-secondary-layout" >
        <BuildTools />
        <ContactForm />
      </div>
      <Typography variant="body2" color="textSecondary">
        {'© '}{new Date().getFullYear()} June Jung. 
      </Typography>
    </footer>
  );
}