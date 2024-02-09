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

const ValueCircle = styled.div`
  background-color: #000;
  color: #fbfbfb;
  font-family: "Yatra One";
  font-size: 2.84vh;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  width: 4.48vh;
  height: 4.48vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.19vh;
  padding-right: 0.05vh;
`

const ValueTitle = styled.p`
  margin-top: 1.5vh;

  color: #08373D;
  font-feature-settings: 'liga' off;
  font-size: calc(1rem + 1.5vh);
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  letter-spacing: 0.38px;
`

const ValueDescription = styled.p`
  margin-top: 1.52vh;
  left: 0;
  right: 0;

  color: #08373D;
  font-family: "HK Grotesk Medium";
  font-size: calc(0.5rem + 1.2vh);
  font-style: normal;
  font-weight: 500;
  line-height: 122%;
  letter-spacing: -0.1px;
`

const ValueContainer = styled.div`
  position: relative;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 5rem;
`

const ConfidenceSlide = () => (
    <Slide alignItems="left">
      <SectionTitle>Our Main Values</SectionTitle>
      <ValueContainer>
        <ValueCircle>1</ValueCircle>
        <ValueTitle>Build confidence</ValueTitle>
        <ValueDescription>Develop career-ready skills, fight imposter syndrome, and build an invaluable support network with friends, mentors, and sponsors. You are welcome! Regardless of your background, you bring a unique and important perspective to tech. Set sail to discover your place in tech – a space where everyone belongs.</ValueDescription>
      </ValueContainer>
    </Slide>
  )

export default ConfidenceSlide;