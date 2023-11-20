import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'

const AboutContainer = styled.div`
  min-height: calc(calc(779 / 1440) * 100vw);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440 / 779;
  margin-top: 10rem;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: -18rem;
    min-height: calc(calc(1344 / 428) * 100vw);
    aspect-ratio: 428 / 1344;
    align-items: center;
  }
`

const AboutInner = styled.div`
  width: 72vw;
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 5rem;

  ${p => p.theme.mediaQueries.mobile} {
    padding-top: 10rem;
    padding-bottom: 0;
    gap: 2rem;
  }
`

const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  ${p =>
    p && p.bias && p.bias === 'left'
      ? `
    margin-right: auto;
  `
      : `
    margin-left: auto;
  `}

  ${p => p.theme.mediaQueries.mobile} {
    max-width: 100vw;
    margin: 0;
    padding: 0 6vw;
  }
`

const BlurbHeader = styled(Header2)`
  color: #F3F5F4;
  line-height: 2.8rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
    line-height: 2rem;

  }
`

const BlurbText = styled(Body)`
  padding-top: 1rem;
  font-weight: normal;
  font-size: 1rem;
  line-height: 150%;
  color: #F3F5F4;
`

const About = () => {

  return (
    <AboutContainer>
      <AboutInner>
        <BlurbContainer bias="right">
          <BlurbHeader>Game on: Level up your tech journey at nwHacks!</BlurbHeader>
          <BlurbText>
            Whether you’re a seasoned hacker or you’re just getting into tech, you’re welcome at nwHacks. Join us in-person on January 20-21, 2024 for a weekend of creativity, community, and innovation! All you need is an open mind and an insatiable desire to learn, and we’ll take care of the rest. Create a project, learn new skills, and bond with friends, old and new — all in 24 hours.
          </BlurbText>
        </BlurbContainer>
      </AboutInner>
    </AboutContainer>
  )
}

export default About
