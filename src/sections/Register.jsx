import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import styled, { keyframes } from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import { Header2 } from '@components/Typography'
import Button from '@components/Button'

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
    aspect-ratio: 412/843;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/hero/background2.png');
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

const portalBob = keyframes`
  0%, 100% {
    transform: translateY(0, -10px); 
  }

  50% {
    transform: translateY(-5px);
  }
`

const Portal = styled(SectionContainer)`
  animation: ${portalBob} 2s linear infinite;
  /* background: url('assets/background/hero/portal.svg'); */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center right;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 25vw;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    background-position: center center;
    background-size: 150vw;
    left: 0;
    top: 175px;
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
    justify-content: center;
    transform: translateY(-8rem);
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
  }
`

const HackCampHeader = styled(Header2)`
  font-size: 6vw;
  letter-spacing: -0.5px;
  font-weight: 900;
  color: #f0eff2 !important;
  padding-top: 3rem;
  padding-bottom: 0.5vw;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 3.5rem;
    padding-top: 1.5rem;
    padding-bottom: 0;
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
  /* background-size: 100vw; */
  background-repeat: no-repeat;
  height: 5vw;
  width: 100%;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
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
  /* left: 10vw; */
  z-index: 1;

  background-position: center top;

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }
`

const RegisterNowButton = styled.button`
  background: url('assets/background/hero/register-now-button.svg');
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
    background: url('assets/background/hero/register-now-button-active.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:active {
    background: url('assets/background/hero/register-now-button-active.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const BecomeMentorButton = styled.button`
  background: url('assets/background/hero/mentor-button.svg');
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
    background: url('assets/background/hero/mentor-button-active.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:active {
    background: url('assets/background/hero/mentor-button-active.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const ButtonText = styled.div`
  font-size: 1.3vw;
  color: white;
  font-weight: 500;
  /* padding-top: 1rem; */
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.8rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

export default function Register() {
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

  return (
    <BgSectionContainer>
      <BgScroll />
      <Tent />
      <GridContainer>
        <MediaContainer>
          <HackCampLogo />
          <HackCampTitle />
          {/* <HackCampHeader>HackCamp</HackCampHeader> */}
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
            {/* <Button
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfs5nQk58vOudnXEra2Tb76bn6poFHrNpe-TZ7cvyyxmCFzZg/viewform?usp=sf_link"
              width="205px"
              height="50px"
              borderRadius="6px"
              textColor="white"
              backgroundColor="#00DBCE"
              isHover
            >
              Apply Now
            </Button> */}
            {/* <Button
              isOutline
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:sponsorship@nwplus.io?subject=Sponsorship"
              width="205px"
              height="50px"
              borderRadius="6px"
              borderColor="#00DBCE"
              textColor="white"
              backgroundColor="transparent"
              isHover
            >
              Sponsor Us
            </Button> */}
          </ButtonContainer>
        </MediaContainer>
      </GridContainer>
    </BgSectionContainer>
  )
}
