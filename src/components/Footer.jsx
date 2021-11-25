import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Team from "@components/Team"

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 75vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 21vw;
  padding-bottom: 20px;
  a {
    transition: ${p => p.theme.transition.small};
    color: ${p => p.theme.colors.text};
    :hover {
      cursor: pointer;
      color: ${p => p.theme.colors.primary};
    }
  }
  background: url('assets/background/footer.svg');
  background-size: cover;
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  a {
    width: 32px;
  }
  gap: 20px;
`;

const Links = styled.div`
  display: flex;
  gap: 52px;
`;

const TeamContainer = styled.div`
  width: 450px;
  position: absolute;
  right: 2vw;
  bottom: 3vw;
  text-align: center;
  border: 4px solid #57EAEF;
  border-radius: 8px;
  background: #57EAEF4D;
`

export default function Footer() {
  return (
    <Container>
      <SocialMediaIcons>
        <a
          href='https://www.facebook.com/nwplusubc'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href='https://www.instagram.com/nwplusubc'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href='https://twitter.com/nwplusubc'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href='https://www.linkedin.com/company/nwplus'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href='https://www.youtube.com/c/nwPlusUBC'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href='https://medium.com/nwplusubc' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </SocialMediaIcons>
      <Links>
        <a href="mailto:info@nwplus.io" target="_blank" rel='noreferrer'>Email Us</a>
        <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor</a>
      </Links>
      <div>
        <div>Organized and held by nwPlus</div>
        <div>Copyright &copy; HackCamp 2021</div>
      </div>
      <TeamContainer>
        <Team />
      </TeamContainer>
    </Container>
  )
}