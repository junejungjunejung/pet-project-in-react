import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    padding: theme.spacing(3),
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <p className={classes.content}> weather api </p>
            <Divider />
            <p className={classes.content}>cat api</p>
          </div>
        </Drawer>
      </Container>
    </React.Fragment>
  );
}


