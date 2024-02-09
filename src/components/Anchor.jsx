import styled from "styled-components"

const Anchor = styled.div`
  position: absolute;
  left: ${props => props.x}vh;
  top: 0;
  width: 100vw;
  height: 1;
`

export default Anchor