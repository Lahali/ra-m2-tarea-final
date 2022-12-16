/* eslint-disable indent */
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

function Icon() {
  const ButtonSearchStyled = styled.button`
    background: ${({ background }) =>
      // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
      background ||
      `linear-gradient(135deg, ${colors.lightBlue} 50%, ${colors.blue})`};

    height: ${({ height }) => height || '37.36px'};
    width: ${({ width }) => width || '37.36px'};
    border-radius: 5px;
    border: none;
    color: ${colors.white};
  `

  return (
    <ButtonSearchStyled>
      <span className="material-symbols-outlined">search</span>
    </ButtonSearchStyled>
  )
}

export default Icon
