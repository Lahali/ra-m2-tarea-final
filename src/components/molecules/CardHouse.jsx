import React from 'react'
import styled from 'styled-components'
import { Card } from '../atoms'

function CardHouse() {
  const ImgStyled = styled.img`
    border-radius: 5px;
  `

  return (
    <Card>
      <ImgStyled
        alt="house"
        src="https://placeimg.com/150/120/arch/grayscale"
      />
    </Card>
  )
}

export default CardHouse
