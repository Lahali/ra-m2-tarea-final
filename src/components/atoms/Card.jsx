import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

function Card({ children }) {
  const CardStyled = styled.div`
    width: 160px;
    height: 175px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px ${colors.shade};
    margin: 5px;
    margin-top: 0;
  `

  return (
    <CardStyled columns="50% 50%" rows="100px 20px 55px" gap="0px">
      {children}
    </CardStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
