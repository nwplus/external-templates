import React, { useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OuterContainer = styled.div`
  position: relative;
  background: #78c7f3cc;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/assets/images/values/cards_background.svg') center/90% auto no-repeat;
    z-index: 0;
    pointer-events: none;
  }

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: 0px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/assets/images/values/cards_background_mobile.svg') center/100% auto no-repeat;
      z-index: 0;
      pointer-events: none;
    }
  }
`

const ValuesContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1520/750;
  height: auto;
  display: flex;
  position: relative;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393/1600;
  }
`

const hoverJiggle = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.06) rotate(1deg);
  }
  50% {
    transform: scale(1.06) rotate(-1deg);
  }
  75% {
    transform: scale(1.06) rotate(0.5deg);
  }
  100% {
    transform: scale(1.06) rotate(0deg);
  }
`

const hoverJiggleStyles = css`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.06);
    animation: ${hoverJiggle} 0.35s ease-in-out 1;
  }
`

const CardInner = styled.div`
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  display: grid;

  ${p => p.$flipped && 'transform: rotateY(180deg);'}
`

const CardFace = styled.img`
  grid-area: 1 / 1;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`

const Title = styled.p`
  font-color: #000000;
  font-family: 'Bree Serif';
  font-weight: 400;
  text-align: center;
  font-size: calc(100vw * (64 / 1920));
  margin-bottom: calc(100vw * (40 / 1280));
  padding-top: calc(100vw * (40 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
  }
`

const Subtitle = styled.p`
  font-color: #000000;
  font-family: 'Bree Serif';
  font-style: italic;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (8 / 1920));
  font-size: calc(100vw * (22 / 1920));
  margin-top: calc(100vw * (-20 / 1280));
  margin-bottom: calc(100vw * (40 / 1280));

  &::before {
    content: '';
    width: calc(100vw * (20 / 1920));
    height: calc(100vw * (20 / 1920));
    background: url('/assets/images/values/pointer.svg') center/contain no-repeat;
    flex: 0 0 auto;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 393));
    margin-top: calc(100vw * (-12 / 393));
    gap: calc(100vw * (6 / 393));

    &::before {
      width: calc(100vw * (16 / 393));
      height: calc(100vw * (16 / 393));
    }
  }
`

const BuildConfidence = styled.div`
  width: calc(100vw * (300 / 1512));
  z-index: 4;
  position: absolute;
  left: calc(100vw * (150 / 1512));
  top: calc(100vw * (25 / 1512));
  perspective: 1000px;

  ${hoverJiggleStyles}

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (300 / 393));
    position: absolute;
    left: calc(100vw * (50 / 393));
    top: calc(100vw * (50 / 393));
    z-index: 9;
  }
`

const LearnTogether = styled.div`
  width: calc(100vw * (300 / 1512));
  z-index: 6;
  position: absolute;
  left: calc(100vw * (600 / 1512));
  top: calc(100vw * (25 / 1512));
  perspective: 1000px;

  ${hoverJiggleStyles}

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (300 / 393));
    position: absolute;
    left: calc(100vw * (50 / 393));
    top: calc(100vw * (550 / 393));
    z-index: 9;
  }
`

const ExploreInASafeSpace = styled.div`
  width: calc(100vw * (300 / 1512));
  z-index: 6;
  position: absolute;
  left: calc(100vw * (1050 / 1512));
  top: calc(100vw * (25 / 1512));
  perspective: 1000px;

  ${hoverJiggleStyles}

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (300 / 393));
    position: absolute;
    left: calc(100vw * (50 / 393));
    top: calc(100vw * (1050 / 393));
    z-index: 9;
  }
`

const Values = () => {
  const valuesRef = useRef(null)
  const [activeImage, setActiveImage] = useState(null)

  return (
    <OuterContainer id="values" ref={valuesRef}>
      <Title>Our Main Values</Title>
      <Subtitle>Select a card to read more</Subtitle>
      <ValuesContainer>
        <BuildConfidence onClick={() => setActiveImage(activeImage === 'build_confidence' ? null : 'build_confidence')}>
          <CardInner $flipped={activeImage === 'build_confidence'}>
            <CardFace src="/assets/images/values/build_confidence.png" alt="Build Confidence" />
            <CardBack src="/assets/images/values/build_confidence_text.png" alt="Build Confidence Text" />
          </CardInner>
        </BuildConfidence>
        <LearnTogether onClick={() => setActiveImage(activeImage === 'learn_together' ? null : 'learn_together')}>
          <CardInner $flipped={activeImage === 'learn_together'}>
            <CardFace src="/assets/images/values/learn_together.png" alt="Learn Together" />
            <CardBack src="/assets/images/values/learn_together_text.png" alt="Learn Together Text" />
          </CardInner>
        </LearnTogether>
        <ExploreInASafeSpace
          onClick={() => setActiveImage(activeImage === 'explore_in_a_safe_space' ? null : 'explore_in_a_safe_space')}
        >
          <CardInner $flipped={activeImage === 'explore_in_a_safe_space'}>
            <CardFace src="/assets/images/values/explore_in_a_safe_space.png" alt="Explore In A Safe Space" />
            <CardBack src="/assets/images/values/explore_in_a_safe_space_text.png" alt="Explore In A Safe Space Text" />
          </CardInner>
        </ExploreInASafeSpace>
      </ValuesContainer>
    </OuterContainer>
  )
}

export default Values
