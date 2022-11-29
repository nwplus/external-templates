import { Header2, Header3 } from '@components/Typography'
import React, { useEffect, useState } from 'react'
import { useParallax } from 'react-scroll-parallax'
import styled from 'styled-components'

import KeychainImage from '../assets/images/Keychain.svg'

const CountdownContainer = styled.div`
  min-height: calc(calc(706 / 1440) * 100vw);
  position: relative;
  z-index: 1;
`

const FauxBillboard = styled.div`
  min-height: calc(calc(482 / 1139) * 75vw);
  display: flex;
  align-items: center;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  width: 75vw;
  text-shadow: 0 0 10px rgba(233,233,233,0.4);
`

const StyledHeader = styled(Header2)`
  font-weight: 600;
  font-size: 3.8rem;
  text-align: center;
  line-height: 120%;
  max-width: 40%;
`

const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 2;
`

const TimeUnit = styled.div`
  text-align: center;
`

const Digits = styled.h2`
  font-family: "HK Grotesk", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 5.5rem;
  letter-spacing: 0.2rem;
`

const BillboardText = styled(Header3)``

const Keychain = styled.img`
  position: absolute;
  top: 45%;
  left: -20%;
`


const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  if (days < 0 || hours < 0 || seconds < 0) {
    return [0, 0, 0, 0]
  }

  return [days, hours, minutes, seconds]
}

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 5000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countDown)
}

const Countdown = () => {

  const parallax = useParallax({ speed: 15 })

  const countDownDate = new Date('Dec 19, 2022 23:59:59').getTime()
  const countdown = useCountdown(countDownDate)

  return (
    <CountdownContainer>
      <Keychain ref={parallax.ref} src={KeychainImage} alt="Keychain" />
      <FauxBillboard>
        <StyledHeader>
          Registration closes in:
        </StyledHeader>
        <CountdownGrid>
          {['Days', 'Hours', 'Minutes'].map((item, index) => (
            <TimeUnit key={item}>
              <Digits>
                {countdown[index]}
              </Digits>
              <BillboardText>
                {item}
              </BillboardText>
            </TimeUnit>
          ))}
        </CountdownGrid>
      </FauxBillboard>
    </CountdownContainer>
  )
}

export default Countdown