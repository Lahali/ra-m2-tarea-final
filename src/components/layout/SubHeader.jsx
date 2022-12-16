import React from 'react'
import styled from 'styled-components'
import { Grid } from '../../styles'
import { Button } from '../atoms'
import { InputTextGroup } from '../molecules'

function SubHeader() {
  const SubHeaderStyled = styled(Grid)`
    padding: 1rem;
    background-color: #e6f2f2;
    border-top: 3px solid #cde7e7;
    border-bottom: 3px solid #cde7e7;
    margin-top: 0;
  `

  return (
    <SubHeaderStyled columns=" 1fr 1fr 1fr 1fr" gap="1rem" margin="0">
      <InputTextGroup placeholder="Piso, chalet o garaje..." />
      <InputTextGroup placeholder="Madrid, Barcelona o Zaragoza..." />
      <Button />
    </SubHeaderStyled>
  )
}

export default SubHeader
