import styled from 'styled-components'
import Grid from './Grid'

const GridItem = styled(Grid)`
  background-color: ${({ background }) => background || 'lightgrey'};
  grid-column: ${({ gridColumn }) => gridColumn || ''};
  grid-row: ${({ gridRow }) => gridRow || ''};
  height: ${({ height }) => height || '100vh'};
  border-radius: 10px;
  padding: ${({ padding }) => padding || '1rem'};
`

export default GridItem
