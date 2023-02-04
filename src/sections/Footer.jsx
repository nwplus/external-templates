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
  min-height: calc(calc(1556 / 1440) * 100vw);
  margin-top: -0.5rem;

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
    color: #e2d6ff;
    text-shadow: 0 0 10px #59b0ef;
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
  padding-top: 30%;
  gap: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    padding-top: 65%;
  }
`

const SmallText = styled.div`
  user-select: none;
  padding-top: 2.5rem;
  text-align: center;

  div {
    color: #e2d6ff;
    text-shadow: 0 0 10px #59b0ef;
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
  bottom: 12%;
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
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    padding: 0 6vw;
  }
`

const Footer = () => (
  <div style={{ position: 'absolute', bottom: 50, zIndex: 100 }}>
    <Team />
  </div>
)

export default Footer
