import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import ClockSVG from "../assets/images/countdown.svg"
import MobileClockSVG from "../assets/images/mobile/clock.svg"
import NuggetWaving from "../assets/images/animations/nugget-waving.gif"

const CountdownContainer = styled.div`
  min-height: calc(calc(1027 / 1440) * 100vw);
  position: relative;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(387 / 414) * 100vw);
    top:-200px;
  }
`

const Clock = styled.div`
  width: 100vw;
  height: auto;
`

const NuggetWavingImg = styled.img`
  position: absolute;
  width: 12vw;
  height: auto;
  left: 32.5%;
  z-index: 1;
  top: 30px;

  ${p => p.theme.mediaQueries.mobile} {
    width: 65px;
    top: 10px;
    left: 15%;
  }
`

const ClockImg = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileClockImg = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  display: none;
  
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const CountdownGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-grow: 2;
  width: 30%;
  transform: rotate(-11deg);
  padding-top: 22%;
  left: 40%;

  ${p => p.theme.mediaQueries.mobile} {
    gap: 1rem;
    flex-grow: 0;
    padding-top: 30%;
    left: 30%;
  }
`

const TimeUnit = styled.div`
  text-align: center;
`

const Digits = styled.h2`
  font-family: 'HK Grotesk', sans-serif;
  color: #564D4A;
  font-weight: 600;
  font-size: 4vw;
  letter-spacing: 0.2rem;
  display: inline-block;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: 5px;
    font-size: 6vw;
    letter-spacing: 0;
  }
`

const getReturnValues = countDown => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  if (days < 0 || hours < 0 || seconds < 0) {
    return [0, 0, 0, 0]
  }

  return [days, hours, minutes, seconds]
}

const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 5000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countDown)
}

const Countdown = () => {
  const countDownDate = new Date('Dec 31, 2023 23:59:59').getTime()
  const countdown = useCountdown(countDownDate)

  return (
    <CountdownContainer>
      <Clock>
        <NuggetWavingImg src={NuggetWaving} />
        <ClockImg src={ClockSVG} />
        <MobileClockImg src={MobileClockSVG} />

        <CountdownGrid>
          {/* {['Days', 'Hours', 'Minutes'].map((item, index) => (
            <TimeUnit key={item}>
              <Digits>{countdown[index]}</Digits>
             {index < 2 &&
                <Colon>&nbsp;&nbsp;:</Colon>
              
            </TimeUnit>
          ))} */}
          <TimeUnit>
            <Digits>{countdown[0]}</Digits>
          </TimeUnit>
          <TimeUnit>
            <Digits>:</Digits>
          </TimeUnit>
          <TimeUnit>
            <Digits>{countdown[1]}</Digits>
          </TimeUnit>
          <TimeUnit>
            <Digits>:</Digits>
          </TimeUnit>
          <TimeUnit>
            <Digits>{countdown[2]}</Digits>
          </TimeUnit>
        </CountdownGrid>
      </Clock>
    </CountdownContainer>
  )
}

export default Countdown
