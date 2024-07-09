import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import Team from '@components/Team'

const CaveTop = styled.div`
  background: url('assets/background/footer/background.png') #150C27;
  background-size: 100%;
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
    color: #5C1B59;
    :hover {
      cursor: pointer;
      color: #4A3488;
    }
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/footer/background.svg') #150C27;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 412/506;
  }

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

const glow = keyframes`
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.25);
  }
  100% {
    filter: brightness(1);
  }
`

const Mushroom = styled.div`
  background: url('assets/background/footer/mushroom.png') no-repeat center;
  width: 100vw;
  z-index: 1;  // below the Plant
  position: absolute;
  transform: translateX(-45vw);
  aspect-ratio: 1 / 1.5;
  animation: ${glow} 3s infinite;
  ${(p) => p.theme.mediaQueries.mobile} {
    display:none;
  }
`

const Plant = styled.div`
  background: url('assets/background/footer/plants.png') no-repeat center;
  width: 100vw;
  z-index: 2;  // below the Plant
  transform: translateX(-43vw) translateY(20vw);
  position: absolute;
  aspect-ratio: 1 / 1.5;
  ${(p) => p.theme.mediaQueries.mobile} {
    display:none;
  }
`
const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 3;  // below the Plant
  a {
    color: #E2D6FF;
    width: 50px;
  }
  gap: 2rem;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    a {
      color: #E2D6FF;
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
    color: #E2D6FF;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1rem;
  color: #E2D6FF;
  position: absolute;
  z-index: 999;
  bottom: 22.5vw;

  ${(p) => p.theme.mediaQueries.mobile} {
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
  bottom: 3vw;
  text-align: center;
  width: 100%;
`

export default function Footer () {
  return (
    <>
      <CaveTop>
        <Mushroom></Mushroom>
        <Plant></Plant>
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
            <div>Copyright &copy; HackCamp 2024</div>
          </SmallText>
        </TextContainer>
        <TeamContainer>
          <Team />
        </TeamContainer>
      </CaveTop>
    </>
  )
}
