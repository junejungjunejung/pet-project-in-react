import React from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <AppRouter />
  </Router>
);

export default App;
