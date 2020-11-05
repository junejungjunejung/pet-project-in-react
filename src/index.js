import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import CssBaseline from '@material-ui/core/CssBaseline';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import { startSetPosts } from './actions/post';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);

const renderApp = () => ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPosts()).then(() => {
      renderApp();
    });
  } else {
    store.dispatch(logout());
    renderApp();
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
