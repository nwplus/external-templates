import React from 'react'
import styled from 'styled-components'
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

const FooterContainer = styled.div`
  position: relative;
  background: url('/assets/footer/desktop_background.svg'), linear-gradient(to bottom, #645F70, #545364);
  min-height: calc(calc(2037 / 1436) * 100vw);
  background-repeat: no-repeat;
  background-size: cover;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(974 / 428) * 100vw);
  }
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

  ${p => p.theme.mediaQueries.mobile} {
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
    color: white;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.1rem;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;
    a {
      white-space: nowrap;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1rem;
`

const SmallText = styled.div`
  user-select: none;
  padding-top: 2.5rem;
  text-align: center;
  div {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
  }
  ${p => p.theme.mediaQueries.mobile} {
    div {
      font-size: 1rem;
    }
  }
`

const TeamContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 1rem;
  text-align: center;
  width: 100%;

  ${p => p.theme.mediaQueries.tabletLarge} {
    width: 40vw;
  }
  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    bottom: 1rem;
  }
`

const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 6rem;
  @media (max-width: 900px) {
    top: 46%;
  }
`

const SocialMediaContainer = () => (
  <StaticContainer>
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
        <a href="https://mlh.io/code-of-conduct" target="_blank" rel="noreferrer">
          Code of Conduct
        </a>
      </Links>
      <SmallText>
        <div>Organized and held by nwPlus</div>
        <div>Copyright &copy; cmd-f 2023</div>
      </SmallText>
    </TextContainer>
  </StaticContainer>
)

const Footer = () => (
  <FooterContainer>
    <SocialMediaContainer />
    <TeamContainer>
      <Team />
    </TeamContainer>
  </FooterContainer>
)

export default Footer