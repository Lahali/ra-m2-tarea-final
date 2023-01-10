import React from 'react'
import styled from 'styled-components'
import { Grid, colors } from '../../styles'
import { Icon } from '../atoms'
import { SelectGroup } from '../molecules'

const SubHeaderStyled = styled(Grid)`
  display: flex;
  padding: 1rem;
  background-color: ${colors.lightGreen};
  border-top: 3px solid ${colors.green};
  border-bottom: 3px solid ${colors.green};
`

function SubHeader() {
  return (
    <SubHeaderStyled columns="1fr 1fr 1fr 1fr" marginTop="0" gap="1rem">
      <SelectGroup id="propertyType" placeholder="Piso, chalet o garaje..." />
      <SelectGroup id="cities" placeholder="Madrid, Barcelona o Zaragoza..." />
      <Icon />
    </SubHeaderStyled>
  )
}

export default SubHeader
