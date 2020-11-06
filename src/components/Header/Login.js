import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

import Button from '@material-ui/core/Button';

export const Login = ({ startLogin }) => (
  <Button onClick={startLogin}>Login with Google</Button>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
