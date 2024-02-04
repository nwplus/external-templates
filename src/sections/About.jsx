import React from 'react'
import styled, { keyframes } from 'styled-components'

import AboutBackgroundDesktop from '../../public/images/backgrounds/About.svg'
import AboutBackgroundMobile from '../../public/images/backgrounds/AboutMobile.svg'
import OpenSign from '../../public/images/animated-graphics/OpenSign.svg'

import MapImage from '../../public/assets/map.svg'

const Map = styled.img`
  position: absolute;
  left: 219.01vh;
  top: 3.52vh;
  height: 90.69vh;
  width: 202.8vh;
`

const Title = styled.p`
  position: absolute;
  left: 228.72vh;
  top: 15.98vh;
  width: 55.29vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 5.49vh;
  letter-spacing: 0.4px;
`

const Description = styled.p`
  position: absolute;
  left: 228.72vh;
  top: 23.43vh;
  width: 58.13vh;

  color: #08363C;
  font-family: "HK Grotesk";
  font-size: 1.96vh;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.1px;
`

const DaysLabel = styled.p`
  position: absolute;
  left: 310.72vh;
  top: 30.29vh;
  width: 16.17vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 5.88vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 60px */
`

const HoursLabel = styled.p`
  position: absolute;
  left: 322.74vh;
  top: 60.98vh;
  width: 21.66vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 5.88vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const MinutesLabel = styled.p`
  position: absolute;
  left: 369.80vh;
  top: 35.09vh;
  width: 11.27vh;

  color: #594632;
  text-align: center;
  font-family: "Yatra One";
  font-size: 5.88vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const ApplicationsCloseInLabel = styled.p`
  position: absolute;
  left: 348.07vh;
  top: 15.88vh;
  width: 27.94vh;

  color: #523A21;
  font-family: "Yatra One";
  font-size: 4.63vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const ApplicationsCloseFullLabel = styled.p`
  position: absolute;
  left: 307.74vh;
  top: 83.8vh;
  width: 65.68vh;
  text-align: center;

  color: #594632;
  font-family: "Yatra One";
  font-size: 2.45vh;
  font-style: normal;
  font-weight: 400;
  line-height: 88%;
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
