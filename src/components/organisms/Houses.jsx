import React from 'react'
import { Grid } from '../../styles'
import { CardHouse } from '../molecules'
import propertiesData from '../../propertiesData'

function Houses() {
  return (
    <Grid>
      {propertiesData.map((item) => (
        <CardHouse
          key={item.id}
          location={item.location}
          price={item.price}
          image={item.image}
        />
      ))}
    </Grid>
  )
}

export default Houses
