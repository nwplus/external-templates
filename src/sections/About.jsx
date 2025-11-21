import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

const AboutContainer = styled.div`
  aspect-ratio: 1512/900;
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #f6dbc8 0%, #f9dcae 50%, #ffc973 70%, #f9f2ea 100%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1000;
  }
`

// TRAIN START
const Tracks = styled.img`
  position: absolute;
  width: calc(100vw * (760 / 1512));
  top: calc(100vw * (-228 / 1512));
  right: calc(100vw * (750 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (-20 / 393));
    right: calc(100vw * (260 / 393));
    width: calc(100vw * (300 / 393));
  }
`

const Rails = styled.img`
  position: absolute;
  width: 100vw;
  top: calc(100vw * (-150 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (-90 / 393));
    width: 300vw;
    right: calc(100vw * (-350 / 393));
  }
`
// TRAIN END

// COUNTDOWN THINGS START
const Countdown = styled.div``

const CountdownContainer = styled.img`
  position: absolute;
  width: calc(100vw * (613 / 1512));
  top: calc(100vw * (-53 / 1512));
  right: calc(100vw * (60 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (188 / 393));
    height: calc(100vw * (132 / 393));
    right: calc(100vw * (100 / 393));
    top: calc(100vw * (-40 / 393));
  }
`

const CountdownBorder = styled.img`
  position: absolute;
  width: calc(100vw * (224 / 1512));
  top: calc(100vw * (-30 / 1512));
  right: calc(100vw * (85 / 1512));
  z-index: 20;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (112 / 393));
    height: calc(100vw * (49 / 393));
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    top: calc(100vw * (30 / 393));
  }
`

const CountdownMascots = styled.img`
  position: absolute;
  width: calc(100vw * (195 / 1512));
  top: calc(100vw * (-153 / 1512));
  right: calc(100vw * (50 / 1512));
  z-index: 5;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CountdownP = styled.p`
  font-family: 'Pixelify Sans';
  color: #ffffff;

  background: linear-gradient(to bottom, #ffffff 0%, #f7e8e8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  display: inline-block;
  font-size: calc(100vw * (18 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (10 / 393));
  }
`

const CountdownT = styled.p`
  font-family: 'Space Grotesk';
  color: #ffffff;
  font-weight: 500;

  background: linear-gradient(to bottom, #ffffff 0%, #f7e8e8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  display: inline-block;
  font-size: calc(100vw * (30 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
  }
`

const CountdownLeft = styled.div`
  position: absolute;
  top: calc(100vw * (-30 / 1512));
  right: calc(100vw * (340 / 1512));
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (6 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    top: calc(100vw * (-25 / 393));
  }
`

const CountdownGrid = styled.div`
  position: absolute;
  top: calc(100vw * (-19 / 1512));
  right: calc(100vw * (-12 / 1512));
  z-index: 3;

  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: calc(100vw * (12 / 1512));
  align-items: center;
  justify-items: center;
  justify-content: center;

  width: calc(100vw * (420 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (97 / 393));
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    top: calc(100vw * (38 / 393));
    column-gap: calc(100vw * (12 / 393));
  }
`

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(100vw * (0 / 1512));
`

const GridNumber = styled.p`
  font-family: 'Pixelify Sans';
  font-weight: 700;
  font-size: calc(100vw * (48 / 1512));
  line-height: 1;
  margin: 0;

  background: linear-gradient(to bottom, #ffffff 0%, #f7e8e8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 393));
  }
`

const GridLabel = styled.p`
  font-family: 'Pixelify Sans';
  font-size: calc(100vw * (18 / 1512));
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0.95;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (11 / 393));
  }
`
// COUNTDOWN THINGS END

// ABOUT IMAGES
const LeftIsland = styled.img`
  position: absolute;
  width: calc(100vw * (250 / 1512));
  top: calc(100vw * (-60 / 1512));
  left: 0;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (100 / 393));
    top: calc(100vw * (380 / 1512));
  }
`

const CloudOne = styled.img`
  position: absolute;
  width: calc(100vw * (445 / 1512));
  top: calc(100vw * (-80 / 1512));
  left: 0;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (222 / 393));
    right: calc(100vw * (300 / 393));
    top: calc(100vw * (80 / 393));
    z-index: 1;
  }
`

const LeftBgIsland = styled.img`
  position: absolute;
  width: calc(100vw * (175 / 1512));
  top: calc(100vw * (190 / 1512));
  right: calc(100vw * (1220 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (87.5 / 393));
    right: calc(100vw * (260 / 393));
    top: calc(100vw * (190 / 393));
  }
`

const CloudTwo = styled.img`
  position: absolute;
  width: calc(100vw * (305 / 1512));
  top: calc(100vw * (300 / 1512));
  right: calc(100vw * (1200 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (700 / 393));
    top: calc(100vw * (550 / 393));
    right: calc(100vw * (190 / 393));
  }
`

const RightIsland = styled.img`
  position: absolute;
  width: calc(100vw * (230 / 1512));
  top: calc(100vw * (200 / 1512));
  right: 0;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (110 / 393));
    top: calc(100vw * (520 / 393));
    right: -20px;
    opacity: 0.5;
  }
`

const CloudThree = styled.img`
  position: absolute;
  width: calc(100vw * (445 / 1512));
  top: calc(100vw * (00 / 1512));
  right: 0;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Fog = styled.img`
  position: absolute;
  bottom: calc(100vw * (50 / 1512));
  width: 100%;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (1200 / 393));
    right: calc(100vw * (-200 / 393));
  }
`

const Sun = styled.img`
  position: absolute;
  bottom: calc(100vw * (100 / 1512));
  right: calc(100vw * (350 / 1512));
  z-index: 1;
  width: calc(100vw * (803 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`
// ABOUT IMAGES END

// TEXT START
const TextContainer = styled.div`
  display: flex;
  position: absolute;
  right: calc(100vw * (350 / 1512));
  width: calc(100vw * (844 / 1512));
  top: calc(100vw * (200 / 1512));
  gap: calc(100vw * (45 / 1512));
  align-items: center;
  z-index: 10;
  color: #262609;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    top: calc(100vw * (250 / 393));
  }
`

const TextLeft = styled.p`
  font-weight: 500;
  font-size: calc(100vw * (40 / 1512));
  width: calc(100vw * (282 / 1512));
  text-align: right;

  ${p => p.theme.mediaQueries.mobile} {
    text-align: center;
    font-size: calc(100vw * (30 / 487));
    width: calc(100vw * (212 / 393));
  }
`

const TextRight = styled.p`
  width: calc(100vw * (514 / 1512));
  text-align: left;
  font-weight: 400;
  font-size: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    text-align: center;
    font-size: calc(100vw * (15 / 487));
    width: calc(100vw * (267 / 393));
  }
`
// TEXT END

const getReturnValues = countDown => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))

  if (days < 0 || hours < 0 || minutes < 0) {
    return [0, 0, 0]
  }

  return [days, hours, minutes]
}

const About = () => {
  const target = new Date('Dec 19, 2025 11:59:59').getTime()
  const [timeLeft, setTimeLeft] = useState(target - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(target - Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [target])

  const [days, hours, minutes] = getReturnValues(timeLeft)

  const pad = n => String(n).padStart(2, '0')

  return (
    <AboutContainer id="about">
      <Tracks src="./assets/images/about/about_train.png" />
      <Rails src="./assets/images/about/about_rails.svg" />
      <Countdown>
        <CountdownContainer src="./assets/images/about/countdown_container.svg" />
        <CountdownBorder src="./assets/images/about/countdown_border.svg" />
        <CountdownMascots src="./assets/images/about/countdown_mascots.svg" />
        <CountdownLeft>
          <CountdownP>The nwHacks train is arriving...</CountdownP>
          <CountdownT>Applications close in:</CountdownT>
          <CountdownP>Submit by Dec 19th 11:59PM PST!</CountdownP>
        </CountdownLeft>
        <CountdownGrid>
          <GridItem>
            <GridNumber>{pad(days)}</GridNumber>
            <GridLabel>days</GridLabel>
          </GridItem>
          <GridItem>
            <GridNumber>{pad(hours)}</GridNumber>
            <GridLabel>hrs</GridLabel>
          </GridItem>
          <GridItem>
            <GridNumber>{pad(minutes)}</GridNumber>
            <GridLabel>mins</GridLabel>
          </GridItem>
        </CountdownGrid>
      </Countdown>
      <LeftIsland src="./assets/images/about/about_left_island.svg" />
      <CloudOne src="./assets/images/about/about_cloud_one.svg" />
      <LeftBgIsland src="./assets/images/about/about_left_bg_island.svg" />
      <CloudTwo src="./assets/images/about/about_cloud_two.svg" />
      <RightIsland src="./assets/images/about/about_right_island.svg" />
      <CloudThree src="./assets/images/about/about_cloud_three.svg" />
      <Fog src="./assets/images/about/fog.svg" />
      <Sun src="./assets/images/about/sun.svg" />
      <TextContainer>
        <TextLeft>Join us for the 11th iteration of nwHacks!</TextLeft>
        <TextRight>
          Welcome to the 11th iteration of nwHacks, where ideas take flight!
          <br />
          <br />
          Whether you're just getting into tech or already a seasoned hacker, you're invited to rise above the ordinary
          and explore new heights of creativity, community, and innovation. <br />
          <br />
          Happening in-person on January 17-18, 2026, this 24-hour journey will lift you into a space where imagination
          knows no bounds. All you need is an open mind and an insatiable desire to learn - we'll take care of the rest.
          Build something extraordinary, discover new skills, and connect with friends as your ideas drift beyond the
          horizon, all in 24 hours!
        </TextRight>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
