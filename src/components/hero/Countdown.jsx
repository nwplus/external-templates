import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fireDb from '@utilities/firebase'
import { msToUnits, parseIsoDateString } from '@utilities/date'

const CountdownContainer = styled.div`
  position: relative;
  left: -4vw;
  height: calc(100vw * (200 / 1080));
  width: fit-content;
  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (150 / 393));
    left: calc(100vw * (-70 / 393));
    height: calc(100vw * (170 / 393));
  }
`

const ClockWrapper = styled.div`
  position: relative;
  height: 100%;
  width: fit-content;
  display: inline-block;
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
  z-index: 1;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    left: calc(calc(35 / 393) * 100vw);
    bottom: calc(calc(3.8 / 393) * 100vh);
    width: calc(calc(92 / 393) * 100vw);
  }
`

const ClockImg = styled.img`
  position: relative;
  height: 100%;
  display: block;
  z-index: 0;
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
  font-size: 2.4vw;
  display: inline-block;
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 6vw;
    letter-spacing: 0;
  }
`

const CountdownLabel = styled.div`
  position: absolute;
  top: calc(calc(30 / 1920) * 100vw);
  left: calc(calc(20 / 1920) * 100vw);
  display: flex;
  justify-content: center;
  z-index: 2;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(calc(2 / 393) * 100vw);
    left: calc(calc(-5 / 393) * 100vw);
  }
`

const CurvedLabelSvg = styled.svg`
  width: 18vw;
  height: 4.5vw;
  overflow: visible;

  text {
    font-family: 'Bree Serif';
    fill: #663a0b;
    font-weight: 500;
    font-size: 22px;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 50vw;
    height: 14vw;

    text {
      font-size: 18px;
    }
  }
`

const ScreenReaderOnly = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

// Cutoff for switching from days:hours to hours:minutes display
const HOURS_CUTOFF_FOR_DAYS_DISPLAY = 72
const TARGET_HACKATHON = 'cmd-f'

const useCountdown = targetDate => {
  const [countDown, setCountDown] = useState(null)

  useEffect(() => {
    if (!targetDate) {
      setCountDown(null)
      return undefined
    }

    const countDownDate = new Date(targetDate).getTime()
    setCountDown(countDownDate - Date.now())

    const interval = setInterval(() => {
      setCountDown(countDownDate - Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return msToUnits(countDown ?? 0)
}

const Countdown = () => {
  const [portalData, setPortalData] = useState(null)
  const [targetInfo, setTargetInfo] = useState(null)

  useEffect(() => {
    const unsubscribe = fireDb.subscribeToDocument('InternalWebsites', 'Portal', data => {
      setPortalData(data || null)
    })

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe()
      }
    }
  }, [])

  useEffect(() => {
    if (!portalData) {
      setTargetInfo(null)
      return
    }

    const candidates = [
      {
        key: 'applicationDeadline',
        label: 'Applications close in:',
        value: portalData.applicationDeadline?.[TARGET_HACKATHON],
      },
      {
        key: 'rsvpBy',
        label: 'RSVP ending in:',
        value: portalData.rsvpBy?.[TARGET_HACKATHON],
      },
      {
        key: 'waitlistSignupDeadline',
        label: 'Waitlist ends in:',
        value: portalData.waitlistSignupDeadline?.[TARGET_HACKATHON],
      },
    ]

    const now = Date.now()
    const sortedCandidates = candidates
      .map(item => ({
        ...item,
        hackathon: TARGET_HACKATHON,
        timestamp: parseIsoDateString(item.value),
      }))
      .filter(item => item.timestamp)
      .sort((a, b) => a.timestamp - b.timestamp)

    const nextTarget = sortedCandidates.find(item => item.timestamp > now)
    const target = nextTarget || sortedCandidates[sortedCandidates.length - 1]

    setTargetInfo(target || null)
  }, [portalData])

  const [days, hours, minutes, seconds] = useCountdown(targetInfo?.timestamp)
  const totalHours = days * 24 + hours
  const showDays = totalHours >= HOURS_CUTOFF_FOR_DAYS_DISPLAY
  const showSeconds = totalHours < 1

  return (
    <CountdownContainer>
      <ClockWrapper>
        <CountdownLabel>
          <ScreenReaderOnly>{targetInfo ? `${targetInfo.label}` : 'No upcoming deadline'}</ScreenReaderOnly>
          <CurvedLabelSvg viewBox="0 -15 260 70" role="img" aria-hidden="true">
            <defs>
              <path id="countdown-bowl-curve" d="M15,12 Q130,60 245,12" />
            </defs>
            <text textAnchor="middle">
              <textPath href="#countdown-bowl-curve" startOffset="50%">
                {targetInfo ? `${targetInfo.label}` : 'No upcoming deadline'}
              </textPath>
            </text>
          </CurvedLabelSvg>
        </CountdownLabel>

        <ClockImg src="/assets/images/watchDeer.svg" alt="A deer holding a stopwatch" />

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
            ) : showSeconds ? (
              <>
                <TimeUnit>
                  <Digits>{String(minutes).padStart(2, '0')}m</Digits>
                </TimeUnit>
                <TimeUnit>
                  <Digits>:</Digits>
                </TimeUnit>
                <TimeUnit>
                  <Digits>{String(seconds).padStart(2, '0')}s</Digits>
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
      </ClockWrapper>
    </CountdownContainer>
  )
}

export default Countdown
