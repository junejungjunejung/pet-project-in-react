import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/post';
import filtersReducer from '../reducers/filters';
import weatherReducer from '../reducers/weather';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      posts: postsReducer,
      filters: filtersReducer,
      weather: weatherReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

