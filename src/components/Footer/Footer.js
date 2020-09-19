import React from 'react';
import BuildTools from './BuildTools';
import ContactForm from './ContactForm';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { GitHub, LinkedIn } from '@material-ui/icons';

export default function Footer() {
  return (
    <footer id="footer-layout">
      <div className="footer-secondary-layout" >
        <BuildTools />
        <ContactForm />
      </div>

      <div className="footer-links-layout">
        <Typography variant="body2" color="textSecondary">
        This website is built with late night snacks and coffee by me.<br/>{'© '}{new Date().getFullYear()} June Jung
        </Typography>

        <a href="https://www.linkedin.com/in/junejungjunejung/" className="footer-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </a>

        <a href="https://github.com/junejungjunejung" className="footer-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
        </a>
      </div>
  </footer>
  );
}