import React from 'react'
import styled from 'styled-components'
import { MapContainer, Button } from '../components/atoms'
import { Body } from '../components/layout'
import { Houses } from '../components/organisms'
import { Grid, colors } from '../styles'

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin-bottom: 5rem;
`

function Home() {
  // Debe ser <Body><Grid... <--- aquí todo el contenido de Home></Body>
  return (
    <Body>
      <Grid
        columns="1fr 1fr"
        gap="0"
        alignContent="center"
        justifyContent="center"
      >
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
    </Body>
  )
}

export default Home
