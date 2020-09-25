import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Logout = ({ startLogout }) => (
  <Button id="logout" onClick={startLogout} variant="outlined" color="primary" disableElevation>
    <span>Logout</span>
    <ExitToAppIcon/>
  </Button>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Logout);
