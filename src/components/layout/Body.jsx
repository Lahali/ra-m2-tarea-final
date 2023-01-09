import React from 'react'
import styled from 'styled-components'
import { Button, MapContainer } from '../atoms'
import { Houses } from '../organisms'
import { Grid, colors } from '../../styles'
import Header from './Header'
import SubHeader from './SubHeader'

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin-bottom: 5rem;
`

function Body() {
  return (
    <>
      <Header />
      <SubHeader />
      <Grid>
        <Houses />
        <MapContainer gridColumn="1fr" width="50vw" height="92%">
          Mapa
        </MapContainer>
      </Grid>
      <DivStyled>
        <Button width="100px" backgroundColor={colors.blue}>
          Cargar más
        </Button>
      </DivStyled>
    </>
  )
}

export default Body
