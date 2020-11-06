import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    display: 'flex'
  },
}));

const PostItem = ({ id, postTitle, postBody, createdAt }) => {
  
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <Link to={`/read/${id}`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {postTitle}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {moment(createdAt).format('MMMM Do, YYYY')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {postBody}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      
      <CardActions>
        <Button size="small" color="primary">
          <Link className="list-item" to={`/edit/${id}`}>Edit</Link>
        </Button>
        <Button size="small" color="primary" >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostItem;