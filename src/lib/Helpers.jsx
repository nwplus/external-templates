import styled from 'styled-components'

// Add spacing between components
const Spacers = styled.div`
  width: ${p => p.width ?? '0px'};
  height: ${p => p.height ?? '0px'};
`

export default Spacers
