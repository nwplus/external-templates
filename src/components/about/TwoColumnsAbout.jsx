import React from 'react'
import styled from 'styled-components'
import logo from '@assets/logo__cmdf.png'
import background from '@assets/about__bg.svg'
import mobile from '@assets/about__bg_sm.svg'
import { TABLET } from '@constants/measurements'
import { scale } from '@utilities/format'
import { SectionContainerWithBackground as Base } from '@lib/Containers'

const SectionContainer = styled(Base)`
  font-size: ${() => scale(320, 1440, 6, 28)};
  position: relative;
  text-align: center;
  height: 93vw;
  .intro {
    width: 61vw;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 5vw;
  }
  .blurb {
    font-style: italic;
    padding-top: 2vw;
  }
  .bottom {
    font-size: ${() => scale(320, 1440, 6, 18)};
    margin: auto;
    width: 56vw;
  }
  .countdown {
    color: #fff;
    font-family: 'Fira Code', monospace;
    font-size: ${() => scale(320, 1440, 10, 48)};
    font-weight: 700;
    position: absolute;
    top: 57.5vw;
    left: 42.5vw;
  }
  img {
    display: block;
    margin: auto;
    margin-bottom: 4vw;
    width: 12vw;
  }
  @media (max-width: ${TABLET}) {
    background-image: url(${mobile});
    background-position: top;
    height: 355vw;
    .intro {
      padding: 97vw 0 0;
      font-size: ${() => scale(320, 786, 14, 32)};
    }
    .bottom {
      padding-top: 79vw;
      font-size: ${() => scale(320, 786, 14, 36)};
      text-align: left;
      width: 72vw;
    }
    .countdown {
      top: 159vw;
      left: 53vw;
      margin: 0;
      font-size: ${() => scale(320, 786, 22, 54)};
    }
    img {
      display: none;
    }
  }
`

const CountDown = ({ date }) => {
  const countDownDate = new Date(date).getTime()
  const now = new Date().getTime()
  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  return (
    <div className="countdown">
      {days < 10 && "0"}
      {`${days}d `}
      {hours < 10 && "0"}
      {`${hours}h`}
    </div>
  )
}

const About = ({ top, middle, bottom, date }) => (
  <SectionContainer src={background} id="about">
    <div className="intro">
      <img src={logo} alt="cmd-fLogo" />
      <p>{top}</p>
    </div>
    <div className="bottom">
      {middle}
      <div className="blurb">{bottom}</div>
    </div>
    <CountDown date={date} />
  </SectionContainer>
)

export default About
