import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, colors } from '../../styles'

const CardStyled = styled(Grid)`
  border-radius: 5px;
  box-shadow: 5px 5px 5px ${colors.shade};
  margin-top: 0;
`
function Card({ children }) {
  return (
    <CardStyled columns="1fr" rows="100px 20px 55px" gap="0px">
      {children}
    </CardStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
