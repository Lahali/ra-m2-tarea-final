/* eslint-disable indent */
import React from 'react'
import styled from 'styled-components'

function Button({ children }) {
  const ButtonStyled = styled.button`
    background: ${({ background }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      background || 'linear-gradient(135deg, #50b7ef 50%, #097de8)'};
    height: ${({ height }) => height || '37.36px'};
    width: ${({ width }) => width || '37.36px'};
    border-radius: 5px;
    border: none;
  `

  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
