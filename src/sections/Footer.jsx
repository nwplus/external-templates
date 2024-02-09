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

const Title = styled.p`
  position: absolute;
  left: 1463.13vh;
  top: 12.35vh;

  color: #FFF;
  text-align: center;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`

const MeetMindsLabel = styled.p`
  position: absolute;
  left: 1449.33vh;
  top: 69.5vh;

  color: #F6FEFF;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 4.11vh;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.38px;
`

// const FooterContainer = styled.div`
//   position: absolute;
//   left: 1300vh;
//   top: 20vh;

//   background: url('/assets/footer/desktop_background.svg'), linear-gradient(to bottom, #645F70, #545364);
//   min-height: calc(calc(2037 / 1436) * 100vw);
//   background-repeat: no-repeat;
//   background-size: cover;

//   ${p => p.theme.mediaQueries.mobile} {
//     background: url('/assets/footer/mobile_background.svg'), linear-gradient(to bottom, #645F70, #545364);
//     min-height: calc(calc(1419 / 428) * 100vw);
//   }
// `

const SocialMediaIcons = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  a {
    width: 50px;
    text-decoration: none;
    color: white;
    &:hover {
      color: #9DA9C8;
    }
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
  font-size: 2.35vh;
  justify-content: center;
  width: 100vh;
  a {
    font-weight: 600;
    color: white;
    &:hover {
      color: #9DA9C8;
    }
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
  position: absolute;
  left: 1466.17vh;
  top: 89vh;

  user-select: none;
  padding-top: 3.92vh;
  text-align: center;
  div {
    color: white;
    font-size: calc(0.5rem + 1vh);
    font-weight: 500;
  }
`

// const TeamContainer = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 1rem;
//   text-align: center;
//   width: 100%;

//   ${p => p.theme.mediaQueries.tabletLarge} {
//     width: 40vw;
//   }
//   ${p => p.theme.mediaQueries.mobile} {
//     width: 100%;
//     bottom: 1rem;
//   }
// `

const StaticContainer = styled.div`
  position: absolute;
  left: 1428vh;
  top: 21vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${p => p.theme.mediaQueries.mobile} {
    top: 3.5rem;
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
    </TextContainer>
  </StaticContainer>
)

const Footer = () => (<>
    <Title>Contact us!</Title>
    <SocialMediaContainer />
    <Team />
    <SmallText>
      <div>Organized and held by nwPlus</div>
      <div>Copyright &copy; cmd-f 2024</div>
    </SmallText>
    <MeetMindsLabel>Meet the minds behind cmd-f</MeetMindsLabel>
  </>)

export default Footer