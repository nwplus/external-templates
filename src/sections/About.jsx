import React from 'react'
import styled, { keyframes } from 'styled-components'

import AboutBackgroundDesktop from '../../public/images/backgrounds/About.svg'
import AboutBackgroundMobile from '../../public/images/backgrounds/AboutMobile.svg'
import OpenSign from '../../public/images/animated-graphics/OpenSign.svg'

import MapImage from '../../public/assets/map.svg'

const Map = styled.img`
  position: absolute;
  left: 227.86vh;
  top: 3.67vh;
  height: 94.35vh;
  width: 210vh;
`

const Title = styled.p`
  position: absolute;
  left: 237.96vh;
  top: 16.62vh;
  width: 57.52vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.71vh;
  font-style: normal;
  font-weight: 400;
  line-height: 5.71vh;
  letter-spacing: 0.4px;
`

const Description = styled.p`
  position: absolute;
  left: 237.96vh;
  top: 24.37vh;
  width: 60.48vh;

  color: #08363C;
  font-family: "HK Grotesk";
  font-size: 2.04vh;
  font-style: normal;
  font-weight: 500;
  line-height: 2.24vh;
  letter-spacing: -0.1px;
`

const DaysLabel = styled.p`
  position: absolute;
  left: 323.28vh;
  top: 31.51vh;
  width: 16.5vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 6.12vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 60px */
`

const HoursLabel = styled.p`
  position: absolute;
  left: 335.78vh;
  top: 63.44vh;
  width: 22.1vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 6.12vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const MinutesLabel = styled.p`
  position: absolute;
  left: 384.74vh;
  top: 36.51vh;
  width: 11.5vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 6.12vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const ApplicationsCloseInLabel = styled.p`
  position: absolute;
  left: 362.14vh;
  top: 16.62vh;
  width: 29.07vh;

  color: #523A21;
  font-family: "Yatra One";
  font-size: 4.823vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const ApplicationsCloseFullLabel = styled.p`
  position: absolute;
  left: 320.09vh;
  top: 87.21vh;

  width: 160vh
  text-align: center;

  color: #594632;
  font-family: "Yatra One";
  font-size: 2.55vh;
  font-style: normal;
  font-weight: 400;
  line-height: 2.24vh;
  letter-spacing: -0.1px;
`


const About = () => {

  const descriptionText = `cmd-f is a 24-hour hackathon focused on addressing gender inequality in technology. Our main purpose is to create a safe and dedicated space for historically excluded genders to hack together. We’re trying to create access for people who have faced systemic barriers to inclusion on the basis of gender. We encourage participation from women, and any trans, non-binary, Two-Spirit and gender diverse people. Thus, cmd-f is only open to individuals who identify as a member of an underrepresented gender in technology.

  We’re aware that gender is not the only inequality in technology. We appreciate allyship and recognize it is important in the community. We invite allies to show their support by not hacking and instead contributing in other forms, such as volunteering or mentoring. Please make sure your participation in this event is aligned with the intentions of the event. We also ask all participants who attend to trust that everyone attending is meant to be here.
  
  For more information on who is an underrepresented gender in technology, please email us at cmd-f@nwplus.io.`

  return (<>
    <Map src={MapImage}/>
    <Title>What is cmd-f?</Title>
    <Description style={{ whiteSpace: 'pre-line' }}>{descriptionText}</Description>
    <DaysLabel>30 DAYS</DaysLabel>
    <HoursLabel>10 HOURS</HoursLabel>
    <MinutesLabel>20 MIN</MinutesLabel>
    <ApplicationsCloseInLabel>Applications close in:</ApplicationsCloseInLabel>
    <ApplicationsCloseFullLabel>Applications close Sunday, February 25 @ 11:59PM PST</ApplicationsCloseFullLabel>
    </>)
}

export default About
