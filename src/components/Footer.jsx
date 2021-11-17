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

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  a {
    color: ${p => p.theme.colors.text};
    :hover {
      cursor: pointer;
      color: ${p => p.theme.colors.primary};
    }
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  font-size: 32px;
  a {
    margin: 0 32px;
    ${p => p.theme.mediaQueries.mobile} {
      margin: 0 10px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 52px;
`;


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
    </Container>
  )
}