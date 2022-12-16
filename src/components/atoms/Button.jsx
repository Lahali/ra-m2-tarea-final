import React from 'react'
import styled from 'styled-components'

function Button() {
  const ButtonStyled = styled.button`
    background: linear-gradient(135deg, #50b7ef 50%, #097de8);
    height: 37.36px;
    width: 37.36px;
    border-radius: 5px;
    border: none;
  `

  return <ButtonStyled />
}

export default Button
