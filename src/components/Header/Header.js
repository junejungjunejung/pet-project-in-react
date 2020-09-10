import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Comment, GitHub, LinkedIn } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const styles  = (theme) => ({
  appBar: {
    display: 'flex',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  divider: {
    marginRight: '.75rem'
  }
});

// need to auto refresh 
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log: localStorage.getItem('loggedIn'),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.log !== this.state.log) {
      this.setState({ state: this.state });
    }
  }

  render(){
    const { classes } = this.props;

    const logout = <Logout color="inherit" />;
    const login = <Login color="inherit" />;

    return (
    <AppBar position="sticky" color="default" className={classes.appBar}>
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Comment />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to='/'>BlogAboutYourDay</Link>
          </Typography>
          <Typography id="header-dashboard-link" variant="subtitle1" className={classes.title}>
            {this.state.log !== 'noUser' && <Link to='/dashboard'>Dashboard</Link>}
          </Typography>

        <a href="https://www.linkedin.com/in/junejungjunejung/" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </a>

        <a href="https://github.com/junejungjunejung" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
        </a>

        <Divider className={classes.divider} orientation="vertical" flexItem />
        { this.state.log !== 'noUser' ? logout : login }
      </Toolbar>
    </AppBar>
    )
  }
}

export default withStyles(styles)(Header);