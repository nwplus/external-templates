import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '../utilities/firebase'

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(100vw * (16 / 1280));

  color: #51483e;
`

const RegistrationText = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (20 / 1280));
`

const RegistrationDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(100vw * (8 / 1280));
`

const RegistrationDate = styled.p`
  font-weight: 600;
  font-size: calc(100vw * (20 / 1280));
`

const TimeNumber = styled.span`
  font-weight: 700;
  font-size: calc(100vw * (36 / 1280));
`

function RegistrationCountdown() {
  const [timeLeft, setTimeLeft] = useState({})
  const [loading, setLoading] = useState(true)

  function parseDate(dateString) {
    const [datePart, timePart] = dateString.split(' at ')
    const [month, day, year] = datePart.replace(/(\d+)(st|nd|rd|th)/, '$1').split(' ')
    const [time, period] = timePart.split(' ')
    const [hours, minutes] = time.split(':')

    const date = new Date(`${month} ${day}, ${year} ${hours}:${minutes} ${period} PST`)
    return date
  }

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date()
    let remainingTime = {}

    if (difference > 0) {
      remainingTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        targetDate,
      }
    }

    return remainingTime
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
      } catch (error) {
        console.error('Error fetching application deadline:', error)
      }
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
      <RegistrationText>
        Registrations <br /> close in...
      </RegistrationText>
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
