import React from 'react'
import styled from 'styled-components'
import { Grid, colors } from '../../styles'
import { Icon } from '../atoms'
import { InputTextGroup } from '../molecules'

function SubHeader() {
  const SubHeaderStyled = styled(Grid)`
    padding: 1rem;
    background-color: ${colors.lightGreen};
    border-top: 3px solid ${colors.green};
    border-bottom: 3px solid ${colors.green};
    margin-top: 0;
  `

  return (
    <SubHeaderStyled
      columns=" 1fr 1fr 1fr 1fr"
      gap="1rem"
      marginLeft="0"
      marginRight="0"
    >
      <InputTextGroup
        id="propertyType"
        placeholder="Piso, chalet o garaje..."
      />
      <InputTextGroup id="city" placeholder="Madrid, Barcelona o Zaragoza..." />
      <Icon />
    </SubHeaderStyled>
  )
}

export default SubHeader
