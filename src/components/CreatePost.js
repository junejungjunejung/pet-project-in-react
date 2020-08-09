import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  container: {
    maxWidth: '75ch'
  }
}));

const CreatePost = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Button>Back to Dashboard</Button>
      <div className={classes.container}>
        <form className={classes.root}>
          <TextField
            required
            id="outlined-required"
            label="Post Title"
            variant="outlined"
          />
          <TextField
            id="outlined"
            label="Post Content"
            multiline
            rows={20}
            type="search"
            variant="outlined"
          />
        </form>
        <Button variant="contained" color="primary" disableElevation>Create Post</Button>
      </div>
    </React.Fragment>
  );
}

export default CreatePost;