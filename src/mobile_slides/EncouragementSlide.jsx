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

  color: #08363C;
  font-family: "HK Grotesk Medium";
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.1px;
`;

const EncouragementSlide = () => {

  const ahoyText = `Ahoy hackers!
  Embark on a tech adventure at cmd-f!`;

  return (
    <Slide alignItems="left">
      <Title style={{ whiteSpace: 'pre-line' }}>{ahoyText}</Title>
      <Description>Learn new skills, build with passion and connect with a community dedicated to making a difference. No matter your background or technical expertise, we provide the resources and support to ensure your journey is a success.</Description>
    </Slide>
  )
}

export default EncouragementSlide;