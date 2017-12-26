/* eslint-disable */
import React from 'react'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import fetch from 'unfetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink, createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloProvider } from 'react-apollo'

import { Home } from '..'

describe('Home Test', () => {
  test('Home component renders', () => {

    const GQL_URI = 'http://localhost:3000/graphql'

    const client = new ApolloClient({
      link: createHttpLink({ uri: GQL_URI, fetch }),
      cache: new InMemoryCache()
    })

    const store = {}

    const tree = renderer.create(
      <ApolloProvider client={client} store={store}>
        <Home />
      </ApolloProvider>,
    ).toJSON();

    const snapshot = { type: 'div', props: {}, children: [ 'Loading' ] }
    expect(tree).toEqual(snapshot)
  })
})
