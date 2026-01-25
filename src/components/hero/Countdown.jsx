import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CountdownContainer = styled.div`
  position: relative;
  left: -4vw;
  height: calc(100vw * (200 / 1080));
  width: fit-content;
  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(387 / 414) * 100vw);
    top:-200px;
  }
`

const ClockFacePositioner = styled.div`
  position: absolute;
  left: calc(calc(70 / 1920) * 100vw);
  bottom: calc(calc(20 / 1920) * 100vw);
  // background-color: rgba(0,0,0,0.2);
  width: calc(calc(205 / 1920) * 100vw);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClockImg = styled.img`
  position: relative;
  height: 100%;
  display: block;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 0.3vw;
  height: fit-content;

  ${p => p.theme.mediaQueries.mobile} {
    gap: 0.5vm;
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
  font-size: 2.5vw;
  display: inline-block;
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 6vw;
    letter-spacing: 0;
  }
`

// The date we are counting down to
const TARGET_DATE = new Date('Feb 16, 2026 11:59:59').getTime()

// Cutoff for switching from days:hours to hours:minutes display
const HOURS_CUTOFF_FOR_DAYS_DISPLAY = 72

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
  const [days, hours, minutes] = useCountdown(TARGET_DATE);
  const totalHours = days * 24 + hours;
  const showDays = totalHours >= HOURS_CUTOFF_FOR_DAYS_DISPLAY;

  return (
    <CountdownContainer>
        <ClockImg src="/assets/images/watchDeer.svg" alt="Watch deer" />
        <ClockFacePositioner>
          <CountdownGrid>
            {showDays ? (
              <>
                <TimeUnit>
                  <Digits>{String(days).padStart(2, '0')}d</Digits>
                </TimeUnit>
                <TimeUnit>
                  <Digits>:</Digits>
                </TimeUnit>
                <TimeUnit>
                  <Digits>{String(hours).padStart(2, '0')}h</Digits>
                </TimeUnit>
              </>
            ) : (
              <>
                <TimeUnit>
                  <Digits>{String(totalHours).padStart(2, '0')}h</Digits>
                </TimeUnit>
                <TimeUnit>
                  <Digits>:</Digits>
                </TimeUnit>
                <TimeUnit>
                  <Digits>{String(minutes).padStart(2, '0')}m</Digits>
                </TimeUnit>
              </>
            )}
          </CountdownGrid>
        </ClockFacePositioner>
    </CountdownContainer>
  )
}

export default Countdown
