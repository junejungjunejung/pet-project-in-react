import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexFlow: 'column nowrap',
    background: 'rgba(255,255,255,0.5)',
    borderRadius: '10px'
  },
  container: {
    maxWidth: '75ch'
  }
}));

const PostItem = (props) => {
  const classes = useStyles();
  return(
      <div className={classes.container}>
      <form className={classes.root}>
        <TextField
          id="outlined-required"
          label="Post Title"
          variant="outlined"
          value={props.post.title}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-read-only-input"
          label="Created at"
          value={moment(props.post.createdAt).format('MMMM Do, YYYY')}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined"
          label="Post Content"
          multiline
          rows={20}
          type="search"
          variant="outlined"
          value={props.post.content.length>0 ? props.post.content : 'No content.'}
          InputProps={{
            readOnly: true,
          }}
        />
      </form>
    </div>
  )
}

export default PostItem;


