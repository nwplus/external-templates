import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '../utilities/firebase'

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(100vw * (16 / 1280));

  color: #51483e;

  ${p => p.theme.mediaQueries.mobile} {
    justify-content: center;
    align-items: center;
    color: #3a2f21;
    gap: calc(100vw * (18 / 487));
  }
`

const RegistrationText = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (20 / 1280));
  width: 60%;

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    text-align: center;
    font-size: calc(100vw * (24 / 487));
  }
`

const RegistrationDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (8 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: row;
    gap: calc(100vw * (10 / 487));
  }
`

const RegistrationDate = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (20 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
  }
`

const TimeNumber = styled.span`
  font-weight: 700;
  font-size: calc(100vw * (36 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (32 / 487));
  }
`

function RegistrationCountdown() {
  const [timeLeft, setTimeLeft] = useState({})
  const [loading, setLoading] = useState(true)

  function parseDate(dateString) {
    const [datePart, timePart] = dateString.split(' at ')
    const [month, day, year] = datePart
      .replace(/(\d+)(st|nd|rd|th)/, '$1')
      .replace(',', '')
      .split(' ')
    const [time, period] = timePart.split(' ')
    const [hours, minutes] = time.split(':')

    const date = new Date(`${month} ${day}, ${year} ${hours}:${minutes} ${period} PST`)
    return date
  }

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date()

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        targetDate,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      targetDate,
    }
  }

  useEffect(() => {
    async function fetchDeadline() {
      try {
        const deadlineString = await fireDb.getApplicationDate()
        if (deadlineString) {
          const deadline = parseDate(deadlineString)
          setTimeLeft(calculateTimeLeft(deadline))
          setLoading(false)
        }
      } catch (error) {}
    }

    fetchDeadline()

    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => calculateTimeLeft(prevTimeLeft.targetDate))
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return null
  }

  return (
    <RegistrationContainer>
      <RegistrationText>Registrations close in...</RegistrationText>
      <RegistrationDateContainer>
        <RegistrationDate>
          <TimeNumber>{timeLeft.days}</TimeNumber> days
        </RegistrationDate>
        <RegistrationDate>
          <TimeNumber>{timeLeft.hours}</TimeNumber> hours
        </RegistrationDate>
        <RegistrationDate>
          <TimeNumber>{timeLeft.minutes}</TimeNumber> minutes
        </RegistrationDate>
      </RegistrationDateContainer>
    </RegistrationContainer>
  )
}

export default RegistrationCountdown
