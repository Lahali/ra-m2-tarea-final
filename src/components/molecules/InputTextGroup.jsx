import React from 'react'
import PropTypes from 'prop-types'

import { Input, Label } from '../atoms'

function InputTextGroup({ id, placeholder }) {
  return (
    <Label id={id}>
      <Input placeholder={placeholder} id={id} />
    </Label>
  )
}

InputTextGroup.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
}
export default InputTextGroup
