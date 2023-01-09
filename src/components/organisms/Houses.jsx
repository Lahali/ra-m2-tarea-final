import React from 'react'
import { Grid } from '../../styles'
import { CardHouse } from '../molecules'

function Houses() {
  // Aquí debería de usarse el Grid.
  const house = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Grid>
      {/* Intenta crear un array vacio y mapear, ahora son 9,
      pero si son 100 para probar funcionalidades de cargar más, etc... seria inviable */}
      {house.map(() => (
        <CardHouse />
      ))}
    </Grid>
  )
}

export default Houses
