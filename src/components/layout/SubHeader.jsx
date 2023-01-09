import React from 'react'
import styled from 'styled-components'
import { Grid, colors } from '../../styles'
import { Icon } from '../atoms'
import { SelectGroup } from '../molecules'

// const SubHeaderStyled = styled(Grid)`
//   padding: 1rem;
//   background-color: ${colors.lightGreen};
//   border-top: 3px solid ${colors.green};
//   border-bottom: 3px solid ${colors.green};
//   margin-top: 0;
//   columns: 1fr 1fr 1fr 1fr;
//   gap: 1rem;
// `

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
      <SelectGroup id="propertyType" placeholder="Piso, chalet o garaje...">
        <option disabled selected>
          Piso, chalet o garaje...
        </option>
        <option value="option1">Piso</option>
        <option value="option2">Chalet</option>
        <option value="option3">Garaje</option>
      </SelectGroup>
      <SelectGroup id="city" placeholder="Madrid, Barcelona o Zaragoza...">
        <option disabled selected>
          Madrid, Barcelona o Zaragoza...
        </option>
        <option value="option1">Madrid</option>
        <option value="option2">Barcelona</option>
        <option value="option3">Zaragoza</option>
      </SelectGroup>
      <Icon />
    </SubHeaderStyled>
  )
}

export default SubHeader
