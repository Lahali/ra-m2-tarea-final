import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const InputStyled = styled.select`
  border-radius: 5px;
  border: solid 1.5px lightgray;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  width: 19rem;
  box-shadow: 2px 2px 5px ${colors.shade};
  appearance: none;
`
function Input({ id, children }) {
  return <InputStyled name={id}>{children}</InputStyled>
}

Input.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}

export default Input
