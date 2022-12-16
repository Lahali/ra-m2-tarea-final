import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: ${colors.red};
`

const ListStyled = styled.li`
  display: inline;
  color: ${colors.main};
  padding-left: 15px;
  padding-right: 15px;
  &:hover {
    font-weight: bold;
  }
`

function Header() {
  return (
    <HeaderStyled>
      <div>MIPISO.com.es</div>
      <div>
        <ul>
          <ListStyled>Buscador</ListStyled>
          <ListStyled>Datos</ListStyled>
          <ListStyled>Mi Perfil</ListStyled>
        </ul>
      </div>
    </HeaderStyled>
  )
}

export default Header
