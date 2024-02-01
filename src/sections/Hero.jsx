import React from 'react'
import styled from 'styled-components'
// import { useParallax } from 'react-scroll-parallax'
// import Countdown from '../components/Countdown'
// import Button from '../components/Button'
// import { Header1, Header4 } from '../components/Typography'

import CmdFLogoImage from '../../public/assets/cmd-f-logo.svg'

const HeroContainer = styled.div`
  position: absolute;
  left: 50vh;
  top: 20vh;
`

const LargeTitleTop = styled.h1`
  font-family: 'Yatra One', sans-serif;
  font-size: 40px;
  font-weight: normal;
  line-height: 120%;
  color: #2e2e2e;
`

const LargeTitleBottom = styled.h1`
  font-family: 'Yatra One', sans-serif;
  font-size: 40px;
  font-weight: normal;
  line-height: 120%;
  color: #B23C3C;
`

const DateTitle = styled.p`
  margin-top: 12px;
  color: #2E2E2E;
  font-feature-settings: 'liga' off;

  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 100% */
  letter-spacing: -0.26px;
`

const ApplyTitle = styled.p`
  margin-top: 20px;
  color: #2E2E2E;
  font-feature-settings: 'liga' off;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  letter-spacing: -0.26px;
`

const ApplyButtonsContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  gap: 17px;
  margin-top: 20px;
`

const HackerButton = styled.button`
  display: flex;
  padding: 18px 28px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 11.7px;
  background: linear-gradient(90deg, #CC5A5A 15.65%, #DB7859 94.27%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.45px;
`

const MentorButton = styled.button`
  display: flex;
  padding: 18px 29.5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 11.7px;
  background: linear-gradient(90deg, #E48D4D 16.91%, #E9B145 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.45px;
`

const VolunteerButton = styled.button`
  display: flex;
  padding: 18px 21px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 11.7px;
  background: linear-gradient(90deg, #49AAB3 9.37%, #67C2B7 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.45px;
`


// const HeroContainer = styled.div`
//   position: relative;
//   top: 0;
  
//   // Height calculation ratio should be the aspect ratio of the background image
//   min-height: calc(calc(1598 / 1440) * 100vw);

//   ${p => p.theme.mediaQueries.mobile} {
//     // Height calculation ratio should be the aspect ratio of the background image
//     min-height: calc(calc(1597 / 428) * 100vw);
//     background-image: url("/assets/hero/mobile_hero_background.svg");
//     background-repeat: no-repeat;
//     background-size: cover;
//   }
// `

// const CloudsContainer = styled.div`
//   min-height: calc(calc(826 / 1440) * 100vw);
//   position: absolute;
//   top: 0;
//   width: 100%;
//   margin-top: -5rem; // to off-set the initial parallax position 

//   ${p => p.theme.mediaQueries.mobile} {
//     // Height calculation ratio should be the aspect ratio of the background image
//     display: none;
//   }
// `

// const HouseContainer = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   top: 0;
//   left: 0;

//   ${p => p.theme.mediaQueries.mobile} {
//     // Height calculation ratio should be the aspect ratio of the background image
//     min-height: calc(calc(1200 / 882) * 100vw);
//     display: none;
//   }
// `

// const HeroContentContainer = styled.div`
//   position: relative;
//   z-index: 10;
//   padding-left: 40px;
//   width: 80vw;
//   min-width: 900px;
//   max-width: 1400px;  
//   margin: 0 auto;
//   padding-top: 10rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   align-items: flex-start;
  
//   ${p => p.theme.mediaQueries.mobile} {
//     max-width: 100vw;
//     min-width: 0;
//     width: 100%;
//     padding: 7rem 2rem;
//     text-align: center;
//     align-items: center;
//     transform: scale(0.95);
//   }
// `

// const LogoContainer = styled.div`
//   width: 120px;
//   height: 100px;
//   position: relative;
//   margin-bottom: 1.5rem;

//   ${p => p.theme.mediaQueries.mobile} {
//     margin-bottom: 0.5rem;
//   }
// `

// const CTA = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 1.5rem 0;

//   ${p => p.theme.mediaQueries.mobile} {
//     flex-direction: column;
//     transform: scale(0.95);
//     gap: 0rem;
//     padding: 0;
//   }
// `

// const MoreCTA = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.5rem;

//   ${p => p.theme.mediaQueries.mobile} {
//     flex-direction: column;
//     transform: scale(0.95);
//     gap: 0.5rem;
//     padding: 0;
//   }
// `

// const StyledA = styled.a`
//   font-weight: 700;
//   color: #1A61A0;
//   font-size: 1.3rem;
//   text-decoration: none;
//   border-style: none none solid none;
//   border-width: 2px;
//   border-color: #1A61A0;
//   transition: all 0.13s ease;

//   :active {
//     transform: scale(0.98);
//   }
  
//   ${p => p.theme.mediaQueries.mobile} {
//     font-size: 1rem;
//   }
// `

// const CountdownContainer = styled.div`
//   position: absolute;
//   height: 100%;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   padding-bottom: 16%;
//   padding-left: 21%;
//   ${p => p.theme.mediaQueries.xl} {
//     padding-left: 20%;
//     padding-bottom: 16%;
//   }
//   ${p => p.theme.mediaQueries.desktopLarge} {
//     padding-left: 17%;
//     padding-bottom: 15%;
//   }
//   ${p => p.theme.mediaQueries.desktop} {
//     padding-left: 16%;
//     padding-bottom: 15%;
//   }
//   ${p => p.theme.mediaQueries.mobile} {
//     padding-left: 18%;
//     padding-bottom: 53%;
//   }

// `

// const StyledImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: relative;
//   user-select: none;
// `

const Logo = styled.img`
  width: 120px;
  height: 100px;
`

const Hero = () => {
  return (<div id="hero">
    <HeroContainer>
      <Logo src={CmdFLogoImage}/>
      <LargeTitleTop>Western Canada's largest hackathon</LargeTitleTop>
      <LargeTitleBottom>celebrating underrepresented genders in tech</LargeTitleBottom>
      <DateTitle>March 9-10, 2024 | In-person (location TBD)</DateTitle>
      <ApplyTitle>Apply to be a:</ApplyTitle>
      <ApplyButtonsContainer>
        <HackerButton>Hacker</HackerButton>
        <MentorButton>Mentor</MentorButton>
        <VolunteerButton>Volunteer</VolunteerButton>
      </ApplyButtonsContainer>
    </HeroContainer>
  </div>)
}

export default Hero
