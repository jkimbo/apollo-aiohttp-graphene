import React, { Component } from 'react'
// Types Validation
import PropTypes from 'prop-types'

class MainWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {
      children
    } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

MainWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ])
}

export { MainWrapper }
