import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxPromise, thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
