import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const SelectStyled = styled.select`
  border-radius: 5px;
  border: solid 1.5px lightgray;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  width: 19rem;
  box-shadow: 2px 2px 5px ${colors.shade};
  appearance: none;
`

function Select({ id, children }) {
  return <SelectStyled name={id}>{children}</SelectStyled>
}

Select.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}

export default Select
