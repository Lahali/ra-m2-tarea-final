import React from 'react'
import { colors } from '../../styles'
import { Button, Icon } from '../atoms'

function ButtonSearch() {
  return (
    <Button
      height="37px"
      width="37px"
      background={`linear-gradient(135deg, ${colors.lightBlue} 50%, ${colors.blue})`}
    >
      <Icon />
    </Button>
  )
}

export default ButtonSearch
