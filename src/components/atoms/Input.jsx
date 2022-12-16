import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

function Input({ id, placeholder }) {
  const InputStyled = styled.input`
    border-radius: 5px;
    border: solid 1.5px lightgray;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 1rem;
    width: 19rem;
    box-shadow: 2px 2px 5px ${colors.shade};
  `

  return <InputStyled type="text" id={id} name={id} placeholder={placeholder} />
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
