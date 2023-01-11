/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, Label } from '../atoms'

function SelectGroup({ id }) {
  // Puse aquí estos arrays porque ESLint tiene prohibidos los array como props
  // No sé si es mejor que estén aquí, desabilitar esa regla y ponerlos en el SubHeader
  // o hacer un componente propertyType.js y otro city.js
  const propertyType = [
    { property: 'Piso, chalet o garaje...' },
    { property: 'Piso' },
    { property: 'Chalet' },
    { property: 'Garaje' },
  ]

  const cities = [
    {
      city: 'Madrid, Barcelona o Zaragoza...',
    },
    { city: 'Madrid' },
    { city: 'Barcelona' },
    { city: 'Zaragoza' },
  ]

  const [selectedCity, setSelectedCity] = useState('')
  const [selectedProperty, setSelectedProperty] = useState('')

  return (
    <>
      {/* Falta htmlFor */}
      <Label htmlFor={id} />
      {/* Falta onChange, spread, ... etc */}
      {/* Crea dos selects, esto es un error tener un condicional en este nivel */}
      {/* Generalizar significa tener algo así como <Select options={options} />,
      de esa manera pasas las options y el componente se encarga de mapear, etc... */}
      <Select
        id={id}
        onChange={(e) => setSelectedProperty(e.target.value)}
        options={propertyType}
      />
      <Select
        id={id}
        onChange={(e) => setSelectedCity(e.target.value)}
        options={cities}
      />

      {/* // {id === 'propertyType'
        //   ? propertyType.map((item) => (
        //       // generateKey fuera, cada opción debería de tener ya en el array un ID único
        //       <option value={item.property} key={generateKey()}>
        //         {item.property}
        //       </option>
        //     ))
        //   : cities.map((item) => (
        //       <option value={item.city} key={generateKey()}>
        //         {item.city}
        //       </option>
        //     ))} */}
    </>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string,
}
export default SelectGroup
