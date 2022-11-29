import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  min-height: calc(calc(779 / 1440) * 100vw);
  position: relative;
  z-index: 1;
`

const About = () => {

  const hello = 'hello'

  return (
    <AboutContainer>
      {hello}
    </AboutContainer>
  )
}

export default About