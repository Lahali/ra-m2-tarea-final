/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react'
import PropTypes from 'prop-types'
import { Select, Label } from '../atoms'

function SelectGroup({ id, propertyType, city }) {
  return (
    <>
      <Label id={id} />
      <Select id={id}>
        {propertyType
          ? propertyType.map((item, index) => (
              <option value={item.property} key={item[index]}>
                {item.property}
              </option>
            ))
          : city.map((item, index) => (
              <option value={item.city} key={item[index]}>
                {item.city}
              </option>
            ))}
      </Select>
    </>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string,
  propertyType: PropTypes.string,
  city: PropTypes.string,
}
export default SelectGroup
