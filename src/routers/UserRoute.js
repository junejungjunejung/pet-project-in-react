import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const UserRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} render={props => (
      isAuthenticated 
      ? 
      (<Component {...props} />) 
      : 
      (<Redirect to={{pathname: "/", state: {from: props.location}}} />)
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(UserRoute);
