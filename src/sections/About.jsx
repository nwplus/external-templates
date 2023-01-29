import React from 'react'
import styled from 'styled-components'


import AboutBackground from "../../public/images/backgrounds/About.svg"


const AboutContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  
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

const AboutBg = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  // Makes background non-selectable
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

const About = () => (
  <AboutContainer>
    <AboutBg src={AboutBackground} />
    About
  </AboutContainer>
)

export default About
