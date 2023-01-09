import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const CardStyled = styled.div`
  // Quitar width.
  // Quitar height.
  border-radius: 5px;
  box-shadow: 5px 5px 5px ${colors.shade};
  // Quitar margin.
  margin-top: 0;
  gap: ${({ gap }) => gap || '0px'};
`
function Card({ children }) {
  return (
    // Al tener columns, rows y gap, algo no funciona bien. Card debería ser más flexible.
    // Además en el componente de arriba el div styled no acepta o usa los parametros especificados
    <CardStyled columns="50% 50%" rows="100px 20px 55px" gap="0px">
      {children}
    </CardStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
