import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

const devTools = [
  {
    name: 'React.js',
    icon: '',
    url: 'url'
  },
  {
    name: 'Firebase',
    icon: '',
    url: 'url'
  },
  {
    name: 'Material-UI',
    icon: '',
    url: 'url'
  },
]

export default function BuildTools() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid>
        <Typography>This website is built with,</Typography>
        <List>
          {devTools.map((devTool) => (
            <ListItem button>
              <ListItemText primary={devTool.name} />
            </ListItem>
          ))}
        </List>
        <Typography>and more...</Typography>
      </Grid>
    </React.Fragment>
  );
}