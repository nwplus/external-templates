import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import { scale } from '@utilities/format'

const BgSectionContainer = styled(SectionContainer)`
  /* background: linear-gradient(to bottom, #81b4ff, #9ecbfd); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;

  position: relative;
  width: 100%;
  aspect-ratio: 1440/1000;
  z-index: 0;
  overflow: visible;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: #150c27; */
    background-repeat: no-repeat;
    text-align: center;
    align-items: center;
    aspect-ratio: 412/843;
  }
`
const BgScroll = styled(SectionContainer)`
  z-index: -3;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/hero/background.png'); */
    background-repeat: no-repeat;
    background-size: 100vw;
    z-index: -1;
  }
`

const MediaContainer = styled.div`
  /* padding-top: 3vw; */
  /* padding-right: 50vw; */
  margin-top: 4vw;
  margin-left: 7vw;
  width: fit-content;
  /* margin: 0 auto; */
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: left;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    transform: translateY(-30vw) translateX(30vw);
    padding: 0;
  }
`

const BodyContainer = styled.div`
  max-width: 1006px;
  /* margin-top: 20px; */

  ${p => p.theme.mediaQueries.mobile} {
    max-width: calc(100% - 3rem);
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1vw;
  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    margin-top: 5px;
  }
`

const GridContainer = styled.div`
  z-index: 99;
  position: absolute;
  height: 100%;
  grid-column: 3 / span 4;
  width: 100%;
  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    align-items: center;
    text-align: center;
  }
`

const HackCampSubheader = styled.div`
  font-size: 2vw;
  line-height: 1.5rem;
  font-weight: 600;
  color: #45171a;
  padding-top: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding-top: 0;
    line-height: 1.5rem;
  }
`

const HCSub = styled.div`
  font-size: 1.75vw;
  color: #45171a;
  font-weight: 700;
  padding-top: 1rem;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.8rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`
const HackCampLogo = styled.div`
  background: url('assets/background/hero/logo.svg');
  background-size: 6vw;
  background-repeat: no-repeat;
  height: 5vw;
  width: 100%;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    margin: 0 auto;
    align-items: center;
    left: 5vw;
  }
`

const HackCampTitle = styled.div`
  background: url('assets/background/hero/header.svg');
  background-size: 45vw;
  background-repeat: no-repeat;
  height: 7vw;
  width: 120%;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }
`

const Tent = styled.div`
  background: url('assets/background/hero/hero-props.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  height: 112%;
  width: 100%;

  position: absolute;
  top: 0;
  z-index: 1;

  background-position: center top;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TentBackground = styled.div`
  background: url('assets/background/hero/background2.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  height: 112%;
  width: 100%;

  position: absolute;
  top: 0;
  z-index: 0;

  background-position: center top;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RegisterNowButton = styled.button`
  background: url('assets/background/hero/register-now-button.svg'),
    url('assets/background/hero/register-now-button-active.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 14vw;
  height: 70px;
  border: none;
  cursor: pointer;
  margin-right: 20px;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }

  &:hover {
    background: url('assets/background/hero/register-now-button-active.svg'), transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:active {
    background: url('assets/background/hero/register-now-button-active.svg'), transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const BecomeMentorButton = styled.button`
  background: url('assets/background/hero/mentor-button.svg'), url('assets/background/hero/mentor-button-active.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 14vw;
  height: 70px;
  border: none;
  cursor: pointer;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }

  &:hover {
    background: url('assets/background/hero/mentor-button-active.svg'), transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:active {
    background: url('assets/background/hero/mentor-button-active.svg'), transparent;
    background: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const ButtonText = styled.div`
  font-size: 1.3vw;
  color: white;
  font-weight: 500;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.8rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

const CountdownText = styled.div`
  font-size: 4.3vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 55vw;
  color: #45171a;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  span {
    display: inline-block;
  }

  span:nth-child(1) {
    transform: translateY(0.8vw) rotate(-11deg);
  }

  span:nth-child(2) {
    transform: translateY(0.35vw) rotate(-10deg);
  }

  span:nth-child(3) {
    transform: translateY(-0.2vw) rotate(-7deg);
  }

  span:nth-child(4) {
    transform: translateY(-0.49vw) rotate(-7deg);
  }

  span:nth-child(5) {
    transform: translateY(-0.7vw) rotate(-6deg);
  }

  span:nth-child(6) {
    transform: translateY(-1vw) rotate(-6deg);
  }

  span:nth-child(7) {
    transform: translateY(-1.25vw) rotate(-4deg);
  }

  span:nth-child(8) {
    transform: translateY(-1.45vw) rotate(-3deg);
  }

  span:nth-child(9) {
    transform: translateY(-1.55vw) rotate(-2deg);
  }

  span:nth-child(10) {
    transform: translateY(-1.65vw) rotate(-1deg);
  }

  span:nth-child(11) {
    transform: translateY(-1.7vw) rotate(0deg);
  }

  span:nth-child(12) {
    transform: translateY(-1.7vw) rotate(2deg);
  }

  span:nth-child(13) {
    transform: rotate(4deg);
  }

  span:nth-child(14) {
    transform: translateY(-1.4vw) rotate(5deg);
  }

  span:nth-child(15) {
    transform: translateY(-1.15vw) rotate(6deg);
  }

  span:nth-child(16) {
    transform: translateY(-0.9vw) rotate(7deg);
  }

  span:nth-child(17) {
    transform: translateY(-0.55vw) rotate(8deg);
  }

  span:nth-child(18) {
    transform: translateY(-0.15vw) rotate(8deg);
  }

  span:nth-child(19) {
    transform: translateY(-0.1vw) rotate(8deg);
  }

  span:nth-child(20) {
    transform: translateY(0.3vw) rotate(10deg);
  }

  span:nth-child(21) {
    transform: translateY(0.6vw) rotate(11deg);
  }

  ${p => p.theme.mediaQueries.mobile} {
    scale: 1.6;
    top: 241.5vw;
    left: 50%;
  }
`

const CountdownNumber = styled.div`
  font-size: 5.2vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3vw;
  color: #45171a;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  span {
    display: inline-block;
  }

  span:nth-child(1) {
    transform: translateY(0.4vw) rotate(-5deg);
  }

  span:nth-child(2) {
    transform: translateY(0.2vw) rotate(-4deg);
  }

  span:nth-child(3) {
    transform: translateY(0vw) rotate(-2deg);
  }

  span:nth-child(4) {
    transform: rotate(0deg);
  }

  span:nth-child(5) {
    transform: rotate(0deg);
  }

  span:nth-child(6) {
    transform: rotate(2deg);
  }

  span:nth-child(7) {
    transform: translateY(0.2vw) rotate(3deg);
  }

  span:nth-child(8) {
    transform: translateY(0.4vw) rotate(4deg);
  }

  span:nth-child(9) {
    transform: translateY(0.4vw) rotate(5deg);
  }
`

// signs
const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 72.5vw;
  top: 13.4vw;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const SignButton = styled.button`
  background: url(${props => props.imageUrl});
  background-size: 19vw;
  background-repeat: no-repeat;
  background-position: center;
  width: 25vw;
  height: 6vw;
  border: none;
  cursor: pointer;
  transition: transform 0.5s ease;
  z-index: 500;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.1);
  }

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }
`

const SignText = styled.h3`
  font-family: Carnivalee Freakshow Regular;
  /* font-size: ${() => scale(768, 1440, 16, 18)}; */
  font-size: ${props => props.fontSize};
  color: #a01b2a;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;
  transform: translateX(${props => props.translateX || 0}) translateY(${props => props.translateY || 0})
    rotate(${props => props.rotate || 0}deg);
`

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = targetDate - now

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60)
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatTime = time => {
    const timeString = `${String(time.days).padStart(2, '0')}:${String(time.hours).padStart(2, '0')}:${String(
      time.minutes
    ).padStart(2, '0')}`
    return timeString.split('').map((char, index) => <span key={index}>{char}</span>)
  }

  return <CountdownNumber>{formatTime(timeLeft)}</CountdownNumber>
}

export default function Register () {
  // not using these hooks because they don't work on initial load -> better practice to pass an isMobile props from getServerSideProps after checking userAgent
  // const windowWidth = useWindowWidth();
  // const mobileBreakpoint = 768;

  // const { ref: ref1 } = useParallax({
  //   speed: -20
  // })

  // const { ref: ref2 } = useParallax({
  //   speed: -20
  // })

  // const { ref: ref3 } = useParallax({
  //   speed: -10
  // })

  // const parallaxOffset = useParallax({
  //   speed: -30
  // })

  const CurvedText = ({ text }) => {
    return text
      .split('')
      .map((char, index) => (char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>))
  }

  return (
    <BgSectionContainer>
      <BgScroll />
      <Tent />
      <TentBackground />
      <GridContainer>
        <MediaContainer>
          <HackCampLogo />
          <HackCampTitle />
          <BodyContainer>
            <HackCampSubheader>Canada’s largest beginner-only hackathon</HackCampSubheader>
            <HCSub>Nov 9-10, 2024 | In-person event</HCSub>
          </BodyContainer>
          <ButtonContainer>
            <RegisterNowButton>
              <ButtonText>Register Now</ButtonText>
            </RegisterNowButton>
            <BecomeMentorButton>
              <ButtonText>Become a Mentor</ButtonText>
            </BecomeMentorButton>
            <SignContainer>
              <a href="#about">
                <SignButton imageUrl="assets/background/hero/signs/sign1.svg">
                  <SignText fontSize="2.5vw" rotate={-2.74}>
                    ABOUT
                  </SignText>
                </SignButton>
              </a>
              <a href="#events">
                <SignButton href="#events" imageUrl="assets/background/hero/signs/sign2.svg">
                  <SignText fontSize="2.5vw">Our Events</SignText>
                </SignButton>
              </a>
              <a href="#statistics">
                <SignButton imageUrl="assets/background/hero/signs/sign3.svg">
                  <SignText fontSize="2.5vw" rotate={3.26}>
                    STATS
                  </SignText>
                </SignButton>
              </a>
              <a href="#testimonials">
                <SignButton imageUrl="assets/background/hero/signs/sign4.svg">
                  <SignText translateX="1.2vw" fontSize="2vw" rotate={-2.96}>
                    TESTIMONIALS
                  </SignText>
                </SignButton>
              </a>
              <a href="#faq">
                <SignButton imageUrl="assets/background/hero/signs/sign5.svg">
                  <SignText fontSize="3vw" rotate={-2.74}>
                    FAQ
                  </SignText>
                </SignButton>
              </a>
              <a href="#sponsors">
                <SignButton imageUrl="assets/background/hero/signs/sign6.svg">
                  <SignText fontSize="2.3vw">SPONSORS</SignText>
                </SignButton>
              </a>
              <a href="#contact">
                <SignButton imageUrl="assets/background/hero/signs/sign7.svg">
                  <SignText fontSize="2.5vw" rotate={5.01}>
                    Contact Us
                  </SignText>
                </SignButton>
              </a>
            </SignContainer>
            {/* October 1 9am PST */}
            <CountdownText>
              <CurvedText text="REGISTRATION OPENS IN" />
              <CountdownTimer targetDate={new Date(Date.UTC(2024, 9, 1, 16, 0, 0))} />
            </CountdownText>
          </ButtonContainer>
        </MediaContainer>
      </GridContainer>
    </BgSectionContainer>
  )
}
