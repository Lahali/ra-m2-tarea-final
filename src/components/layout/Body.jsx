import React from 'react'
import { Houses } from '../organisms'
import { Grid } from '../../styles'
import Header from './Header'
import SubHeader from './SubHeader'

function Body() {
  return (
    <>
      <Header />
      <SubHeader />
      <Grid>
        <Houses />
      </Grid>
    </>
  )
}

export default Body
