import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  
  // Height calculation ratio should be the aspect ratio of the background image
  min-height: calc(calc(800 / 1440) * 100vw);

  ${p => p.theme.mediaQueries.mobile} {
    // Height calculation ratio should be the aspect ratio of the background image
    min-height: calc(calc(1200 / 882) * 100vw);
  }
`

const Hero = () => (
    <HeroContainer>
      Hero
    </HeroContainer>
)

export default Hero
