/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

function ButtonWide({ ...props }) {
  const ButtonWideStyled = styled.button`
    background-color: ${({ backgroundColor }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      backgroundColor || colors.secondary};
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 12px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: ${({ width }) => width || '75px'};
    height: 25px;
  `

  return <ButtonWideStyled>{props.children}</ButtonWideStyled>
}

ButtonWide.propTypes = {
  children: PropTypes.node,
}

export default ButtonWide
