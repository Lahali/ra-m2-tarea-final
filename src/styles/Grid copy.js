import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  align-content: ${({ align }) => align || 'center'};
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  grid-template-columns: ${({ columns }) => columns || '1fr 1fr 1fr'};
  grid-template-rows: ${({ rows }) => rows || '1fr'};
  column-gap: ${({ gap }) => gap || '10px'};
  margin-top: ${({ marginTop }) => marginTop || '1rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '1rem'};
  margin-left: ${({ marginLeft }) => marginLeft || '5px'};
  margin-right: ${({ marginRight }) => marginRight || '5px'};
`

export default Grid
