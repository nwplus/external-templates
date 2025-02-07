import React, { useState } from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import Accessibility from '@assets/images/tracks/accessibility_track.svg'
import Wellness from '@assets/images/tracks/wellness_track.svg'
import Social from '@assets/images/tracks/social_track.svg'
import Wildcard from '@assets/images/tracks/wildcard_track.svg'
import Arrow from '@assets/images/tracks/arrow.svg'
import AccessibilityDesc from '@assets/images/tracks/accessibility_track_desc.svg'
import WellnessDesc from '@assets/images/tracks/wellness_track_desc.svg'
import SocialDesc from '@assets/images/tracks/social_track_desc.svg'
import WildcardDesc from '@assets/images/tracks/wildcard_track_desc.svg'

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
  color: #a6321e;
  text-align: center;
  font-family: Gloock;
  font-size: calc(100vw * (54 / 1920));
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
    color: #a6321e;
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
  font-weight: 500;
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

const TrackCard = styled.img`
  position: absolute;
  width: calc(100vw * (${props => props.width || '390'} / 1920));
  top: calc(100vw * (${props => props.top} / 1000));
  left: calc(100vw * (${props => props.left} / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (${props => props.mobileWidth || '800'} / 1000));
    top: calc(100vw * (${props => props.mobileTop} / 1000));
    left: calc(100vw * (${props => props.mobileLeft || '100'} / 1920));
    z-index: ${props => props.mobileZIndex};
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

const MobileContent = styled.div`
  width: 100%;
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

const TRACK_CARDS = [
  {
    id: 1,
    originalSrc: Accessibility,
    alt: 'Accessibility',
    width: '390',
    top: '125',
    left: '50',
    mobileTop: '290',
    mobileZIndex: 1,
    descSrc: AccessibilityDesc,
  },
  {
    id: 2,
    originalSrc: Wellness,
    alt: 'Wellness',
    width: '390',
    top: '40',
    left: '525',
    mobileTop: '1220',
    mobileLeft: '280',
    mobileZIndex: 2,
    descSrc: WellnessDesc,
  },
  {
    id: 3,
    originalSrc: Social,
    alt: 'Social',
    width: '390',
    top: '192',
    left: '970',
    mobileTop: '2230',
    mobileWidth: '850',
    mobileZIndex: 3,
    descSrc: SocialDesc,
  },
  {
    id: 4,
    originalSrc: Wildcard,
    alt: 'Wildcard',
    width: '390',
    top: '65',
    left: '1450',
    mobileTop: '3150',
    mobileLeft: '220',
    mobileZIndex: 4,
    descSrc: WildcardDesc,
  },
]

const Track = () => {
  const [cards, setCards] = useState(TRACK_CARDS.map(card => ({ ...card, isDesc: false })))

  const handleCardClick = clickedId => {
    setCards(prevCards => prevCards.map(card => (card.id === clickedId ? { ...card, isDesc: !card.isDesc } : card)))
  }

  return (
    <TrackContainer id="tracks">
      <TrackInner>
        <MobileContent>
          <Header>Tracks</Header>
          <Instruction>Click to learn more!</Instruction>
          {cards.map(card => (
            <TrackCard
              style={{ cursor: 'pointer' }}
              key={card.id}
              src={card.isDesc ? card.descSrc : card.originalSrc}
              {...card}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </MobileContent>

        <DesktopContent>
          <Header>Tracks</Header>
          <Instruction>Click to learn more!</Instruction>
          <ArrowImg src={Arrow} alt="Arrow" />
          {cards.map(card => (
            <TrackCard
              style={{ cursor: 'pointer' }}
              key={card.id}
              src={card.isDesc ? card.descSrc : card.originalSrc}
              {...card}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </DesktopContent>
      </TrackInner>
    </TrackContainer>
  )
}

export default Track
