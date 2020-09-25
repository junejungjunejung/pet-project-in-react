import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import { ReactComponent as GoogleIcon } from '../../image/google-brands.svg';

export const Login = ({ startLogin }) => (
  <Button id="login" onClick={startLogin} variant="outlined" color="primary" disableElevation>
    <span>Login with</span> <SvgIcon component={GoogleIcon} viewBox="0 0 600 476.6" />
  </Button>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
