import React from 'react'
import styled, { keyframes } from 'styled-components'


import AboutBackgroundDesktop from "../../public/images/backgrounds/About.svg"
import AboutBackgroundMobile from "../../public/images/backgrounds/AboutMobile.svg"
import OpenSign from "../../public/images/animated-graphics/OpenSign.svg"

const AboutContainer = styled.div`
  position: relative;
  z-index: 1;
  // display: flex;
  // align-items: center;
  width: 100%;
  height: 1065px;
  
  // Aspect ratio & height calculation should be the aspect ratio of the background image
  // aspect-ratio: 1440 / 779;
  // min-height: calc(calc(779 / 1440) * 100vw);

  ${p => p.theme.mediaQueries.mobile} {
    align-items: center;
    
    // Aspect ratio & height calculation should be the aspect ratio of the background image
    // min-height: calc(calc(1344 / 428) * 100vw);
    // aspect-ratio: 428 / 1344;
  }
`

const AboutBgDesktop = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  // Makes background non-selectable
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const AboutBgMobile = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  // Makes background non-selectable
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  display: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const AboutTitle = styled.h2`
  font-family: 'HK Grotesk';
  font-weight: bold;
  text-align: center;
  color: #4D4B4F;
  z-index: 1;
  width: 100vw;
  display: block;
  position: relative;
  top: 20%;
  font-size: 3em;
  width: 80%;
  text-align: center;
  ${(p) => p.theme.mediaQueries.mobile} {
    width: 100%;
    top: 100px;
  }
`

const AboutDescription = styled.p`
  font-family: 'HK Grotesk';
  font-size: 1.2vw;
  color: #4D4B4F;
  z-index: 1;
  position: relative;
  width: 50%;
  left: 10%;
  margin-top: 20%;
  ${(p) => p.theme.mediaQueries.mobile} {
    width: 75%;
    margin: 0 auto;
    left: 0;
    top: 200px;
    font-size: 1em;
  }
`

const swingSign = keyframes`
 0% { transform: rotateY(0deg) rotateX(-5deg); }
 25% { transform: rotateY(15deg) rotateX(-2deg); }
 50% { transform: rotateY(0deg) rotateX(-5deg); }
 75% { transform: rotateY(20deg) rotateX(-15deg); }
 100% { transform: rotateY(0deg) rotateX(-2deg); }
`

const OpenSignImage = styled.img`
  position: absolute;
  right: 6.5%;
  top: 56vh;
  animation-name: ${swingSign};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  // transform-origin: 0px 50%;
  // transform-origin: 0% 50%;
  // transform: rotate(3deg);
  ${(p) => p.theme.mediaQueries.mobile} {
      display: none;
  }
`

const About = () => (
  <AboutContainer>

    <AboutBgDesktop src={AboutBackgroundDesktop} />
    <AboutBgMobile src={AboutBackgroundMobile} />

    <AboutTitle>About cmd-f</AboutTitle>
    <AboutDescription>Join us on March 11-12 for cmd-f 2023, an in-person hackathon celebrating underrepresented genders in tech!
      <br /><br />
      According to a UNESCO study, many underrepresented genders individuals in tech experience variations of imposter syndrome among their counterparts in the industry.
      <br /><br />
      At cmd-f, we welcome anyone who self-identifies as an underrepresented gender and hope to dedicate a safe space to:

      <ul style={{ paddingLeft: "40px" }}>
        <li>Develop new skills</li>
        <li>Explore career opportunities</li>
        <li>Build a supportive community in tech</li>
      </ul>

      <br />
      Whether you're a first-time hacker or a veteran, we have workshops, prizes, and social activities for you! No technical experience needed.
      <br /><br />
      Stay tuned on our socials for updates on what to expect at cmd-f 2023!</AboutDescription>

    <OpenSignImage src={OpenSign} />
  </AboutContainer>
)

export default About
