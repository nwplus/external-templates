import styled from "styled-components";

const Slide = styled.section`
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100svh;
  background-color: clear;
  scroll-snap-align: center;
  border: 1px solid red;
  
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems}
`

export default Slide;