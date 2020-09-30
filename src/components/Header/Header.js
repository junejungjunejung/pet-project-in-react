import React from 'react';
import { connect } from 'react-redux';
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
    justifyContent: 'space-between',
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
  constructor(props) {
    super();
    this.state = {
      log: props.userID,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.log !== this.state.log) {
      this.setState({ log: !prevState.log });
    }
  }

 
  render(){
    const { classes } = this.props;

    const logout = <Logout color="inherit" />;
    const login = <Login color="inherit" />;

    return (
    <AppBar position="sticky" color="default">
      <Toolbar className={classes.appBar}>
          <div id="logo-container" className={classes.title}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link to='/'><img src={logo} alt='logo' id="logo" /></Link>
            </IconButton>
            <Typography variant="h6" className={`header-title`}>
              <Link to='/' id="logo-text">June Jung</Link>
            </Typography>
          </div>

      {this.state.log && <Link className="header-dashboard-link" to='/dashboard'>Dashboard</Link>}

      <div>
        <a href="https://www.linkedin.com/in/junejungjunejung/" className="header-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit"> <LinkedIn /> </IconButton>
        </a>
        <a href="https://github.com/junejungjunejung" className="header-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit"> <GitHub /> </IconButton>
        </a>
      </div>

      <Divider className={classes.divider} orientation="vertical" flexItem />
        { this.state.log ? logout : login }
      </Toolbar>
    </AppBar>
    )
  }
}

const mapStateToProps = (state) => ({
  userID: state.auth.uid
});

export default withStyles(styles)(connect(mapStateToProps)(Header));