import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import { Header2 } from '../components/Typography'

const BgSectionContainer = styled(SectionContainer)`
  background: url('/assets/values_bg.svg');
  background-repeat: no-repeat;
  height: 85vw;
  display: grid;
  background-size: 100vw;
  background-position: center center;
  position: relative;
`

const StyledTitle = styled(Header2)`
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em 15em;
  padding: 10em 0em;
  position: relative;
  z-index: 2;
  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 3em;
    padding: 5em 0em 0em;
  }
`

const ConfidenceContainer = styled.div`
  width: 50%;
  margin-top: 10em;
`

const PaperAndIPadContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5em;
`

const IPadContainer = styled.div`
  align-self: flex-end;
  flex-grow: 1;
`

const Column = styled.div`
  gap: 10em;
  display: flex;
  flex-direction: column;
`

const Values = () => (
  <BgSectionContainer id="values">
    <TextContainer>
      <StyledTitle>Our Main Values</StyledTitle>
      <Column>
        <ConfidenceContainer>
          <img src='/assets/Notebook.svg' alt='Building Confidence, Develop career-ready skills through our workshops, fight impostor syndrome, and build an invaluable support network with friends, mentors, and sponsors. You are welcome! Regardless of your background, you bring a unique and important perspective to tech.' />
        </ConfidenceContainer>
        <PaperAndIPadContainer>
          <img src='/assets/Paper.svg' alt='Explore in a Safe Space, Discover a community of like-minded, creative, and passionate individuals. Build lasting bonds, share experiences, and create memories. We are all here unified under one cause – to strive for better representation in tech.' />
          <IPadContainer>
            <img src='/assets/iPad.svg' alt='Learning Together, Whether you have never coded before or you dream in assembly, come out and challenge yourself to build a project in a 24-hour event. Learn new skills in our series of hands-on workshops and apply them to innovative project ideas! Regardless of the completion level at the end of the weekend, be proud that you learned or tried something new!' />
          </IPadContainer>
        </PaperAndIPadContainer>
      </Column>
    </TextContainer>
  </BgSectionContainer>
)

export default Values
