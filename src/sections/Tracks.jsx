import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'

const TrackContainer = styled.div`
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

const TrackInner = styled.div`
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

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 2rem;
  }
`

const BlurbText = styled(Body)`
  padding-top: 2rem;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 150%;
  color: #F3F5F4;
`

const Track = () => (
  <TrackContainer id="tracks">
    <TrackInner>
      <BlurbContainer bias="left">
        <BlurbHeader></BlurbHeader>
        <BlurbText>
        </BlurbText>
      </BlurbContainer>
    </TrackInner>
  </TrackContainer>
)

export default Track