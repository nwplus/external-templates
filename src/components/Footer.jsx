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

const CaveTop = styled.div`
  background: url('assets/background/footer/foreground.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center top;
  
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 0;
  left: 0;
  z-index: 997;
  
  width: 100%;
  aspect-ratio: 1440/665;
  height: 120vh;
  
  a {
    transition: ${p => p.theme.transition.small};
    color: #5C1B59;
    :hover {
      cursor: pointer;
      color: ${p => p.theme.colors.primary};
    }
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/footer/foreground.svg');
    background-repeat: no-repeat;
    aspect-ratio: 428/377;
  }

`

const CaveBottom = styled.div`
  background: url('assets/background/footer/background.svg'), linear-gradient(to bottom, #220639, #AC306C);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow-y: hidden;

  position: fixed;
  z-index: -1;
  left: 0;
  bottom: 0;

  width: 100%;
  aspect-ratio: 1440/1390;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/footer/background.svg');
    background-repeat: no-repeat;
    aspect-ratio: 428/1237;
  }
  
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  a {
    width: 50px;
  }
  gap: 2rem;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    a {
      width: 25px;
    }
    gap: 1rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding-top: 15rem;
  gap: 1rem;
  color: #2C2543;
  position: absolute;
  z-index: 999;
  bottom: 50vh;
`

const SmallText = styled.div`
  div {
    font-size: 0.85rem;
    font-weight: 400;
  }
`

const TeamContainer = styled.div`
  
  ${(p) => p.theme.mediaQueries.tabletLarge} {
    width: 40vw;
  }
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }

  position: absolute;
  left: 0;
  bottom: 3vw;
  text-align: center;
  width: 100%;
`

export default function Footer() {

  return (
    <>
      <CaveTop>
        <TextContainer>
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
          <SmallText>
            <div>Organized and held by nwPlus</div>
            <div>Copyright &copy; HackCamp 2022</div>
          </SmallText>
        </TextContainer>
        <TeamContainer>
          <Team />
        </TeamContainer>
      </CaveTop>
      <CaveBottom />
    </>
  )
}