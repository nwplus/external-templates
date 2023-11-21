import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import { Body, Header2 } from '@components/Typography'

const AboutContainer = styled.div`
  min-height: calc(calc(779 / 1440) * 100vw);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440 / 779;

  ${p => p.theme.mediaQueries.mobile} {
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
  color: #4453b0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2rem;
  }
`

const BlurbText = styled(Body)`
  padding-top: 2rem;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 150%;
  color: #4453b0;
`

const About = () => {
  const parallax = useParallax({ speed: 7 })

  return (
    <AboutContainer>
      <AboutInner ref={parallax.ref}>
        <BlurbContainer bias="left" id="about">
          <BlurbHeader>About nwHacks</BlurbHeader>
          <BlurbText>
            Join hundreds of hackers across the world at nwHacks in January 2024! Apply by late December 2023 to
            participate as a hacker, mentor, or a volunteer.
            <br />
            <br />
            Whether you{`'`}re a seasoned hacker or you{`'`}re just getting into tech, nwHacks welcomes you; just bring
            an open mind and an insatiable desire to learn, and we{`'`}ll take care of the rest. Create a project, learn
            new skills, and bond with friends, old and new — all in 24 hours.
          </BlurbText>
        </BlurbContainer>
        <BlurbContainer bias="right">
          <BlurbHeader>Join us for an unforgettable experience!</BlurbHeader>
          <BlurbText>
            We{`'`}re thrilled to announce that we{`'`}re once again bringing you an incredible hackathon experience!
            Last year, we connected hundreds of the brightest developers, engineers, and designers coming from all over
            North America. Whether we{`'`}re reuniting or meeting you for the first time, we can{`'`}t wait to see you
            there!
          </BlurbText>
        </BlurbContainer>
      </AboutInner>
    </AboutContainer>
  )
}

export default About
