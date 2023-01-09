import React from 'react'
import PropTypes from 'prop-types'

import { Select, Label } from '../atoms'

// Debería llamarse SelectGroup
function SelectGroup({ id, children }) {
  return (
    // el Label no tiene porque rodear el Input
    <>
      <Label id={id} />
      <Select id={id}>{children}</Select>
    </>
  )
}

// Un select debe tener options, y le faltan props para pasar al Input
SelectGroup.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}
export default SelectGroup
