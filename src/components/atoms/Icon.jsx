/* eslint-disable indent */
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

// El icono debe ser generico y para devolver un icono. No debe ser un button
// En molecules, o más arriba, si necesitas un icono dentro de un botón puedes hacer <Button><Icon /></Button>
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
function Icon() {
  return (
    <ButtonSearchStyled>
      <span className="material-symbols-outlined">search</span>
    </ButtonSearchStyled>
  )
}

export default Icon
