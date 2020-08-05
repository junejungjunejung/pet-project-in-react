import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <div className="app">
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </div>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
