import React from 'react'
import styled from 'styled-components'
// import { useParallax } from 'react-scroll-parallax'
// import Countdown from '../components/Countdown'
// import Button from '../components/Button'
// import { Header1, Header4 } from '../components/Typography'

import Sparkles from '@components/Sparkles'

import CmdFLogoImage from '../../public/assets/logos/cmd-f-logo.svg'
import SealTailImage from '../../public/assets/misc/seal_tail.svg'
import TechTogetherLogoImage from '../../public/assets/logos/tech_together_logo.png'

const LogosContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  top: 20.78vh;
  left: 45.78vh;
  height: 13.63vh;
`

const MainLogo = styled.img`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 16.37vh;
`

const PoweredByContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 1.5vh;
  margin-top: 3vh;
  margin-bottom: 1vh;
  height: 11.63vh;
`

const PoweredByLabel = styled.p`
  position: relative;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  color: #282828;
  font-size: 2vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
`

const PlatinumSponsorLogo = styled.img`
  position: relative;
  margin-top: 0.3vh;
  height: 4.7vh;
  object-fit: contain;
`

const MainTitle = styled.h1`
  position: absolute;
  top: 36.08vh;
  left: 45.29vh;
  width: 96.1vh;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 4.1vh;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.38px;
`

const InfoTitle = styled.p`
  position: absolute;
  left: 45.29vh;
  top: 47.5vh;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 3.1vh;
  font-style: normal;
  font-weight: 600;
  line-height: 3.1vh;
  letter-spacing: -0.26px;
`

const ApplyLabel = styled.p`
  position: absolute;
  left: 45.29vh;
  top: 54.51vh;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 3.1vh;
  font-style: normal;
  font-weight: 700;
  line-height: 3.1vh;
  letter-spacing: -0.26px;
`

const ApplyButtonsContainer = styled.div`
  position: absolute;
  left: 45.29vh;
  top: 60.39vh;

  display: inline-flex;
  align-items: flex-end;
  gap: 1.67vh;
`

const HackerButton = styled.a`
  display: inline-flex;
  padding: 1.76vh 2.75vh;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #CC5A5A 15.65%, #DB7859 94.27%);
  z-index: 900;
  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease, z-index 0s ease 0.3s;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 2px;
  //   left: 2px;
  //   right: -4px;
  //   bottom: -4px;
  //   // background: linear-gradient(90deg, #CC5A5A 35.65%, #DB7859 54.27%);
  //   filter: blur(4px);
  //   border-radius: 1.15vh;
  //   z-index: -1;
  //   transition: all 0.3s ease;
  // }

  &:hover {
    transform: scale(1.05);
    // z-index: 901;

    // &:before {
    //   top: 3px;
    //   left: 3px;
    //   right: -6px;
    //   bottom: -6px;
    //   filter: blur(5px);
    // }
  }
`;


const MentorButton = styled.a`
  display: flex;
  padding: 1.76vh 2.89vh;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #E48D4D 16.91%, #E9B145 100%);
  z-index: 900;

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;

  transition: transform 0.3s ease, z-index 0s ease 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const VolunteerButton = styled.a`
  display: flex;
  padding: 1.76vh 2.06vh;
  justify-content: center;
  align-items: center;
  gap: 0.49vh;
  border: none;
  border-radius: 1.15vh;
  background: linear-gradient(90deg, #49AAB3 9.37%, #67C2B7 100%);
  z-index: 900;

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.35vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.55vh;
  letter-spacing: -0.45px;
  text-decoration: none;

  transition: transform 0.3s ease, z-index 0s ease 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const SealTail = styled.img`
  position: absolute;
  left: 114.49vh;
  top: 76.66vh;
  width: 3.72vh;
  height: 3.43vh;

  &:hover {
    animation: jiggleAnimation 0.5s ease-in-out forwards 3; 
  }
`

const Hero = () => (<div id="hero">
    <LogosContainer>
      <MainLogo src={CmdFLogoImage}/>
      <PoweredByContainer>
        <PoweredByLabel>powered by</PoweredByLabel>
        <PlatinumSponsorLogo src={TechTogetherLogoImage} />
      </PoweredByContainer>
    </LogosContainer>
    <MainTitle>Western Canada&apos;s largest hackathon <span style={{ color: '#B23C3C' }}>celebrating underrepresented genders in tech</span></MainTitle>
    <InfoTitle>March 9-10, 2024 | In-person @ UBC Life Sciences Institute</InfoTitle>
    <ApplyLabel>Apply to be a:</ApplyLabel>
    <ApplyButtonsContainer>
      <HackerButton href="https://portal.nwplus.io" target="_blank">Hacker</HackerButton>
      <MentorButton href="https://forms.gle/LiZjuFU8G8deVXzf9" target="_blank">Mentor</MentorButton>
      <VolunteerButton href="https://forms.gle/X4dFhZ9wuYGzHpZK8" target="_blank">Volunteer</VolunteerButton>
    </ApplyButtonsContainer>
    <SealTail src={SealTailImage}/>
    <Sparkles />
  </div>)

export default Hero
