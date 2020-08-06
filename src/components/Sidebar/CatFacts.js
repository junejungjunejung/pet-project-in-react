import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import catImage from '../../image/cute-cat.jpg';
// Need to bring cat image from API. set const and bring them.

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  media: {
    height: 300,
  },
}));

export default function CatFacts() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2">
          Daily dose of Cat facts
        </Typography>

        <CardMedia
          className={classes.media}
          image={catImage}
          title="dailyKitty"
        />
        
        <CardContent>
          <Typography variant="body1" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="outlined" size="small" color="primary">
          Check other facts !
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}