import React from 'react'
import PropTypes from 'prop-types'

export default function Label({ children }) {
  return <label htmlFor="label">{children}</label>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  //   htmlFor: PropTypes.string,
}
