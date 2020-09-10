import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CatFacts from './CatFacts';
import WeatherInfo from './WeatherInfo';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: '100%', 
    position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
    zIndex: 1,
    top: 0, /* Stay at the top */
    left: 0,
    overflowX: 'hidden', /* Disable horizontal scroll */
    paddingTop: '4rem'
  },
  content: {
    padding: theme.spacing(3),
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div id="sidebar-layout"className={classes.sidebar}>
      <WeatherInfo className={classes.content} />
      
      <CatFacts className={classes.content} />
    </div>
  );
}


