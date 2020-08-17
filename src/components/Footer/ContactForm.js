import React, { useState } from "react";
import axios from "axios";

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

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xrgyvzga",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks! I will get back to you soon.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

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
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
          <TextField id="name" label="Name" />
          <TextField id="email" label="Email" />
          <Grid item xs={12}>
            <TextField 
              id="message" 
              label="Message" 
              name="message"
              multiline
              rows={4}
            />
          </Grid>
          <Button variant="outlined" type="submit" disabled={serverState.submitting}>Let’s have a convo !</Button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </Grid>
    </React.Fragment>
  );
}