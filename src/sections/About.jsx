import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'
// Dices for About section
// import { TABLET } from '@constants/measurements'
import redDice from "../assets/images/redDice.svg"
import yellowDice from "../assets/images/yellowDice.svg"
import blueDice from "../assets/images/blueDice.svg"
import smallBlueDice from "../assets/images/mobile/diceBlueSmall.svg"

import { useParallax } from 'react-scroll-parallax'

const AboutContainer = styled.div`
  min-height: calc(calc(779 / 1440) * 100vw);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440 / 779;
  margin-top: 18rem;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: 10rem;
    min-height: calc(calc(700 / 428) * 100vw);
    aspect-ratio: 428 / 700;
    align-items: center;
    margin-bottom: 16rem;
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
    padding-top: 0rem;
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

const RedDiceImg = styled.img`
  position: absolute;
  transform: scale(1);
  left: 20px;
  top: 30px;
  ${p => p.theme.mediaQueries.mobile} {
    width: 150px;
    height: auto;
    top: 30px;
    left: 0px;
    transform: scale(0.8);
  }
`

const YellowDiceImg = styled.img`
  position: absolute;
  transform: scale(1);
  left: 200px;
  top: 450px;
  ${p => p.theme.mediaQueries.mobile} {
    width: 150px;
    height: auto;
    top: 450px;
    left: 65%;
    transform: scale(0.8);
  }
`

const BlueDiceImg = styled.img`
  position: absolute;
  transform: scale(1);
  left: 350px;
  top: 350px;
  ${p => p.theme.mediaQueries.mobile} {
    width: 80px;
    height: auto;
    top: 80px;
    left: 155px;
    transform: scale(0.8);
  }
`

const SmallBlueDiceImg = styled.img`
  position: absolute;
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    top: 550px;
    left: 50%;
  }
`

const About = () => {
  const redDiceParallax = useParallax({
    speed: -10,
    scale: [0.2, 1.2]
  });

  const yellowDiceParallax = useParallax({
    speed: -12,
    scale: [0.2, 1]
  });

  const blueDiceParallax = useParallax({
    speed: -12,
    scale: [0.2, 1]
  });

  const smallBlueDiceParallax = useParallax({
    speed: -10,
    scale: [0.2, 1]
  });

  return (
    <AboutContainer id="about">
      {/* Use the parallax reference for the RedDiceImg */}

      <RedDiceImg src={redDice} ref={redDiceParallax.ref} />

      {/* Add parallax effects to the other dice images */}
      <YellowDiceImg src={yellowDice} ref={yellowDiceParallax.ref} />
      <BlueDiceImg src={blueDice} ref={blueDiceParallax.ref} />
      <SmallBlueDiceImg src={smallBlueDice} ref={smallBlueDiceParallax.ref} />

      <AboutInner>
        <BlurbContainer bias="right">
          <BlurbHeader>Game on: Level up your tech journey at nwHacks!</BlurbHeader>
          <BlurbText>
            Whether you’re a seasoned hacker or you’re just getting into tech, you’re welcome at nwHacks. Join us in-person on January 20-21, 2024, for a weekend of creativity, community, and innovation! All you need is an open mind and an insatiable desire to learn, and we’ll take care of the rest. Create a project, learn new skills, and bond with friends, old and new — all in 24 hours.
          </BlurbText>
        </BlurbContainer>
      </AboutInner>
    </AboutContainer>
  );
};

export default About;
