import React from 'react'
import ReactDOM from 'react-dom'

// Data layer
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

// Data store
import { createStore, combineReducers } from 'redux'

// Router
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const GQL_URI = process.env.GQL_URI || 'http://localhost:3000/graphql' // eslint-disable-line

const client = new ApolloClient({
  link: new HttpLink({ uri: GQL_URI }),
  cache: new InMemoryCache()
})

import * as reducers from './store/reducers'
const reducer = combineReducers({ ...reducers })

import {
  AuthCallback,
  views
} from './components'

import './theme/base.scss'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = createBrowserHistory()

// const auth = new Auth()
//
// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication()
//   }
// }

const {
  Home,
  Settings
} = views

const App = (
  <ApolloProvider client={client} store={store}>
    <Router history={history}>
      <Switch>
        <Route exact name='home' path='/' component={Home} />
        <Route exact name='settings' path='/settings' component={Settings} />
        {/* <Route exact name='auth-callback' path='/auth-callback' component={AuthCallback} /> */}
      </Switch>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(App, document.getElementById('root'))
