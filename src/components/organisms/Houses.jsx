import React from 'react'
import { CardHouse } from '../molecules'

function Houses() {
  // Aquí debería de usarse el Grid.
  return (
    <>
      {/* Intenta crear un array vacio y mapear, ahora son 9,
      pero si son 100 para probar funcionalidades de cargar más, etc... seria inviable */}
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
    </>
  )
}

export default Houses
