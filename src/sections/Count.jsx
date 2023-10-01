import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import { SectionContainer } from '@lib/Containers'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: #150C27;
  position: relative;
  width: 100%;
  aspect-ratio: 1440/1000;

  z-index: 10;
  overflow: hidden;

  ${(p) => p.theme.mediaQueries.mobile} {
    background-repeat: no-repeat;
    aspect-ratio: 428/724;
  }
  
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/countdown/background.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/countdown/background.png');
    background-repeat: no-repeat;
    background-size: 100vw;
  }
`

const Galaxy = styled(SectionContainer)`
  background: url('assets/background/countdown/galaxy.svg');
  background-size: 100vw;
  transform: scale(1.375);
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 12.5vw;
  left: 0px;
  width: 100%;
  height: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    background-size: 120vw;
    left: 10vw;
    top: 60vw;
  }
`

const Bear = styled(SectionContainer)`
  background: url('assets/background/countdown/bear.svg');
  background-size: 10vw;
  background-repeat: no-repeat;
  background-position: center right;

  position: absolute;
  top: 20vw;
  left: -12.5vw;
  width: 100%;
  height: 100%;
  opacity: 0.75;
`

const Deer = styled(SectionContainer)`
  background: url('assets/background/countdown/deer.svg');
  background-size: 15vw;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 10vw;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.75;
`

const Nugget = styled(SectionContainer)`
  background: url('assets/background/countdown/nugget.svg');
  background-size: 25vw;
  background-repeat: no-repeat;
  background-position: center left;

  position: absolute;
  top: 5vw;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.75;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 0em 50vw 47.5vw 7vw;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 0;
  }
`

const StyledTitle = styled(Header2)`
  text-align: left;
  color: #F0EEF2;
  font-weight: 900;
  font-size: 3.5vw;
  letter-spacing: 0.7px;
  line-height: 56px;
  max-width: 30vw;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
    padding-bottom: 3rem;
    line-height: 36px;
    max-width: 50vw;
    text-align: center;
    position: absolute;
    top: 25px;
    left: 25%;
  }
`

const DaysTextContainer = styled.div`
  position: absolute;
  max-width: 100px;
  word-spacing: 100px;
  top: 4%;
  left: 43%;
  transform: rotate(-10.92deg);
 
  ${(p) => p.theme.mediaQueries.mobile} {
    transform: rotate(15.53deg);
    top: 19%;
    left: 7.5%;
  }
`

const HoursTextContainer = styled.div`
  position: absolute;
  max-width: 150px;
  word-spacing: 150px;
  top: 37.5%;
  left: 53.5%;
  transform: rotate(17.73deg);

  ${(p) => p.theme.mediaQueries.mobile} {
    transform: rotate(21.61deg);
    top: 57.5%;
    left: 30%;
  }
`

const MinutesTextContainer = styled.div`
  position: absolute;
  max-width: 200px;
  word-spacing: 200px;
  top: 20%;
  left: 83.5%;
  transform: rotate(-23.75deg);

  ${(p) => p.theme.mediaQueries.mobile} {
    top: 30%;
    left: 52.5%;
  }
`

const ShadowText = styled.div`
  text-align: center;
  font-size: 3.2vw;
  color: #FFFFFF;
  text-shadow: 0px 1px 17px 0px rgba(255, 255, 255, 0.5);
  font-weight: 800;

  position: relative;
  letter-spacing: 1px;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2rem;
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
  const countDownDate = new Date('Oct 6, 2023 00:00:00').getTime()
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

  // const { ref: ref1 } = useParallax({
  //   speed: -20
  // })

  // const { ref: ref2 } = useParallax({
  //   speed: -20
  // })

  const bearParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['-400vw', '0vw'],
    translateY: ['-35vw', '0vw'],
    scale: [6, 1],
    opacity: [1, 0.75]
  })

  const deerParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['-400vw', '15vw'],
    translateY: ['-35vw', '0vw'],
    scale: [6, 1]
  })

  const nuggetParallax = useParallax({
    easing: 'easeOutQuad',
    translateX: ['-400vw', '15vw'],
    translateY: ['-35vw', '0vw'],
    scale: [6, 1]
  })

  return (
    <InfoContainer>
      <BgScroll />
      <TextContainer>
        <StyledTitle>Registration opens in:</StyledTitle>
        <DaysTextContainer>
          <ShadowText text={`${count.days[0]}${count.days[1]} Days`}>
            {`${count.days[0]}${count.days[1]} Days`}
          </ShadowText>
        </DaysTextContainer>
        <HoursTextContainer>
          <ShadowText text={`${count.hours[0]}${count.hours[1]} Hours`}>
            {`${count.hours[0]}${count.hours[1]} Hours`}
          </ShadowText>
        </HoursTextContainer>
        <MinutesTextContainer>
          <ShadowText text={`${count.minutes[0]}${count.minutes[1]} Minutes`}>
            {`${count.minutes[0]}${count.minutes[1]} Minutes`}
          </ShadowText>
        </MinutesTextContainer>
      </TextContainer>
      <Galaxy />
      <Bear ref={bearParallax.ref}/>
      <Deer ref={deerParallax.ref}/>
      <Nugget ref={nuggetParallax.ref}/>
    </InfoContainer>
  )
}

export default Count
