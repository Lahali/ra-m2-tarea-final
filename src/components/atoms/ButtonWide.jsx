import React from 'react'
import styled from 'styled-components'

function ButtonWide({ ...props }) {
  const ButtonWideStyled = styled.button`
    background-color: ${({ backgroundColor }) => backgroundColor || '#8077a3'};
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 12px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 75px;
    height: 25px;
  `

  return <ButtonWideStyled>{props.children}</ButtonWideStyled>
}

export default ButtonWide
