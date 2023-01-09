import React from 'react'
import { ButtonWide } from '../components/atoms'
import { Header, SubHeader } from '../components/layout'
import { Houses } from '../components/organisms'
import { Grid, GridItem, colors } from '../styles'

// Llamar al componente Home
function FrontPage() {
  return (
    <>
      {/* Hay un componente Body vacio.
    Mejor hacer la estructura principal con Body y luego importar Body aquí y,
    pasarle el Grid y su contenido como hijos */}
      <Header />
      <SubHeader />
      <Grid>
        <GridItem
          padding="0px"
          columns="1fr 1fr 1fr"
          rows="185px 185px 185px" // Evitar definir tamaños fijos
          gap="0px"
          background="none"
        >
          <Houses />
          <GridItem
            padding="0px"
            columns="1fr"
            background="none"
            rows="20px"
            gridColumn="2"
          >
            <ButtonWide width="100px" backgroundColor={colors.blue}>
              Cargar más
            </ButtonWide>
          </GridItem>
        </GridItem>

        <GridItem columns="1fr" width="100%">
          MAPA
        </GridItem>
      </Grid>
    </>
  )
}

export default FrontPage
