import { Header2, Header3 } from '@components/Typography'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CountdownContainer = styled.div`
  min-height: calc(calc(1883 / 1440) * 100vw);
  position: relative;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(746 / 428) * 100vw);
  }
`

const StyledHeader = styled(Header2)`
  font-weight: 600;
  font-size: 3.8rem;
  text-align: center;
  line-height: 120%;
  max-width: 40%;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.4rem;
    max-width: 90%;
  }
`

const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 2;

  ${p => p.theme.mediaQueries.mobile} {
    gap: 1rem;
    flex-grow: 0;
  }
`

const TimeUnit = styled.div`
  text-align: center;
`

const Digits = styled.h2`
  font-family: 'HK Grotesk', sans-serif;
  color: white;
  font-weight: 600;
  font-size: 5.5rem;
  letter-spacing: 0.2rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3rem;
    letter-spacing: 0;
  }
`

const BillboardText = styled(Header3)`
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
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
  const countDownDate = new Date('Dec 25, 2022 23:59:59').getTime()
  const countdown = useCountdown(countDownDate)

  return (
    <CountdownContainer>
        <StyledHeader>Registration closes in:</StyledHeader>
        <CountdownGrid>
          {['Days', 'Hours', 'Minutes'].map((item, index) => (
            <TimeUnit key={item}>
              <Digits>{countdown[index]}</Digits>
              <BillboardText>{item}</BillboardText>
            </TimeUnit>
          ))}
        </CountdownGrid>
    </CountdownContainer>
  )
}

export default Countdown
