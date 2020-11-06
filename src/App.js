import React from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { history } from './store/configureStore';

const App = () => (
  <Router history={history}>
    <AppRouter />
  </Router>
);

export default App;
