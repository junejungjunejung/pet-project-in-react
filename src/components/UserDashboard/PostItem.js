import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    display: 'flex'
  },
});

const PostItem = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Post Title
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Date
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Post Summary
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default PostItem;