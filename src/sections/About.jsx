import React from 'react'
import styled from 'styled-components'

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
const About = () => (
  <AboutContainer>
    About
  </AboutContainer>
)

export default About
