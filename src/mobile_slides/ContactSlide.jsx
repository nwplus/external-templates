import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Slide from "./Slide";

const Title = styled.p`
  margin-top: 4rem;
  margin-left: 4rem;
  margin-right: 4rem;

  color: #FFF;
  text-align: center;
  font-family: "Yatra One";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 186.667% */
  letter-spacing: 0.4px;
`

const SocialMediaIcons = styled.div`
  margin-top: 3rem;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  a {
    width: 2rem;
    text-decoration: none;
    color: white;
    &:hover {
      color: #9DA9C8;
    }
  }

  gap: 1rem;
`

const Links = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;

  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 2.35vh;
  
  a {
    font-weight: 600;
    color: white;
    &:hover {
      color: #9DA9C8;
    }
  }
`

const ContactSlide = () => (
    <Slide alignItems="center">
      <Title>Contact Us</Title>
      <Links>
        <a href="mailto:info@nwplus.io" target="_blank" rel="noreferrer">
          Email Us
        </a>
        <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel="noreferrer">
          Become a Sponsor
        </a>
        <a href="https://mlh.io/code-of-conduct" target="_blank" rel="noreferrer">
          Code of Conduct
        </a>
      </Links>
      <SocialMediaIcons>
        <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/company/nwplus" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.youtube.com/c/nwPlusUBC" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://medium.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </SocialMediaIcons>
    </Slide>
  )

export default ContactSlide;