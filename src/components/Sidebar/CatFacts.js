import React, { useState, useCallback }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import cat from '../../image/cat-solid.svg';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    margin: '.75rem'
  },
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: '2rem',
    paddingRight: '.5rem' 
  },
  button: {
    width: '250px',
    height: '40px',
  },
  media: {
    height: 300,
    maxWidth: 300,
    objectFit: 'cover',
    padding: '.5rem',
    borderRadius: '20px'
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
        axios.get('https://meowfacts.herokuapp.com/'),
        axios.get('https://api.thecatapi.com/v1/images/search')
      ]);
      setText(resOne.data.data[0]);
      setImage(resTwo.data[0].url);
    } catch (error){
      setIsError(true);
    }

    setIsSending(false);
  },[isSending]);

  return (
    <div className={classes.root} >
      <div className={classes.header}>
        <img src={cat} className={classes.icon} alt="cat icon"/>
        <Typography variant="h6" component="h2">
          Daily dose of Cat facts
        </Typography>
      </div>

      <div className={`sidebar-mobile-hide ${classes.content}`}>
        <img src={ image } alt="Cat" className={classes.media}/>
        
        <CardContent>
          <Typography variant="body1" component="p">
            {isError ? `Can't get a cat fact. Try again.` : text }
          </Typography>
        </CardContent>

        <CardActions>
          <Button className={classes.button} variant="outlined" size="small" color="primary" disabled={isSending} onClick={fetchData}>
            Check other facts !
          </Button>
        </CardActions>
      </div>
    </div>
  );
}