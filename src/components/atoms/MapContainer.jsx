import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid } from '../../styles'

const StyledMapContainer = styled(Grid)`
  background-color: ${({ background }) => background || 'lightgrey'};
  grid-column: ${({ gridColumn }) => gridColumn || ''};
  grid-row: ${({ gridRow }) => gridRow || ''};
  height: ${({ height }) => height || '75vh'};
  width: ${({ width }) => width};
  border-radius: 10px;
  padding: ${({ padding }) => padding || '1rem'};
`
function MapContainer({ children, ...props }) {
  return <StyledMapContainer {...props}>{children}</StyledMapContainer>
}

MapContainer.propTypes = {
  children: PropTypes.node,
}

export default MapContainer
