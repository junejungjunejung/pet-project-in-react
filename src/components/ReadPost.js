import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const ReadPost = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Button>Back to Dashboard</Button>
      <div className={classes.container}>
        <div>post title</div>
        <div>post date</div>
        <div>post content</div>
      </div>
    </React.Fragment>
  );
}

export default ReadPost;