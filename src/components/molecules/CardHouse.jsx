import React from 'react'
import styled from 'styled-components'
import { Button, Card } from '../atoms'
import { colors } from '../../styles'

const ImgStyled = styled.img`
  border-radius: 5px;
`
const ParragrafStyled = styled.p`
  font-size: 10px;
  color: ${colors.gray};
`
const DivFooterCard = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
  margin: 5px;
`

function CardHouse() {
  return (
    <Card>
      <ImgStyled
        alt="house"
        src="https://placeimg.com/160/100/arch/grayscale"
      />
      <ParragrafStyled>Piso en Barcelona, Grac...</ParragrafStyled>
      <DivFooterCard>
        <h5>939.000€</h5>
        <Button>Localizar</Button>
      </DivFooterCard>
    </Card>
  )
}

export default CardHouse
