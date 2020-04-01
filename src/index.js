// @flow
// Essential for React
import * as React from 'react'
import ReactDOM from 'react-dom'
// API from redux createStore(<reducer>)
import { createStore, applyMiddleware } from 'redux'
// Component from react-redux help share store to all container components
import { Provider } from 'react-redux'
// Import the reducer function with arbitrary name
import rootReducer from './redux/reducers'
// Import thunk
import thunk from 'redux-thunk'
// Import redux logger
import { createLogger } from 'redux-logger'
// Import initState
import {initState} from './redux/initState'

import { HashRouter } from 'react-router-dom'

import App from './components/App'

//const middlewares = [ thunk, createLogger() ]; 
const middlewares = [ thunk ]; 

const root = document.getElementById("root");



const appStore = createStore(rootReducer, initState, applyMiddleware(...middlewares))

if (root !== null) {
  ReactDOM.render(
    <Provider store={ appStore }>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider> 
  , root)
}


