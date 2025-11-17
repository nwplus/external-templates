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
  background: linear-gradient(to bottom, #f6dbc8 0%, #f9dcae 50%, #ffc973 100%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 922;
  }
`

// TRAIN START
const Tracks = styled.img`
  position: absolute;
  width: calc(100vw * (760 / 1512));
  top: calc(100vw * (-228 / 1512));
  right: calc(100vw * (750 / 1512));
  z-index: 1;
`

const Rails = styled.img`
  position: absolute;
  width: 100vw;
  top: calc(100vw * (-150 / 1512));
`
// TRAIN END

// COUNTDOWN THINGS START
const Countdown = styled.div``

const CountdownContainer = styled.img`
  position: absolute;
  width: calc(100vw * (613 / 1512));
  top: calc(100vw * (-53 / 1512));
  right: calc(100vw * (60 / 1512));
`

const CountdownBorder = styled.img`
  position: absolute;
  width: calc(100vw * (224 / 1512));
  top: calc(100vw * (-30 / 1512));
  right: calc(100vw * (85 / 1512));
`

const CountdownMascots = styled.img`
  position: absolute;
  width: calc(100vw * (195 / 1512));
  top: calc(100vw * (-153 / 1512));
  right: calc(100vw * (50 / 1512));
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
`

const CountdownT = styled.p`
  font-family: 'Space Grotesk';
  color: #ffffff;
  font-weight: bold;

  background: linear-gradient(to bottom, #ffffff 0%, #f7e8e8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  display: inline-block;
  font-size: calc(100vw * (30 / 1512));
`

const CountdownLeft = styled.div`
  position: absolute;
  top: calc(100vw * (-30 / 1512));
  right: calc(100vw * (340 / 1512));
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (6 / 1512));
`

const CountdownGrid = styled.div`
  position: absolute;
  top: calc(100vw * (-19 / 1512));
  right: calc(100vw * (-133 / 1512));
  z-index: 3;

  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: calc(100vw * (12 / 1512));
  align-items: center;
  justify-items: center;

  width: calc(100vw * (420 / 1512));
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
`

const GridLabel = styled.p`
  font-family: 'Pixelify Sans';
  font-size: calc(100vw * (18 / 1512));
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0.95;
`
// COUNTDOWN THINGS END

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
      {/* <TextContainer>
      <Title>One for the history books</Title>
      <Description>
        Join us for the 11th iteration of nwHacks! Everyone is welcome at nwHacks, whether you are just getting into
        tech or are a seasoned hacker. Join us in-person on January 17-18, 2026 for a weekend of creativity, community,
        and innovation. All you need is an open mind and an insatiable desire to learn - we’ll take care of the rest.
        Create a project, learn new skills, and bond with friends, all in 24 hours!
      </Description>
    </TextContainer> */}
    </AboutContainer>
  )
}

export default About
