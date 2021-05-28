import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {reducer} from "./reducers/allreducers"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux"
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(thunk)
 ));




ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </HashRouter>
  ,
  document.getElementById('root')
);

