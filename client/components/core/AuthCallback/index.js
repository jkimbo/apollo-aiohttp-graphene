import React, { Component } from 'react'
// Types Validation
// import PropTypes from 'prop-types'
import queryString from 'query-string'
// import auth0 from 'auth0-js'
import { AuthService } from '../../../utils'

class AuthCallback extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      location: {
        hash
      },
      history
    } = this.props

    // get id token data from hash
    // process it
    // spread it to the global store
    //   if (hash
    //     && (hash.indexOf('access_token') > -1)
    //     && (hash.indexOf('id_token') > -1)
    //     && (hash.indexOf('token_type') > -1)
    //     && (hash.indexOf('expires_in') > -1)
    //     && (hash.indexOf('state') > -1)
    //   ) {
    //
    //     new Promise((resolve, reject) => {
    //       resolve(new AuthService().parseHash({ hash }))
    //     })
    //       .then((user)=> {
    //         console.log(user)
    //         //history.push('/')
    //       })
    //   } else {
    //     //history.push('/')
    //   }
    // }

  }


  render() {

    console.log(this.props)

    // const {
    //   children
    // } = this.props

    return (
      <div>
        Callback auth
        {/* {hash} */}
      </div>
    )
  }
}

// MainWrapper.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.func,
//     PropTypes.object
//   ])
// }

export { AuthCallback }
