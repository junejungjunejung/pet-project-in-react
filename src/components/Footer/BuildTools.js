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
    icon: '',
    url: 'url'
  },
  {
    name: 'Firebase',
    id:2,
    icon: '',
    url: 'url'
  },
  {
    name: 'Material-UI',
    id:3,
    icon: '',
    url: 'url'
  },
  {
    name: 'React.js',
    id:4,
    icon: '',
    url: 'url'
  },
  {
    name: 'Firebase',
    id:5,
    icon: '',
    url: 'url'
  },
  {
    name: 'Material-UI',
    id:6,
    icon: '',
    url: 'url'
  },
  {
    name: 'React.js',
    id:7,
    icon: '',
    url: 'url'
  },
  {
    name: 'Firebase',
    id:8,
    icon: '',
    url: 'url'
  },
  {
    name: 'Material-UI',
    id:9,
    icon: '',
    url: 'url'
  },
]

export default function BuildTools() {
  const classes = useStyles();

  return (
    <React.Fragment>
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
              <ListItemText primary={devTool.name} />
            </ListItem>
          ))}
        </List>
        <Typography>and more...</Typography>
      </Grid>
    </React.Fragment>
  );
}