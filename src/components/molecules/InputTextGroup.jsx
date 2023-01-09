import React from 'react'
import PropTypes from 'prop-types'

import { Input, Label } from '../atoms'

// Debería llamarse SelectGroup
function InputTextGroup({ id, children }) {
  return (
    // el Label no tiene porque rodear el Input
    <Label id={id}>
      <Input id={id}>{children}</Input>
    </Label>
  )
}

// Un select debe tener options, y le faltan props para pasar al Input
InputTextGroup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}
export default InputTextGroup
