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
  background-image: url('/assets/background/snow.svg');
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  height: 442px;
  color: #052446;
  text-align: center;
  padding-bottom: 1em;

  @media only screen and (min-width: 1439px) {
    background-size: cover;
  }
`;

const Image = styled.img`
  z-index: -1;
  width: 75%;
  max-width: 850px;

  @media only screen and (max-width: 500px) {
    transform: rotate(-20deg);
    margin-bottom: 5%;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  font-size: 32px;

  a {
    margin: 0 32px;

    @media only screen and (max-width: 768px) {
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
      <Image src="/assets/background/friends.svg" />
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
