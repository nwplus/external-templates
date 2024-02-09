import styled from "styled-components";
import Slide from "./Slide";

const Title = styled.h3`
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 2rem;
  // font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`;

const Description = styled.p`
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  height: 75.5vh;

  color: #08363C;
  font-family: "HK Grotesk Medium";
  font-size: 0.93rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.1px;
`;

const AboutSlide = () => (
    <Slide alignItems="left">
      <Title>What is cmd-f?</Title>
      <Description style={{ whiteSpace: 'pre-line' }}>cmd-f is a <span style={{fontFamily: "HK Grotesk", fontWeight: "700"}}>24-hour hackathon</span> focused on addressing gender inequality in technology. Our main purpose is to create a safe and dedicated space for historically excluded genders to hack together. We’re trying to create access for people who have faced systemic barriers to inclusion on the basis of gender. We encourage participation from women, trans, non-binary, Two-Spirit and gender diverse people. <span style={{fontFamily: "HK Grotesk", fontWeight: "700"}}>Thus, cmd-f is only open to individuals who identify as a member of an underrepresented gender in technology.</span><br/><br/>We’re aware that gender is not the only inequality in technology. We appreciate allyship and recognize it is important in the community. <span style={{ fontFamily: "HK Grotesk", fontWeight: "700"}}>We invite allies to show their support by not hacking and instead contributing in other forms, such as volunteering or mentoring.</span> Please make sure your participation in this event is aligned with the intentions of the event. We also ask all participants who attend to trust that everyone attending is meant to be here.<br/><br/><span style={{fontFamily: "HK Grotesk", fontWeight: "700"}}>For more information on who is an underrepresented gender in technology, please email us at <a href="mailto:cmd-f@nwplus.io" style={{textDecoration: "underline", color: "#08363C"}}>cmd-f@nwplus.io</a>.</span></Description>
    </Slide>
  )

export default AboutSlide;