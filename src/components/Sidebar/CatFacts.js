import React, { useState, useCallback }from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//import { catFact, catPicture } from '../../actions/cat';

import axios from 'axios';

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
  
  const [image, setImage] = useState("https://cdn2.thecatapi.com/images/MWU55D0sw.jpg")
  const [text, setText] = useState('Click the button below to check cat facts');
  const [isSending, setIsSending] = useState(false)
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    setIsError(false);

    try {
      const [resOne, resTwo] = await axios.all([
        axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'),
        axios.get('https://api.thecatapi.com/v1/images/search')
      ]);
      setText(resOne.data.text);
      setImage(resTwo.data[0].url);
    } catch (error){
      setIsError(true);
    }

    setIsSending(false);
  },[isSending]);

  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2">
          Daily dose of Cat facts
        </Typography>

        <CardMedia
          className={classes.media}
          image={ image }
          title="dailyKitty"
        />
        
        <CardContent>
          <Typography variant="body1" component="p">
            {isError ? `Can't get a cat fact. Try again.` : text }
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="outlined" size="small" color="primary" disabled={isSending} onClick={fetchData}>
            Check other facts !
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}