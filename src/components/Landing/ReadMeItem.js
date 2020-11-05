import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ReadMeItem = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Container>
        <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <Typography className={classes.heading}>Read Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once you sign in with Google, a link to user dashboard will show up on the header navigation. You can create, read, update, and delete posts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <Typography className={classes.heading}>Weather information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            By submitting a location you want to look up the weather for, will fetch current weather forecast JSON data from the ‘Weatherstack’ REST API. Part of his string information will then be filtered to be used fetching an image that corresponds to the current weather from ‘Unsplash’ JSON API. That will change the background image of the website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <Typography className={classes.heading}>Daily dose of Cat facts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When you click the button, this will make chained API calls to ‘TheCatApi’ for a random cat image and to ‘Meow Facts’ for a random cat fact. If one of two API isn’t reachable, the component will display the default image and data. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>About June</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I'm from Korea, and I enjoy developing & designing Web solutions. I love symmetry, balance and collecting postcards from art museums. I also enjoy making things from knitted hats to websites.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      </Container>
    </React.Fragment>
  );
}

export default ReadMeItem;