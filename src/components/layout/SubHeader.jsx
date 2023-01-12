import React from 'react'
import styled from 'styled-components'
import { Grid, colors } from '../../styles'
import { SelectGroup, ButtonSearch } from '../molecules'

const SubHeaderStyled = styled(Grid)`
  display: flex;
  padding: 1rem;
  background-color: ${colors.lightGreen};
  border-top: 3px solid ${colors.green};
  border-bottom: 3px solid ${colors.green};
`

function SubHeader() {
  const propertyType = [
    { id: 1, property: 'Piso, chalet o garaje...' },
    { id: 2, property: 'Piso' },
    { id: 3, property: 'Chalet' },
    { id: 4, property: 'Garaje' },
  ]

  const cities = [
    {
      id: 1,
      city: 'Madrid, Barcelona o Zaragoza...',
    },
    { id: 2, city: 'Madrid' },
    { id: 3, city: 'Barcelona' },
    { id: 4, city: 'Zaragoza' },
  ]

  return (
    <SubHeaderStyled columns="1fr 1fr 1fr 1fr" marginTop="0" gap="1rem">
      <SelectGroup cityOptions={cities} propertyOptions={propertyType} />
      <ButtonSearch />
    </SubHeaderStyled>
  )
}

export default SubHeader
