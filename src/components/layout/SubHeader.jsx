import React from 'react'
import styled from 'styled-components'
import { InputTextGroup } from '../molecules'

function SubHeader() {
  const SubHeaderStyled = styled.div`
    padding: 1rem;
    background-color: #e6f2f2;
    border-top: 3px solid #cde7e7;
    border-bottom: 3px solid #cde7e7;
  `

  return (
    <SubHeaderStyled>
      <InputTextGroup />
      <InputTextGroup />
    </SubHeaderStyled>
  )
}

export default SubHeader
