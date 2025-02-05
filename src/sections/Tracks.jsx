import React from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import Accessibility from '@assets/images/tracks/accessibility_track.png'
import Wellness from '@assets/images/tracks/wellness_track.png'
import Social from '@assets/images/tracks/social_track.png'
import Wildcard from '@assets/images/tracks/wildcard_track.png'
import Arrow from '@assets/images/tracks/arrow.svg'

const TrackContainer = styled.div`
  position: relative;
  aspect-ratio: 1920 / 1000;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1690;
    margin-top: 3rem;
  }
`

const TrackInner = styled.div`
  width: 72vw;
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  padding-bottom: 5rem;

  ${p => p.theme.mediaQueries.mobile} {
    padding-bottom: 7rem;
    gap: 2rem;
    min-width: 300px;
  }
`

const Header = styled(Header2)`
  position: absolute;
  top: calc(100vw * (150 / 1000));
  left: calc(100vw * (1050 / 1920));
  transform: rotate(-7.243deg);
  color: #A6321E;
  text-align: center;
  font-family: Gloock;
  font-size: calc(100vw * (54 / 1920));
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
    color: #A6321E;
    left: calc(100vw * (0 / 393));
    right: calc(100vw * (0 / 393));
    margin: calc(100vw * (0 / 393)) auto;
    top: calc(100vw * (30 / 393));
    transform: rotate(0deg);
  }
`

const Instruction = styled.h3`
  position: absolute;
  top: calc(100vw * (350 / 1000));
  left: calc(100vw * (575 / 1920));
  color: #000;
  transform: rotate(2.866deg);
  text-align: center;
  font-family: Poppins;
  font-size: calc(100vw * (25 / 1920));
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${p => p.theme.mediaQueries.mobile} {
    transform: rotate(0deg);
    font-size: calc(100vw * (17 / 393));
    left: calc(100vw * (0 / 393));
    right: calc(100vw * (0 / 393));
    margin: calc(100vw * (0 / 393)) auto;
    top: calc(100vw * (80 / 393));
  }
`

const AccessibilityCardImg = styled.img`
  position: absolute;
  width: calc(100vw * (390 / 1920));
  top: calc(100vw * (125 / 1000));
  left: calc(100vw * (50 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (800 / 1000));
    top: calc(100vw * (290 / 1000));
    left: calc(100vw * (100 / 1920));
    z-index: 1;
  }
`

const WellnessCardImg = styled.img`
  position: absolute;
  width: calc(100vw * (390 / 1920));
  top: calc(100vw * (40 / 1000));
  left: calc(100vw * (525 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (800 / 1000));
    top: calc(100vw * (1220 / 1000));
    left: calc(100vw * (280 / 1920));
    z-index: 2;
  }
`

const SocialCardImg = styled.img`
  position: absolute;
  width: calc(100vw * (420 / 1920));
  top: calc(100vw * (192 / 1000));
  left: calc(100vw * (970 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (850 / 1000));
    top: calc(100vw * (2230 / 1000));
    left: calc(100vw * (100 / 1920));
    z-index: 3;
  }
`

const WildcardCardImg = styled.img`
  position: absolute;
  width: calc(100vw * (390 / 1920));
  top: calc(100vw * (65 / 1000));
  left: calc(100vw * (1450 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (800 / 1000));
    top: calc(100vw * (3150 / 1000));
    left: calc(100vw * (220 / 1920));
    z-index: 4;
  }
`

const ArrowImg = styled.img`
  position: absolute;
  width: calc(100vw * (60 / 1920));
  top: calc(100vw * (340 / 1000));
  left: calc(100vw * (505 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (200 / 393));
    margin-bottom: calc(100vw * (16 / 393));
  }
`

const MobileContent = styled.div`  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
  }
`

const DesktopContent = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  align-items: center;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Track = () => (

    <TrackContainer id="tracks">
      <TrackInner>
        <MobileContent>
          <Header>Tracks</Header>
          <Instruction>Click to learn more!</Instruction>
          <AccessibilityCardImg src={Accessibility} alt="Accessibility" />
          <WellnessCardImg src={Wellness} alt="Wellness" />
          <SocialCardImg src={Social} alt="Social" />
          <WildcardCardImg src={Wildcard} alt="Wildcard" />
        </MobileContent>

        <DesktopContent>
          <Header>Tracks</Header>
          <Instruction>Click to learn more!</Instruction>
          <ArrowImg src={Arrow} alt="Arrow" />
          <AccessibilityCardImg src={Accessibility} alt="Accessibility" />
          <WellnessCardImg src={Wellness} alt="Wellness" />
          <SocialCardImg src={Social} alt="Social" />
          <WildcardCardImg src={Wildcard} alt="Wildcard" />
        </DesktopContent>
      </TrackInner>
    </TrackContainer>
  )

export default Track

