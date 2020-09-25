import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  item: {
    justifySelf: 'start',
  },
  text: {
    paddingLeft: '1rem'
  }
}));

export default function BuildTools() {
  const classes = useStyles();

  return (
    <div id="build-tools">
      <Typography className={classes.text}> This website is built with, </Typography>
      <List className={`build-tools-layout`}>
        {devTools.map((devTool) => (
          <ListItem button key={devTool.id} className={classes.item}>
            <FiberManualRecordIcon />
            <a href={devTool.url} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={devTool.name} />
            </a>
          </ListItem>
        ))}
      </List>
      <Typography className={classes.text}> and more... </Typography>
    </div>
  );
}


const devTools = [
  {
    name: 'React.js',
    id:1,
    url: 'https://reactjs.org/'
  },
  {
    name: 'Firebase',
    id:2,
    url: 'https://firebase.google.com/'
  },
  {
    name: 'Material-UI',
    id:3,
    url: 'https://material-ui.com/'
  },
  {
    name: 'Weatherstack',
    id:4,
    url: 'https://weatherstack.com/'
  },
  {
    name: 'Unsplash',
    id:5,
    url: 'https://unsplash.com/developers'
  },
  {
    name: 'TheCatApi',
    id:6,
    url: 'https://thecatapi.com/'
  },
  {
    name: 'Meow Facts',
    id:7,
    url: 'https://github.com/wh-iterabb-it/meowfacts'
  },
  {
    name: 'Figma',
    id:8,
    url: 'https://www.figma.com/'
  },
  {
    name: 'GitHub',
    id:9,
    url: 'https://github.com/'
  },
]
