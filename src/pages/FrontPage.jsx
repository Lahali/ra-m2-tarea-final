import React from 'react'
import { ButtonWide } from '../components/atoms'
import { Header, SubHeader } from '../components/layout'
import { Houses } from '../components/organisms'
import { Grid, GridItem, colors } from '../styles'

function FrontPage() {
  return (
    <>
      <Header />
      <SubHeader />
      <Grid>
        <GridItem
          padding="0px"
          columns="1fr 1fr 1fr"
          rows="185px 185px 185px"
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
            <ButtonWide width="90px" background={colors.blue}>
              Cargar más
            </ButtonWide>
          </GridItem>
        </GridItem>

        <GridItem columns="1fr">MAPA</GridItem>
      </Grid>
    </>
  )
}

export default FrontPage
