import styled from 'styled-components'

// Add spacing between components
export const Spacers = styled.div`
  width: ${p => p.width ?? '0px'};
  height: ${p => p.height ?? '0px'};
`
