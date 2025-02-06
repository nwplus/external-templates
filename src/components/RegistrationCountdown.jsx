import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fireDb from '../utilities/firebase'

const RegistrationContainer = styled.div`
  position: absolute;
  z-index: 2;
  font-size: calc(100vw * (60 / 1920));
  font-family: HappyTime;
  bottom: calc(100vw * (-23 / 1920));
  left: calc(100vw * (-35 / 1920));
  color: #4f2f22;
  transform: rotate(2.5deg);

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (25 / 393));
    color: #4f2f22;
    bottom: calc(100vw * (2 / 393));
    left: calc(100vw * (10 / 393));
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
        days: '00',
        hours: '00',
        minutes: '00',
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
      {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}
    </RegistrationContainer>
  )
}

export default RegistrationCountdown
