import React, { Component } from 'react'
// Types Validation
import PropTypes from 'prop-types'
// Data Layer
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
// Relative imports
import { MainWrapper } from '../..'
import { AuthService } from '../../../utils'

class Home extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login() {
    new AuthService().login()
  }

  render() {
    const {
      data: {
        loading,
        patron
      }
    } = this.props

    console.log(this.props)

    return (
      <MainWrapper>
        {loading ? 'Loading' : JSON.stringify(patron)}
        {/* <button onClick={() => this.login()}>Login</button> */}
      </MainWrapper>
    )
  }
}

// propTypes definition
Home.propTypes = {
  data: PropTypes.object,
}

const query_test = gql`
  query testString {
    patron {
      name,
      id,
      age
    }
  }
`
const withApollo = compose(
  graphql(query_test)
)(Home)

export { withApollo as Home }
