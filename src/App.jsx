import React from 'react'
import { Header, SubHeader } from './components/layout'
import { Grid, GridItem } from './styles'

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <Grid>
        <GridItem>Holis caracolis</GridItem>
        <GridItem>Pruebo cositas</GridItem>
      </Grid>
    </>
  )
}

export default App
