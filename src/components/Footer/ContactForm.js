import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography>
          Hi, I'm June.<br/>
          A Front-end developer & UX/UI designer
          based in Vancouver, Canada.
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="contactName" label="Name" />
          <TextField id="contactEmail" label="Email" />
          <Grid item xs={12}>
            <TextField 
              id="contactMessage" 
              label="Message" 
              multiline
              rows={4}
            />
          </Grid>
        </form>
        <Button variant="outlined">Let’s have a convo !</Button>
      </Grid>
    </React.Fragment>
  );
}