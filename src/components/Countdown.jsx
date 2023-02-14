import { Header3 } from '@components/Typography'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CountdownContainer = styled.div`
  position: relative;
  z-index: 10;
  user-select: none;
`
const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 2;
  gap: 2rem;

  ${p => p.theme.mediaQueries.tabletLarge} {
    gap: 0.5rem;
    flex-grow: 0;
  }
  ${p => p.theme.mediaQueries.mobile} {
    gap: 0.2rem;
  }
`

const TimeUnit = styled.div`
  text-align: center;
`

const Digits = styled.h2`
  font-family: 'HK Grotesk', sans-serif;
  color: #4D4B4F;
  font-weight: 600;
  font-size: 5.5rem;
  letter-spacing: 0.2rem;

  ${p => p.theme.mediaQueries.tabletLarge} {
    font-size: 3rem;
    letter-spacing: 0;
  }
  ${p => p.theme.mediaQueries.xs} {
    font-size: 2rem;
  }
`

const BillboardText = styled(Header3)`
  color: #4D4B4F;
  ${p => p.theme.mediaQueries.tabletLarge} {
    font-size: 1.5rem;
  }
  ${p => p.theme.mediaQueries.xs} {
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
  const countDownDate = new Date('Feb 26, 2023 23:59:59').getTime()
  const countdown = useCountdown(countDownDate)

  return (
    <CountdownContainer>
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
