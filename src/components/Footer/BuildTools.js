import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    height: 200
  },
}));

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
    name: 'weatherstack',
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
    name: 'Cat Facts',
    id:7,
    url: 'https://cat-fact.herokuapp.com/#/'
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

export default function BuildTools() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography>This website is built with,</Typography>
      <List className={classes.list}>
        {devTools.map((devTool) => (
          <ListItem button key={devTool.id}>
            <FiberManualRecordIcon />
            <a href={devTool.url} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={devTool.name} />
            </a>
          </ListItem>
        ))}
      </List>
      <Typography>and more...</Typography>
    </Grid>
  );
}