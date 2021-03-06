import './global.css'
import 'react-table/react-table.css'

import React from "react";
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux';
import App from './components/App'
import Reducers from './reducers/CombinedReducers'

import createHistory from 'history/createBrowserHistory'

import { fetchMe, fetchPeople } from './actions/AsyncActions'

const history = createHistory()
const middlewares = [thunkMiddleware, routerMiddleware(history)]
let store = createStore(Reducers, applyMiddleware(...middlewares))

window.store = store

// bootstrap state
store.dispatch(fetchMe());
store.dispatch(fetchPeople());

// renderApp function for hot reloading
const renderApp = App => {
  const NextApp = require('./components/App').default;
  ReactDOM.render(
    <NextApp store={store} />,
    document.getElementById('root')
  );
}

// hot loading
if (module.hot) {
  module.hot.accept("./components/App", () => { renderApp(App) })
}

// initial render
renderApp(App)
