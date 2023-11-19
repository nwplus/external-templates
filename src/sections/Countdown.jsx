import { Header2, Header3 } from '@components/Typography'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const CountdownContainer = styled.div`
  min-height: calc(calc(1883 / 1440) * 100vw);
  position: relative;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(746 / 428) * 100vw);
  }
`

const FauxBillboard = styled.div`
  min-height: calc(calc(482 / 1139) * 75vw);
  display: flex;
  max-width: 1200px;
  align-items: center;
  margin-top: 7%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  left: 100px;
  width: 400px;
  text-shadow: 0 0 10px rgba(233, 233, 233, 0.4);

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(290 / 636) * 100vw);
    max-width: 100vw;
    width: 100vw;
    flex-direction: column;
    position: absolute;
    margin-top: 0;
    padding-top: calc(calc(60 / 750) * 100vw);
    justify-content: center;
  }
`

const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 2;
  transform: rotate(-11deg);

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
  color: #564D4A;
  font-weight: 600;
  font-size: 5rem;
  letter-spacing: 0.2rem;
  display: inline-block;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3rem;
    letter-spacing: 0;
  }
`

// const Colon = styled.h2`
//   font-family: 'HK Grotesk', sans-serif;
//   color: #564D4A;
//   font-weight: 600;
//   font-size: 5.5rem;
//   letter-spacing: 0.2rem;
//   display: inline-block;

//   ${p => p.theme.mediaQueries.mobile} {
//     font-size: 3rem;
//     letter-spacing: 0;
// }
// `

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
      <FauxBillboard>
        <CountdownGrid>
          {['Days', 'Hours', 'Minutes'].map((item, index) => (
            <TimeUnit key={item}>
              <Digits>{countdown[index]}</Digits>
              {/* {index < 2 &&
                <Colon>&nbsp;&nbsp;:</Colon>
              } */}
            </TimeUnit>
          ))}
        </CountdownGrid>
      </FauxBillboard>
    </CountdownContainer>
  )
}

export default Countdown
