import React from 'react'
import PropTypes from 'prop-types'

export default function Label({ children, id }) {
  return <label htmlFor={id}>{children}</label>
}

Label.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
}
