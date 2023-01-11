/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const ButtonStyled = styled.button`
  background: ${(background) => background || ''};
  background-color: ${({ backgroundColor }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    backgroundColor || colors.secondary};
  border: none;
  border-radius: 3px;
  color: ${colors.white};
  font-size: 12px;
  padding-right: ${(paddingRight) => paddingRight || '10px'};
  padding-left: ${(paddingLeft) => paddingLeft || '10px'};
  padding-top: ${(paddingTop) => paddingTop || '5px'};
  padding-bottom: ${(paddingBottom) => paddingBottom || '5px'};
  width: ${({ width }) => width || '75px'};
  height: ${({ height }) => height || '25px'};
`

function Button({ ...props }) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
