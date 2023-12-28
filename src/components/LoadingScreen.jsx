import { useState, useEffect } from 'react'
import yellowDice from '@assets/images/yellowDice.svg'
import redDice from '@assets/images/redDice.svg'
import deer from '@assets/images/deer_top.svg'
import deerShadow from '@assets/images/deer_shadow.svg'
import bear from '@assets/images/bear_top.svg'
import bearShadow from '@assets/images/bear_shadow.svg'
import nugget from '@assets/images/nugget_top.svg'
import nuggetShadow from '@assets/images/nugget_shadow.svg'
import blueCard from '@assets/images/blueCard.svg'
import styled, { keyframes } from 'styled-components'
import { Header1, Header3 } from './Typography'
// import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const ANIM_DELAY_S = 2
const ANIM_DURATION_S = 3

const BackgroundAnimation = keyframes`
  from {
    background-color: #000000;
  }
  to {
    background-color: #244556;
  }
`
const HeadingAnimation = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: -22.94px 18.53px 193.2px 0px #fff8cc80;
  }
`
const ShadowAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`
const BlueCardAnimation = keyframes`
  from {
    top: -100rem;
    right: -100rem;
    transform: rotate(-45deg)
  }
  to {
    top: -10rem;
    transform: rotate(45deg)
  }
`
const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000000;
  animation: ${BackgroundAnimation};
  animation-delay: ${ANIM_DELAY_S}s;
  animation-duration: ${ANIM_DURATION_S}s;
  animation-fill-mode: forwards;
`
const Content = styled.div`
  position: relative;
`
const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding: 1.2rem;

  background-color: #70605a;
  border-bottom: solid #433f3f 0.3rem;
  border-radius: 0.5rem;
  z-index: 2;

  animation: ${HeadingAnimation};
  animation-delay: ${ANIM_DELAY_S}s;
  animation-duration: ${ANIM_DURATION_S}s;
  animation-fill-mode: forwards;
`
const TitleContent = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  padding: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  border: solid #5b4f49 0.3rem;
  background-color: white;
  border-radius: 0.5rem;
`
const Heading = styled(Header1)`
  color: black;
  font-size: 6rem;
  font-weight: 800;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
const Subheading = styled(Header3)`
  color: black;
  font-size: 2rem;
  font-weight: 700;
`
const YellowDice = styled.img`
  width: 10rem;
  position: absolute;
  top: 0rem;
  left: -12rem;
`
const RedDice = styled.img`
  width: 7rem;
  position: absolute;
  bottom: -9rem;
  left: 50%;
`

const BlueCard = styled.img`
  width: 10rem;
  position: absolute;
  right: -10rem;
  top: -10rem;

  animation: ${BlueCardAnimation};
  animation-delay: ${ANIM_DELAY_S}s;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: ease;
`

const DeerGroup = styled.div`
  width: 30rem;
  position: absolute;
  top: -8rem;
  left: -4rem;
  transform: rotate(45deg);
`
const Deer = styled.img`
  width: 15rem;
  position: absolute;
  z-index: 2;
`
const DeerShadow = styled.img`
  position: absolute;
  top: -5rem;
  left: -31.5rem;
  animation: ${ShadowAnimation};
  animation-delay: ${ANIM_DELAY_S + 2}s;
  animation-duration: 2s;
  animation-fill-mode: both;
`

const NuggetGroup = styled.div`
  position: absolute;
  top: 2rem;
  right: -4rem;
  transform: rotate(230deg);
`
const Nugget = styled.img`
  width: 7rem;
  height: 7rem;
  position: absolute;
  z-index: 3;
`
const NuggetShadow = styled.img`
  position: absolute;
  top: 3rem;
  right: -24rem;

  animation: ${ShadowAnimation};
  animation-delay: ${ANIM_DELAY_S + 2}s;
  animation-duration: 2s;
  animation-fill-mode: both;
`

const LoadingScreen = () => (
  <LoadingScreenContainer>
    <Content>
      <YellowDice src={yellowDice} />
      <RedDice src={redDice} />
      <BlueCard src={blueCard} />

      <DeerGroup>
        <Deer src={deer} />
        <DeerShadow src={deerShadow} />
      </DeerGroup>

      <NuggetGroup>
        <Nugget src={nugget} />
        <NuggetShadow src={nuggetShadow} />
      </NuggetGroup>

      <TitleContainer>
        <TitleContent>
          <Heading>nwHacks</Heading>
          <Subheading>2024</Subheading>
        </TitleContent>
      </TitleContainer>
    </Content>
  </LoadingScreenContainer>
)

export default LoadingScreen
