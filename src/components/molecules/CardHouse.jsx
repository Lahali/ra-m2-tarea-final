import React from 'react'
import styled from 'styled-components'
import { ButtonWide, Card } from '../atoms'
import { colors } from '../../styles'

const ImgStyled = styled.img`
  border-radius: 5px;
`
const ParragrafStyled = styled.p`
  font-size: 10px;
`
const DivFooterCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
  margin: 5px;
`
const DivParr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5px;
  color: ${colors.main};
`
function CardHouse() {
  return (
    <Card>
      <div>
        <ImgStyled
          alt="house"
          src="https://placeimg.com/160/100/arch/grayscale"
        />
      </div>
      <DivParr>
        <ParragrafStyled>Piso en Barcelona, Grac...</ParragrafStyled>
      </DivParr>
      <DivFooterCard>
        <h5>939.000€</h5>
        <ButtonWide>Localizar</ButtonWide>
      </DivFooterCard>
    </Card>
  )
}

export default CardHouse
