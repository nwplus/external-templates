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
    margin-left: 0vw;
    margin-top: -45vw;
    align-items: center;
    text-align: center;
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
    justify-content: center;
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
    font-size: 3.4vw;
    padding-top: 0;
    line-height: 1.7rem;
  }
`

const HCSub = styled.div`
  font-size: 1.75vw;
  color: #45171a;
  font-weight: 700;
  padding-top: 1rem;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3.1vw;
    font-weight: 400;
    font: 'HK Grotesk';
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

// const FillText = styled.div`
//   font-size: 1.75vw;
//   display: none;
//   color: #45171a;
//   font-weight: 700;
//   padding-top: 1rem;
//   ${p => p.theme.mediaQueries.mobile} {
//     font-size: 3.1vw;
//     display: block;
//     font-weight: 400;
//     font: 'HK Grotesk';
//     padding-top: 1.5rem;
//     padding-bottom: 0.5rem;
//     width: 68vw;
//   }
// `

const HackCampLogo = styled.div`
  background: url('assets/background/hero/logo.svg');
  background-size: 6vw;
  background-repeat: no-repeat;
  height: 5vw;
  width: 100%;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    /* position: relative; */
    width: 19vw;
    height: 16vw;
    background-size: 19vw;
    align-self: center;
    /* margin: 0 auto; */
    /* align-items: center; */
    /* left: 5vw; */
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
    background-size: 93vw;
    height: 16.5vw;
    width: 93vw;
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

const RegisterNowButton = styled.a`
  background: url('assets/background/hero/register-now-button.svg'),
    url('assets/background/hero/register-now-button-active.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 17vw;
  height: 70px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  padding: 0px;
  text-align: center;
  align-content: center;
  text-decoration: none;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
    width: 60vw;
    height: 125px;
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

const BecomeMentorButton = styled.a`
  background: url('assets/background/hero/mentor-button.svg'), url('assets/background/hero/mentor-button-active.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 14vw;
  height: 70px;
  border: none;
  cursor: pointer;
  text-align: center;
  align-content: center;
  text-decoration: none;
  line-height: 70px;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.72);
    width: 60vw;
    height: 125px;
    top: -2.3vw;
    position: relative;

  }

  &:hover {
    background: url('assets/background/hero/mentor-button-active.svg'), transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:active {
    background: url('assets/background/hero/mentor-button-active.svg'), transparent;
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
    font-size: 4.6vw;
    line-height: 6vw;
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
    top: 214.8vw;
    /* left: 60%; */
    left: 79vw;
  }
`

// const CountdownNumber = styled.div`
//   font-size: 3.8vw;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   top: 3vw;
//   color: #45171a;
//   font-weight: 600;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   text-align: center;

//   span {
//     display: inline-block;
//   }

//   span:nth-child(1) {
//     /* transform: translateY(0.4vw) rotate(-2deg); */
//   }

//   span:nth-child(2) {
//     /* transform: translateY(0.2vw) rotate(-4deg); */
//   }

//   span:nth-child(3) {
//     /* transform: translateY(0vw) rotate(-2deg); */
//   }

//   span:nth-child(4) {
//     /* transform: rotate(0deg); */
//   }

//   span:nth-child(5) {
//     /* transform: rotate(0deg); */
//   }

//   span:nth-child(6) {
//     /* transform: rotate(2deg); */
//   }

//   span:nth-child(7) {
//     /* transform: translateY(0.2vw) rotate(3deg); */
//   }

//   span:nth-child(8) {
//     /* transform: translateY(0.4vw) rotate(4deg); */
//   }

//   span:nth-child(9) {
//     /* transform: translateY(0.4vw) rotate(5deg); */
//   }
// `

const CountdownNumber = styled.div`
  font-size: 3.8vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60vw;
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

  .comma {
    margin-right: 0.7vw;
  }

  span:nth-child(1) {
    /* Add custom styles for the first character */
    transform: translateY(0.7vw) rotate(-11deg);
  }

  span:nth-child(2) {
    /* Add custom styles for the second character */
    transform: translateY(0.4vw) rotate(-9deg);
  }

  span:nth-child(3) {
    /* Add custom styles for the third character */
    transform: translateY(0.3vw) rotate(-9deg);
  }

  span:nth-child(4) {
    /* Add custom styles for the fourth character */
    transform: translateY(-0.1vw) rotate(-7deg);
  }

  span:nth-child(5) {
    /* Add custom styles for the fifth character */
    transform: translateY(-0.4vw) rotate(-7deg);
  }

  span:nth-child(6) {
    /* Add custom styles for the sixth character */
    transform: translateY(-0.7vw) rotate(-6deg);
  }

  span:nth-child(7) {
    /* Add custom styles for the seventh character */
    transform: translateY(-0.9vw) rotate(-2deg);
  }

  span:nth-child(8) {
    /* Add custom styles for the eighth character */
    transform: translateY(-0.8vw) rotate(-2deg);
  }

  span:nth-child(9) {
    /* Add custom styles for the ninth character */
    transform: translateY(-0.95vw) rotate(-2deg);
  }

  span:nth-child(10) {
    /* Add custom styles for the tenth character */
    transform: translateY(-1vw) rotate(-2deg);
  }

  span:nth-child(11) {
    /* Add custom styles for the eleventh character */
    transform: translateY(-1.1vw) rotate(-1deg);
  }

  span:nth-child(12) {
    /* Add custom styles for the twelfth character */
    transform: translateY(-1.1vw) rotate(0deg);
  }

  span:nth-child(13) {
    /* Add custom styles for the thirteenth character */
    transform: translateY(-1.1vw) rotate(0deg);
  }

  span:nth-child(14) {
    /* Add custom styles for the fourteenth character */
    transform: translateY(-1.1vw) rotate(1deg);
  }

  span:nth-child(15) {
    /* Add custom styles for the fifteenth character */
    transform: translateY(-0.9vw) rotate(3deg);
  }

  span:nth-child(16) {
    /* Add custom styles for the sixteenth character */
    transform: translateY(-0.8vw) rotate(5deg);
  }

  span:nth-child(17) {
    /* Add custom styles for the seventeenth character */
    transform: translateY(-0.8vw) rotate(6deg);
  }

  span:nth-child(18) {
    /* Add custom styles for the eighteenth character */
    transform: translateY(-0.6vw) rotate(5deg);
  }

  span:nth-child(19) {
    /* Add custom styles for the nineteenth character */
    transform: translateY(-0.4vw) rotate(5deg);
  }

  span:nth-child(20) {
    /* Add custom styles for the twentieth character */
    transform: translateY(-0.6vw) rotate(6deg);
  }

  span:nth-child(21) {
    /* Add custom styles for the twenty-first character */
    transform: translateY(-0.1vw) rotate(6deg);
  }

  span:nth-child(22) {
    /* Add custom styles for the twenty-first character */
    transform: translateY(0.2vw) rotate(7deg);
  }

  span:nth-child(23) {
    /* Add custom styles for the twenty-first character */
    transform: translateY(0.4vw) rotate(7deg);
  }

  span:nth-child(24) {
    /* Add custom styles for the twenty-first character */
    transform: translateY(0.7vw) rotate(9deg);
  }

  span:nth-child(25) {
    /* Add custom styles for the twenty-first character */
    transform: translateY(0.8vw) rotate(9deg);
  }

  span:nth-child(26) {
    /* Add custom styles for the twenty-first character */
    transform: translateY(0.8vw) rotate(11deg);
  }

  ${p => p.theme.mediaQueries.mobile} {
    top: 221vw;
    font-size: 5vw;
  }
`

// signs
const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 72.5vw;
  top: 13.4vw;
  // for now
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

  // const formatTime = time => {
  //   return `${time.days} DAYS, ${time.hours} HOURS, ${time.minutes} MINS`
  // }
  // const formatTime = time => {
  //   const formattedString = `${String(time.days).padStart(2, '0')} DAYS, ${String(time.hours).padStart(2, '0')} HOURS, ${String(
  //     time.minutes
  //   ).padStart(2, '0')} MINS`

  //   // Map each character into a span similar to CurvedText
  //   return formattedString.split('').map((char, index) => (
  //     <span key={index}>{char}</span>
  //   ))
  // }
  const formatTime = time => {
    const formattedString = `${String(time.days)} DAYS, ${String(time.hours)} HOURS, ${String(time.minutes)} MINS`

    return formattedString.split('').map((char, index) => (
      <span key={index} className={char === ',' ? 'comma' : ''}>
        {char}
      </span>
    ))
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

  function scrollToSection (id) {
    const element = document.getElementById(id)

    if (!element) return

    document.getElementById('outer').style.overflow = 'unset'

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(() => {
      document.getElementById('outer').style.overflow = 'hidden'
    }, 2800)
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
            {/* <FillText>The website is still under construction, for the full experience please switch to desktop. :)</FillText> */}
            <RegisterNowButton>
              <ButtonText>Registrations Opening Soon!</ButtonText>
            </RegisterNowButton>
            <BecomeMentorButton href="https://docs.google.com/forms/d/e/1FAIpQLSfc-LD_TRR5T48Vcu5-4KEugVH1OgeWUX8m0461D2H6K3J7DA/viewform" target="_blank">
              <ButtonText>Become a Mentor</ButtonText>
            </BecomeMentorButton>
            <SignContainer>
              <a>
                <SignButton onClick={() => scrollToSection('about')} imageUrl="assets/background/hero/signs/sign1.svg">
                  <SignText fontSize="2.5vw" rotate={-2.74}>
                    ABOUT
                  </SignText>
                </SignButton>
              </a>
              <a>
                <SignButton onClick={() => scrollToSection('events')} imageUrl="assets/background/hero/signs/sign2.svg">
                  <SignText fontSize="2.5vw">Our Events</SignText>
                </SignButton>
              </a>
              <a>
                <SignButton onClick={() => scrollToSection('statistics')} imageUrl="assets/background/hero/signs/sign3.svg">
                  <SignText fontSize="2.5vw" rotate={3.26}>
                    STATS
                  </SignText>
                </SignButton>
              </a>
              <a>
                <SignButton onClick={() => scrollToSection('testimonials')} imageUrl="assets/background/hero/signs/sign4.svg">
                  <SignText translateX="1.2vw" fontSize="2vw" rotate={-2.96}>
                    TESTIMONIALS
                  </SignText>
                </SignButton>
              </a>
              <a>
                <SignButton onClick={() => scrollToSection('faq')} imageUrl="assets/background/hero/signs/sign5.svg">
                  <SignText fontSize="3vw" rotate={-2.74}>
                    FAQ
                  </SignText>
                </SignButton>
              </a>
              <a>
                <SignButton onClick={() => scrollToSection('sponsors')} imageUrl="assets/background/hero/signs/sign6.svg">
                  <SignText fontSize="2.3vw">SPONSORS</SignText>
                </SignButton>
              </a>
              <a>
                <SignButton onClick={() => scrollToSection('contact')} imageUrl="assets/background/hero/signs/sign7.svg">
                  <SignText fontSize="2.5vw" rotate={5.01}>
                    Contact Us
                  </SignText>
                </SignButton>
              </a>
            </SignContainer>
            {/* October 1 9am PST */}
            <CountdownText>
              <CurvedText text="REGISTRATION OPENS IN" />
              {/* <CountdownTimer targetDate={new Date(Date.UTC(2024, 9, 1, 16, 0, 0))} /> */}
            </CountdownText>
            <div>
              <CountdownTimer targetDate={new Date(Date.UTC(2024, 9, 1, 16, 0, 0))} />
            </div>
          </ButtonContainer>
        </MediaContainer>
      </GridContainer>
    </BgSectionContainer>
  )
}
