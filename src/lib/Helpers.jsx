import styled from 'styled-components'

// Add spacing between components
export const Spacers = styled.div`
  width: ${props => props.width ?? '0px'};
  height: ${props => props.height ?? '0px'};
`
