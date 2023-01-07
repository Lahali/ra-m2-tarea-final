import React from 'react'
import PropTypes from 'prop-types'

import { Input, Label } from '../atoms'

function InputTextGroup({ id, children }) {
  return (
    <Label id={id}>
      <Input id={id}>{children}</Input>
    </Label>
  )
}

InputTextGroup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}
export default InputTextGroup
