import React from 'react'
import styled from 'styled-components'

function Card({ children }) {
  const CardStyled = styled.div`
    width: 150px;
    height: 175px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px lightgrey;
    background-color: white;
    margin: 5px;
  `

  return <CardStyled>{children}</CardStyled>
}

export default Card
