import React from 'react'
import { Header, SubHeader } from '../components/layout'
import { CardHouse } from '../components/molecules'
import { Grid, GridItem } from '../styles'

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
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
        </GridItem>

        <GridItem columns="1fr">Pruebo cositas</GridItem>
      </Grid>
    </>
  )
}

export default FrontPage
