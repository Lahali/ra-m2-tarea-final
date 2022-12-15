import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem;
`

const ListStyled = styled.li`
  display: inline;
  padding-left: 15px;
  padding-right: 15px;
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
