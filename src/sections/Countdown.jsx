import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CountdownContainer = styled.div`
  min-height: calc(calc(1027 / 1440) * 100vw);
  position: relative;
  z-index: 1;
  margin-left: -4rem;
  width: fit-content;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(387 / 414) * 100vw);
    top:-200px;
  }
`

const Clock = styled.div`
  height: auto;
  position: relative;
`

const ClockWrapper = styled.div`
  position: relative;
  width: 30rem;
  display: inline-block;
  
  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
  }
`

const ClockImg = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CountdownGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.3rem;
  width: fit-content;
  top: 35%;
  left: 17%;

  ${p => p.theme.mediaQueries.mobile} {
    gap: 0.5rem;
    top: 30%;
    left: 27%;
  }
`

const TimeUnit = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`

const Digits = styled.h2`
  font-family: 'Bree Serif';
  color: black;
  font-weight: 500;
  font-size: 3rem;
  display: inline-block;
  margin: 0;

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
  const countDownDate = new Date('Jan 26, 2026 18:00:00').getTime()

  const countdown = useCountdown(countDownDate)

  return (
    <CountdownContainer>
      <Clock>
        {/* <NuggetWavingImg src={NuggetWaving} /> */}
        <ClockWrapper>
          <ClockImg src="/assets/images/watchDeer.svg" alt="Watch deer" />
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
        </ClockWrapper>
        {/* <MobileClockImg src={MobileClockSVG} /> */}
      </Clock>
    </CountdownContainer>
  )
}

export default Countdown
