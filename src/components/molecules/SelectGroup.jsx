/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react'
import PropTypes from 'prop-types'
import { Select, Label } from '../atoms'

function SelectGroup({ id }) {
  const generateKey = () => Math.random().toString(36)

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

  return (
    <>
      <Label id={id} />
      <Select id={id}>
        {id === 'propertyType'
          ? propertyType.map((item) => (
              <option value={item.property} key={generateKey()}>
                {item.property}
              </option>
            ))
          : cities.map((item) => (
              <option value={item.city} key={generateKey()}>
                {item.city}
              </option>
            ))}
      </Select>
    </>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string,
}
export default SelectGroup
