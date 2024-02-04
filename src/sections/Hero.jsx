import React from 'react'
import styled from 'styled-components'
// import { useParallax } from 'react-scroll-parallax'
// import Countdown from '../components/Countdown'
// import Button from '../components/Button'
// import { Header1, Header4 } from '../components/Typography'

import CmdFLogoImage from '../../public/assets/cmd-f-logo.svg'

const Logo = styled.img`
  position: absolute;
  top: 21.6vh;
  left: 47.6vh;
  width: 17.03vh;
  height: 14.17vh;
`

const MainTitle = styled.h1`
  position: absolute;
  top: 37.5vh;
  left: 47.12vh;
  width: 100.06vh;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "Yatra One";
  font-size: 4.28vh;
  font-style: normal;
  font-weight: 400;
  line-height: 5.14vh; /* 50.4px */
  letter-spacing: 0.38px;
`

const InfoTitle = styled.p`
  position: absolute;
  top: 49.36vh;
  left: 47.12vh;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;

  font-family: "HK Grotesk";
  font-size: 3.26vh;
  font-style: normal;
  font-weight: 600;
  line-height: 3.26vh;
  letter-spacing: -0.26px;
`

const ApplyLabel = styled.p`
  position: absolute;
  top: 56.71vh;
  left: 47.12vh;

  color: #2E2E2E;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 3.26vh;
  font-style: normal;
  font-weight: 700;
  line-height: 3.26vh;
  letter-spacing: -0.26px;
`

const ApplyButtonsContainer = styled.div`
  position: absolute;
  top: 62.8vh;
  left: 47.12vh;

  display: inline-flex;
  align-items: flex-end;
  gap: 1.73vh;
`

const HackerButton = styled.button`
  display: flex;
  padding: 1.83vh 2.85vh;
  justify-content: center;
  align-items: center;
  gap: 0.51vh;
  border: none;
  border-radius: 1.19vh;
  background: linear-gradient(90deg, #CC5A5A 15.65%, #DB7859 94.27%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.44vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.65vh;
  letter-spacing: -0.45px;
`

const MentorButton = styled.button`
  display: flex;
  padding: 1.83vh 3vh;
  justify-content: center;
  align-items: center;
  gap: 0.51vh;
  border: none;
  border-radius: 1.19vh;
  background: linear-gradient(90deg, #E48D4D 16.91%, #E9B145 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.44vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.65vh;
  letter-spacing: -0.45px;
`

const VolunteerButton = styled.button`
  display: flex;
  padding: 1.83vh 2.14vh;
  justify-content: center;
  align-items: center;
  gap: 0.51vh;
  border: none;
  border-radius: 1.19vh;
  background: linear-gradient(90deg, #49AAB3 9.37%, #67C2B7 100%);

  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: "HK Grotesk";
  font-size: 2.44vh;
  font-style: normal;
  font-weight: 700;
  line-height: 2.65vh;
  letter-spacing: -0.45px;
`

const Hero = () => {
  return <div id="hero">
    <Logo src={CmdFLogoImage}/>
    <MainTitle>Western Canada's largest hackathon <span style={{ color: '#B23C3C' }}>celebrating underrepresented genders in tech</span></MainTitle>
    <InfoTitle>March 9-10, 2024 | In-person (location TBD)</InfoTitle>
    <ApplyLabel>Apply to be a:</ApplyLabel>
    <ApplyButtonsContainer>
      <HackerButton>Hacker</HackerButton>
      <MentorButton>Mentor</MentorButton>
      <VolunteerButton>Volunteer</VolunteerButton>
    </ApplyButtonsContainer>
  </div>
}

export default Hero
