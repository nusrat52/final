import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {reducer} from "./reducers/allreducers"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(thunk)
 ));




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

