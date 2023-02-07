import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'
import Countdown from './Countdown'
import Button from './Button'
import { Header1, Header4 } from './Typography'

const HeroContainer = styled.div`
  position: relative;
  top: 0;
  
  // Height calculation ratio should be the aspect ratio of the background image
  min-height: calc(calc(1598 / 1440) * 100vw);

  ${p => p.theme.mediaQueries.mobile} {
    // Height calculation ratio should be the aspect ratio of the background image
    min-height: calc(calc(1200 / 882) * 100vw);
  }
`

const CloudsContainer = styled.div`
  min-height: calc(calc(826 / 1440) * 100vw);
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: -5rem; // to off-set the initial parallax position 
`

const HouseContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const HeroContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding-left: 40px;
  width: 75vw;
  min-width: 900px;
  max-width: 1400px;  
  margin: 0 auto;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`

const LogoContainer = styled.div`
  width: 120px;
  height: 100px;
  position: relative;
  margin-bottom: 1.5rem;
`

const CTA = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0;
`

const StyledA = styled.a`
  font-weight: 700;
  color: #1A61A0;
  font-size: 1.3rem;
  text-decoration: none;
  border-style: none none solid none;
  border-width: 2px;
  border-color: #1A61A0;
  transition: all 0.13s ease;

  :active {
    transform: scale(0.98);
  }
`

const CountdownContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 13.5rem;
  padding-left: 18rem;
`

const Hero = () => {
  const parallax = useParallax({
    speed: -20,
  });

  return (
    <HeroContainer>
      <CloudsContainer ref={parallax.ref}>
        <Image unoptimized alt="mad aesthetic pretty pink clouds" layout="fill" objectFit="cover" src='/assets/hero/hero_background.svg' />
      </CloudsContainer>
      <HouseContainer>
        <Image unoptimized alt="pretty brick house meow" layout="fill" objectFit="cover" src='/assets/hero/countdown_background.svg' />
      </HouseContainer>

      <HeroContentContainer>
        <LogoContainer>
          <Image unoptimized layout="fill" objectFit="contain" src="/assets/logo.png" alt="cmd-f logo" />
        </LogoContainer>
        <Header1 color="#1A61A0">
          {`Western Canada's largest hackathon celebrating underrepresented genders in tech`}
        </Header1>
        <Header4 color="#1A61A0">
          March 11-12, 2023 | Robert H. Lee Alumni Centre @ The University of British Columbia (UBC)
        </Header4>
        <CTA>
          <Button variant="solid">
            Apply Now!
          </Button>
          <Button variant="outlined">
            Be a Mentor!
          </Button>
        </CTA>
        <StyledA href="#" target="_blank" rel="noreferrer noopener">
          Be a Volunteer!
        </StyledA>
      </HeroContentContainer>

      <CountdownContainer>
        
      <Countdown />
      </CountdownContainer>
    </HeroContainer>
  )
}

export default Hero
