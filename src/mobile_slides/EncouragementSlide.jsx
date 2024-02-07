import styled from "styled-components";
import Slide from "./Slide";

const Title = styled.p`
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.5px; /* 95% */
  letter-spacing: 0.4px;
`

const Description = styled.p`
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;

  color: #08363C;
  font-family: "HK Grotesk";
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 129.412% */
  letter-spacing: -0.15px;
`

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