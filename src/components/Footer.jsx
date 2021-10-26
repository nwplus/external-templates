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

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  height: 32vw;
  color: #052446;
  text-align: center;
  margin-top: -20%;
`;

// Snow
const BgImage = styled.img`
  z-index: 2;
  width: 100%;
  height: inherit;
  position: absolute;
  object-fit: cover;
  pointer-events: none;
  user-select: none;

  ${p => p.theme.mediaQueries.desktop} {
    height: 442px;
    width: auto;
  }
`

// Mascots
const Image = styled.img`
  z-index: 1;
  position: absolute;
  width: 75%;
  max-width: 850px;
  margin-bottom: 140px;
  pointer-events: none;
  user-select: none;
`;

// Footer content
const Content = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 1rem;
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
    <Background>
      <BgImage src="/assets/background/snow.svg" />
      <Image src="/assets/background/friends.svg" />
      <Content>
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
      </Content>
    </Background>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "HackCamp 2021"
    }, // will be passed to the page component as props
  }
}
