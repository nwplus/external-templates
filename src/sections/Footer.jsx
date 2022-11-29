import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
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
import { Stamp } from './Sponsors'
import FooterBackgroundImage from '../assets/images/FooterBackground.svg'

import VictoriaStamp from '../assets/images/stamps/Victoria.svg'
import WhistlerStamp from '../assets/images/stamps/Whistler.svg'

const FooterContainer = styled.div`
  position: relative;
  min-height: calc( calc(1556 / 1440) * 100vw) !important;
`

const FooterBackground = styled.img`
  bottom: 0;
  position: absolute;
  user-select: none;
  min-height: calc( calc(1163 / 1440) * 100vw) !important;
`

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  
  a {
    width: 50px;
    text-decoration: none;
    color: white;
  }
  
  gap: 2rem;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    a {
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
    font-weight: 600;
    color: #E2D6FF;
    text-shadow: 0 0 10px #59B0EF;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding-top: 30%;
  gap: 1rem;
`

const SmallText = styled.div`
  user-select: none;
  padding-top: 2.5rem;
  text-align: center;

  div {
    color: #E2D6FF;
    text-shadow: 0 0 10px #59B0EF;
    font-size: 1.2rem;
    font-weight: 500;
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
  bottom: 12%;
  text-align: center;
  width: 100%;
`

const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
`

const Footer = () => {

  const stampPArr = [
    useParallax({ speed: 5 }),
    useParallax({ speed: 6 })
  ]

  const stamps = [
    {
      name: 'Victoria Stamp',
      imgSrc: VictoriaStamp,
      left: '-2rem'
    },
    {
      name: 'Whistler Stamp',
      imgSrc: WhistlerStamp,
      top: '20%',
      right: '-5rem'
    }
  ]

  return (
    <FooterContainer>
      <FooterBackground src={FooterBackgroundImage} alt="FAQ section background" />
      {stamps.map((item, index) => (
        <Stamp
          ref={stampPArr[index].ref}
          key={item.name}
          src={item.imgSrc}
          alt={item.name}
          top={item.top || null}
          right={item.right || null}
          bottom={item.bottom || null}
          left={item.left || null} />
      ))}
      <StaticContainer>
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
            {/* TODO: Replace with the actual code of conduct page */}
            <a href="https://www.notion.so/nwplus/PUBLIC-nwHacks-2023-Hacker-Package-24cdb56533364c719308cde2b7e39c87" target="_blank" rel='noreferrer'>Code of Conduct</a>
          </Links>
          <SmallText>
            <div>Organized and held by nwPlus</div>
            <div>Copyright &copy; nwHacks 2023</div>
          </SmallText>
        </TextContainer>
        <TeamContainer>
          <Team />
        </TeamContainer>
      </StaticContainer>
    </FooterContainer>
  )
}

export default Footer