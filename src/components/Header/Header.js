import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { GitHub, LinkedIn } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import logo from '../../image/junejung-logo.svg';

const Header = (props) => {
  const [log, setLog] = useState(props.userID)
  const [nav, setNav] = useState(false)

  useEffect(()=>{
    setLog(props.userID)
  },[props.userID])

  useEffect(()=>{
    if(log === undefined){
      setNav(false)
    }else{
      setNav(true)
    }
  },[log])

  const LogToggle = () => {
    if(nav){
      return(
        <Logout color="inherit" />
      )
    }else{
      return(
        <Login color="inherit" />
      )
    }
  }

  const DashboardToggle = () => {
    if(nav){
      return(
        <Link className="header-dashboard-link" to='/dashboard'>Dashboard</Link>
      )
    }else{
      return <div></div>
    }
  }

  return (
  <AppBar position="sticky" color="default">
    <Toolbar className="top-nav">
      <div id="logo-container" >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Link to='/'><img src={logo} alt='logo' id="logo" /></Link>
        </IconButton>

        <Typography variant="h6" className="header-title">
          <Link to='/' id="logo-text">June Jung</Link>
        </Typography>
      </div>

      <DashboardToggle/>

      <div>
        <a href="https://www.linkedin.com/in/junejungjunejung/" className="header-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit"> <LinkedIn /> </IconButton>
        </a>

        <a href="https://github.com/junejungjunejung" className="header-links" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit"> <GitHub /> </IconButton>
        </a>
      </div>

      <Divider orientation="vertical" flexItem className="divider"/>

      <LogToggle/>
    </Toolbar>
  </AppBar>
  )
}

const mapStateToProps = (state) => ({
  userID: state.auth.uid
});

export default connect(mapStateToProps)(Header);

