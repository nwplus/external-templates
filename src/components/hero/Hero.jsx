import React from 'react'
import logo from '@assets/logo__cmdf.png'
import mobile from '@assets/hero__bg_sm.svg'
import styled from 'styled-components'
import background from '@assets/hero__bg.svg'
import { LAPTOP } from '@constants/measurements'
import { scale } from '@utilities/format'
import { SectionContainerWithBackground as Base } from '@lib/Containers'
import Lottie from 'lottie-react'
import globeAnimation from '@assets/hero__globe_animation.json'
import Button from './Button'

const SectionContainer = styled(Base)`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  background-size: cover;
  font-size: ${() => scale(320, 1440, 6, 11.5)};
  width: 100vw;
  height: 85.75vw;
  img {
    width: 5vw;
  }
  .title {
    font-family: 'Fira Code', monospace;
  }
  .date {
    font-family: 'DM Sans', sans-serif;
    font-weight: bold;
  }
  .globe {
    position: relative;
    top: 2.75vw;
    left: 48.6vw;
    width: 68vw;
  }
  @media (max-width: ${LAPTOP}) {
    background-image: url(${mobile});
    font-size: ${() => scale(320, 1440, 6, 34)};
    height: 250vw;
    .globe {
      display: none;
    }
    img {
      width: 16vw;
    }
    div {
      right: 3vw;
      top: 65vw;
      width: 40vw;
    }
  }
`

const HeroContainer = styled.div`
  position: relative;
  right: 3vw;
  top: 22.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25vw;
  margin: auto;
  & > * {
    margin-bottom: 0.5vw;
  }
`

const Hero = ({ buttonText, titleText, dateText, applyActive, open }) => (
  <SectionContainer src={background}>
    <HeroContainer>
      <img src={logo} alt="cmd-f logo" />
      <h1 className="title">{titleText}</h1>
      <Button enabled={open}>
        {open ? <a href="https://forms.gle/qN3RYkXt5McnhpjF8">{applyActive}</a> : buttonText}
      </Button>
      <p className="date">{dateText}</p>
    </HeroContainer>
    <Lottie className="globe" animationData={globeAnimation} />
  </SectionContainer>
)

export default Hero
