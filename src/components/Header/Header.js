import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { GitHub, LinkedIn } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import logo from '../../image/junejung-logo.svg';

const styles  = (theme) => ({
  appBar: {
    display: 'flex',
    zIndex: theme.zIndex.drawer + 1,
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
  constructor() {
    super();
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
          <div id="logo-container">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link to='/'><img src={logo} alt='logo' id="logo" /></Link>
            </IconButton>
            <Typography variant="h6" className={`header-title ${classes.title}`}>
              <Link to='/' id="logo-text">June Jung</Link>
            </Typography>
          </div>

          <Typography id="header-dashboard-link" variant="subtitle1" className={classes.title}>
            {this.state.log !== 'noUser' && <Link to='/dashboard'>Dashboard</Link>}
          </Typography>

        <a href="https://www.linkedin.com/in/junejungjunejung/" className="header-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </a>

        <a href="https://github.com/junejungjunejung" className="header-links" target="_blank" rel="noopener noreferrer">
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