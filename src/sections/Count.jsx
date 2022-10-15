import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: linear-gradient(to bottom, #FEFFCA 0%, #83F6F7 66%, #83F6F7 100%);
  position: relative;
  width: 100%;
  aspect-ratio: 1440/1375;

  z-index: 10;
  overflow-y: hidden;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: linear-gradient(to bottom, #FEFFCA 0%, #83F6F7 100%);
    background-repeat: no-repeat;
    aspect-ratio: 428/860;
  }
  
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/countdown/midground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/countdown/background.svg');
    background-repeat: no-repeat;
  }
`
const MgScroll = styled(SectionContainer)`
  background: url('assets/background/countdown/foreground_tall.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/countdown/foreground_tall.svg');
    background-repeat: no-repeat;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0em 1em;
    padding: 5em 0em 0em;
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #361C1C;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 0px;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
    padding-bottom: 3rem;
  }
`

const HCSub = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  color: #361C1C;
  padding-top: 1rem;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
`

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0 10rem 0;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
    ${p => p.isLastRow && 'margin-bottom: -4em'};
  }
`

const CountdownGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 900;
  color: #482C16;
`
const Digits = styled.div`
  display: flex;
`
const Digit = styled.div`
  background: url('assets/scroll.svg');
  background-repeat: no-repeat;
  background-position: center top;

  width: 100%;
  aspect-ratio: 152 / 172;
  height: 172px;
  width: 152px;

  transform: scale(1);

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`

const ShadowText = styled.div`
  font-size: 5rem;
  color: #532A2A;
  font-weight: 900;

  position: relative;
  letter-spacing: 1px;

  :before {
    content: '${p => p.text}';
    color: rgba(255,255,255,.05);
    position: absolute;
    top: 1px;
    left: 1px;
  }

  :after {
    content: '${p => p.text}';
    color: rgba(255,255,255,.05);
    position: absolute;
    top: 2px;
    left: 2px;
  }
  
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 3rem;
  }
`

const MobileCountdown = styled.div`
  width: 100%;
  aspect-ratio: 347 / 91;
  background: url('assets/mobile/board.svg');
  background-repeat: no-repeat;
  background-position: center top;

  align-items: center;
  justify-content: center;

  display: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: flex;
  }
`

// blog.greenroots.info
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

export { useCountdown }

const Count = () => {
  const countDownDate = new Date('Oct 15, 2022 00:00:00').getTime()
  const [days, hours, minutes] = useCountdown(countDownDate)

  const twoify = (num) => {
    const str = num.toString()
    if (str.length === 1) {
      return `0${str}`
    }

    return str
  }

  const count = {
    days: twoify(days),
    hours: twoify(hours),
    minutes: twoify(minutes)
  }

  const { ref: ref1 } = useParallax({
    speed: -20
  })

  const { ref: ref2 } = useParallax({
    speed: -10
  })

  return (
    <InfoContainer>
      <BgScroll ref={ref1} />
      <MgScroll ref={ref2} />

      <TextContainer>
        <StyledTitle>Registration Closes</StyledTitle>
        <MobileCountdown>
          <ShadowText text={`${count.days[0]}${count.days[1]} : ${count.hours[0]}${count.hours[1]} : ${count.minutes[0]}${count.minutes[1]}`}>
            {`${count.days[0]}${count.days[1]} : ${count.hours[0]}${count.hours[1]} : ${count.minutes[0]}${count.minutes[1]}`}
          </ShadowText>
        </MobileCountdown>
        <CountdownContainer>
          {[
            {
              label: 'Days',
              key: 'days'
            },
            {
              label: 'Hours',
              key: 'hours'
            },
            {
              label: 'Mins',
              key: 'minutes'
            }
          ].map(item => (
            <CountdownGroup key={item.label}>
              <Digits>
                {[0, 1].map(index => (
                  <Digit>
                    <ShadowText text={count[item.key][index]}>
                      {count[item.key][index]}
                    </ShadowText>
                  </Digit>
                ))}
              </Digits>
              {item.label}
            </CountdownGroup>
          ))}
        </CountdownContainer>
      </TextContainer>
    </InfoContainer>
  )
}

export default Count
