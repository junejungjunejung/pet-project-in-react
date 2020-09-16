import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CatFacts from './CatFacts';
import WeatherInfo from './WeatherInfo';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div id="sidebar-layout" className="sidebar">
      <WeatherInfo className={classes.content} />
      <CatFacts className={classes.content} />
    </div>
  );
}


