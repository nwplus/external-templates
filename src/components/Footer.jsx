import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'

const CaveTop = styled.div`
  /* background: url('assets/background/footer/footer-background.png');
  background-size: 100%; */
  /* background-color: pink; */
  background-repeat: no-repeat;
  background-position: center top;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;
  top: 0;
  left: 0;
  z-index: 997;

  width: 100%;
  aspect-ratio: 1440/934;
  height: 100%;

  a {
    transition: ${p => p.theme.transition.small};
    color: #c4b2f0;
    :hover {
      cursor: pointer;
      color: #f9c745;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/footer/background.svg') #150c27; */
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 412/506;
  }
`

const FooterBackground = styled.div`
  background-position-y: bottom;
  background: url('assets/background/footer/footer-background.png');
  background-size: 250vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -98vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 3; /* Ensure it's beneath other content in CaveTop */
`
// const PlantsContainer = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   display: flex;
//   align-items: flex-end;
//   background-size:cover;

//   ${(p) => p.theme.mediaQueries.mobile} {
//     display: none;
//   }
// `

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 3; // below the Plant
  width: 10vw;
  font-size: 4vw;
  a {
    color: #c4b2f0;
    width: 50px;
  }
  gap: 2rem;

  ${p => p.theme.mediaQueries.mobile} {
    a {
      color: #c4b2f0;
      width: 25px;
    }
    gap: 1rem;
  }
`

const Links = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  a {
    color: #c4b2f0;
  }
`

const TextContainer = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1rem;
  color: #e2d6ff;
  position: absolute;
  z-index: 999;
  bottom: 62.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 50vw;
  }
`

const SmallText = styled.div`
  div {
    font-size: 0.85rem;
    font-weight: 400;
  }
`

const TeamContainer = styled.div`
  z-index: 4;
  position: absolute;
  left: 0;
  bottom: 2vw;
  text-align: center;
  width: 100%;
`

const GreenFireWork = styled.div`
  background: url('assets/background/footer/green-firework.png');
  background-size: 21vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -51vw;
  left: -39vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 2;
  animation: fadeInOut 3s ease-in-out infinite;

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`
const YellowFireWork = styled.div`
  background: url('assets/background/footer/yellow-firework.png');
  background-size: 27vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -80vw;
  left: -35vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 4;
  animation: fadeInOut 4.4s ease-in-out infinite;
  animation-delay: 0.2s;

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`
const RedFireWork = styled.div`
  background: url('assets/background/footer/red-firework.png');
  background-size: 28vw;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -62vw;
  left: 36vw;
  background-repeat: no-repeat;
  background-position: center top;
  z-index: 4;
  animation: fadeInOut 3.3s ease-in-out infinite;
  animation-delay: 0.3s;

  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`

export default function Footer() {
  return (
    <>
      <CaveTop>
        <TextContainer>
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
          <Links>
            <a href="mailto:info@nwplus.io" target="_blank" rel="noreferrer">
              Email Us
            </a>
            <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel="noreferrer">
              Become a Sponsor
            </a>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">
              Code of Conduct
            </a>
          </Links>
        </TextContainer>
        <GreenFireWork />
        <YellowFireWork />
        <RedFireWork />
        <FooterBackground />
        <TeamContainer>
          <Team />
        </TeamContainer>
      </CaveTop>
    </>
  )
}
