import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    display: 'flex'
  },
}));

const PostItem = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.post.postTitle}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        {moment(props.post.createdAt).format('MMMM Do, YYYY')}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.post.postBody}
      </Typography>
    </div>
  )
}

export default PostItem;