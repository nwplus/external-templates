import React from 'react'
import styled, { keyframes } from 'styled-components'

import AboutBackgroundDesktop from '../../public/images/backgrounds/About.svg'
import AboutBackgroundMobile from '../../public/images/backgrounds/AboutMobile.svg'
import OpenSign from '../../public/images/animated-graphics/OpenSign.svg'

const AboutDescription = styled.div`
  position: absolute;
  left: 240vh;
  top: 20vh;
  text-align: center;
`

const AboutTitle = styled.h3`
  text-align: left;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 100% */
  letter-spacing: 0.4px;
`

const AboutText = styled.p`
  margin-top: 20px;

  width: 600px;
  text-align: left;

  color: #08363C;
  font-family: "HK Grotesk";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  letter-spacing: -0.1px;
`

const DaysLabel = styled.p`
  position: absolute;
  left: 82vh;
  top: 13vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 60px */
`

const HoursLabel = styled.p`
  position: absolute;
  left: 93vh;
  top: 43vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 60px */
`

const MinutesLabel = styled.p`
  position: absolute;
  left: 140vh;
  top: 18vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 60px */
`

const ApplicationsCloseInLabel = styled.p`
  position: absolute;
  left: 115vh;
  top: 0vh;

  color: #523A21;
  font-family: "Yatra One";
  font-size: 47.288px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 47.288px */
`

const ApplicationsCloseFullLabel = styled.p`
  position: absolute;
  left: 76vh;
  top: 65vh;

  width: 900px;
  text-align: center;

  color: #594632;
  font-family: "Yatra One";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 88% */
  letter-spacing: -0.1px;
`


const aboutText = 'cmd-f is a 24-hour hackathon focused on addressing gender inequality in technology. Our main purpose is to create a safe and dedicated space for historically excluded genders to hack together. We’re trying to create access for people who have faced systemic barriers to inclusion on the basis of gender. We encourage participation from women, and any trans, non-binary, Two-Spirit and gender diverse people. Thus, cmd-f is only open to individuals who identify as a member of an underrepresented gender in technology.\n\nWe’re aware that gender is not the only inequality in technology. We appreciate allyship and recognize it is important in the community. We invite allies to show their support by not hacking and instead contributing in other forms, such as volunteering or mentoring. Please make sure your participation in this event is aligned with the intentions of the event. We also ask all participants who attend to trust that everyone attending is meant to be here.\n\nFor more information on who is an underrepresented gender in technology, please email us at cmd-f@nwplus.io.'

const About = () => (
 <>
  <AboutDescription>
    <AboutTitle>What is cmd-f?</AboutTitle>
    <AboutText style={{ whiteSpace: 'pre-line' }}>{aboutText}</AboutText>
    <DaysLabel>30 DAYS</DaysLabel>
    <HoursLabel>10 HOURS</HoursLabel>
    <MinutesLabel>20 MIN</MinutesLabel>
    <ApplicationsCloseInLabel>Applications close in</ApplicationsCloseInLabel>
    <ApplicationsCloseFullLabel>Applications close Sunday, February 25 @ 11:59PM PST</ApplicationsCloseFullLabel>
  </AboutDescription>
  
</>
)

export default About
