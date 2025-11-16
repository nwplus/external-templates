import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// import HeroBackground from './HeroBackground'
// import RegistrationCountdown from './RegistrationCountdown'
// import MuseumButton from './MuseumButton'
// import HeroSponsors from './HeroSponsors'
// import NwPlusLogo from './NwPlusLogo'
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider'

gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1280/901;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  gap: 100px;

  background: linear-gradient(to bottom, #1e0831 0%, #da9e9f 50%, #f6dbc8 100%);
  opacity: 1 !important;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    aspect-ratio: 487/935;
    min-height: calc(100vw * (935 / 487));
  }
`

const HeroBackgroundMobile = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #1e0831 0%, #da9e9f 50%, #f6dbc8 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const Nugget = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw * (95 / 487));
    top: calc(100vw * (755 / 487));
  }
`

const LogoContainer = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    top: calc(100vw * (210 / 1280));
    transform: translate(-50%, -50%);
    width: calc(100vw * (60 / 487));
    aspect-ratio: 44/50;
  }
`

const MuseumHeader = styled.div`
  text-align: center;
  font-family: 'LT Museum';
  color: #3a2e21;

  position: absolute;
  left: 50%;
  top: calc(100vw * (185 / 1280));
  transform: translate(-50%, -50%) perspective(1000px) rotateX(8deg);
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (190 / 487));
    transform: translate(-50%, -50%);
  }
`

const TitleSponsor = styled.p`
  font-weight: 700;
  font-size: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 487));
  }
`

// const Description = styled.p`
//   font-weight: 700;
//   font-size: calc(100vw * (16 / 1280));

//   ${p => p.theme.mediaQueries.mobile} {
//     margin-top: calc(100vw * (10 / 487));
//     font-size: calc(100vw * (20 / 487));
//     font-weight: 500;
//   }
// `

const Date = styled.p`
  font-family: 'LT Museum';
  font-weight: 500;
  margin-top: calc(100vw * (16 / 1280));
  font-size: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (4 / 487));
    font-size: calc(100vw * (20 / 487));
  }
`

const MobileRegistrationCountdownContainer = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100vw * (332 / 487));
    width: 100%;
  }
`

const LeftPillar = styled.div`
  position: absolute;
  left: calc(100vw * (202 / 1280));
  top: calc(100vw * (280 / 1280));
  transform: perspective(2000px) rotateX(8.5deg) skewX(-7.5deg);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

// const MentorButton = styled.a`
//   position: absolute;
//   left: calc(100vw * (435 / 1280));
//   top: calc(100vw * (455 / 1280));

//   cursor: pointer;
//   text-decoration: none;

//   ${p => p.theme.mediaQueries.mobile} {
//     left: calc(100vw * (56 / 487));
//     top: calc(100vw * (588 / 487));
//     transform: perspective(2000px) rotateX(0deg) skewX(-4deg);
//   }
// `

const RightPillar = styled.div`
  position: absolute;
  left: calc(100vw * (947 / 1280));
  top: calc(100vw * (280 / 1280));
  transform: perspective(2000px) rotateX(-8.5deg) skewX(8.5deg);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RightPillarInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw * (134 / 1280));
  height: calc(100vw * (240 / 1280));
`

const SponsorButton = styled.a`
  cursor: pointer;
  text-decoration: none;
`

const MobileSponsorButton = styled(SponsorButton)`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100vw * (891 / 487));
  }
`

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
`

const HeroIsland = styled.img``

const Logo = styled.img`
  width: 75px;
`

const Subheader = styled.p`
  color: white;
  font-size: 20px;
`

const Title = styled.img``

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0px;
`

const Description = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const SponsorText = styled.a`
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  color: #421123;
`

const HackerButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 9px;
  background: linear-gradient(to bottom, #fed3c1 0%, #e7a39d 100%) padding-box,
    linear-gradient(90deg, #ffffff 0%, #d0b5c2 100%) border-box;
  border: 1px solid transparent;
  color: #6b1b39;
`

const MentorButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 9px;
  background: linear-gradient(to bottom, #80344f 0%, #622a4d 100%) padding-box,
    linear-gradient(90deg, #f8c3e5 0%, #e69fdb 100%) border-box;
  border: 1px solid transparent;
  color: white;
`

const VolunteerButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 9px;
  background: linear-gradient(to bottom, #404721 0%, #1e2f0e 100%) padding-box,
    linear-gradient(90deg, #ffffff 0%, #9fc3be 100%) border-box;
  border: 1px solid transparent;
  color: white;
`

// const HackerButton = styled.a`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   top: calc(100vw * (430 / 1280));

//   cursor: pointer;
//   text-decoration: none;

//   ${p => p.theme.mediaQueries.mobile} {
//     top: calc(100vw * (530 / 487));
//   }
// `

const Hero = () => {
  return (
    <div id="home">
      <HeroContainer>
        <ContentSide>
          <Logo src="./assets/images/hero/nwhacks_logo.svg" />
          <Title src="./assets/images/hero/nwhacks_title.svg" />
          <Description>
            <Subheader>Western Canada's Premier Hackathon</Subheader>
            <Subheader>January 17-18 @ UBC Life Sciences Institute</Subheader>
          </Description>
          <Subheader>Apply to be a:</Subheader>
          <Buttons>
            <HackerButton>Hacker</HackerButton>
            <MentorButton>Mentor</MentorButton>
            <VolunteerButton>Volunteer</VolunteerButton>
          </Buttons>
          <SponsorText href="mailto:sponsorship@nwplus.io?subject=Sponsorship Inquiry">Become a Sponsor</SponsorText>
        </ContentSide>
        <HeroIsland src="./assets/images/hero/hero_island.svg" alt="hero island" />
      </HeroContainer>
    </div>
  )
}

export default Hero
