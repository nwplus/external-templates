import styled from "styled-components";
import Slide from "./Slide";

const SectionTitle = styled.p`
  position: relative;
  left: 2rem;
  top: 5vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`
const ValueContainer = styled.div`
  position: relative;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 7rem;
`

const HealthSlide = () => (
    <Slide alignItems="left">
      <SectionTitle />
      <ValueContainer>
        {/* <ValueCircle>3</ValueCircle> */}
        {/* <ValueTitle></ValueTitle>
        <ValueDescription></ValueDescription> */}
      </ValueContainer>
    </Slide>
  )

export default HealthSlide;