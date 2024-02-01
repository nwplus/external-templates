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
