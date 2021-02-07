import React from 'react'
import logo from '@assets/logo__cmdf.png'
import mobile from '@assets/hero__bg_sm.svg'
import styled from 'styled-components'
import Button from './Button'
import background from '@assets/hero__bg.svg'
import { LAPTOP, fontsize } from '@constants/measurements'
import { SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

  font-size: ${() => fontsize(320, 1440, 6, 11.5)};
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
  @media (max-width: ${LAPTOP}) {
    background-image: url(${mobile});
    font-size: ${() => fontsize(320, 1440, 6, 34)};
    height: 250vw;
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
  right: 4vw;
  top: 21.5vw;
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

const Hero = ({ hero }) => {
  const { buttonText, applyActive } = hero
  return (
    <SectionContainer src={background}>
      <HeroContainer>
        <img src={logo} alt="cmd-f logo" />
        <h1 className="title">Vancouver’s all-female* hackathon</h1>
        <Button enabled={applyActive}>{buttonText}</Button>
        <p className="date">March 6-7, 2021</p>
      </HeroContainer>
    </SectionContainer>
  )
}

export default Hero
