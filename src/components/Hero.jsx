import React from 'react'
import styled from 'styled-components'
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
    min-height: calc(calc(1597 / 428) * 100vw);
    background-image: url("/assets/hero/mobile_hero_background.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const CloudsContainer = styled.div`
  min-height: calc(calc(826 / 1440) * 100vw);
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: -5rem; // to off-set the initial parallax position 

  ${p => p.theme.mediaQueries.mobile} {
    // Height calculation ratio should be the aspect ratio of the background image
    display: none;
  }
`

const HouseContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  ${p => p.theme.mediaQueries.mobile} {
    // Height calculation ratio should be the aspect ratio of the background image
    min-height: calc(calc(1200 / 882) * 100vw);
    display: none;
  }
`

const HeroContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding-left: 40px;
  width: 80vw;
  min-width: 900px;
  max-width: 1400px;  
  margin: 0 auto;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  
  ${p => p.theme.mediaQueries.mobile} {
    max-width: 100vw;
    min-width: 0;
    width: 100%;
    padding: 7rem 2rem;
    text-align: center;
    align-items: center;
    transform: scale(0.95);
  }
`

const LogoContainer = styled.div`
  width: 120px;
  height: 100px;
  position: relative;
  margin-bottom: 1.5rem;

  ${p => p.theme.mediaQueries.mobile} {
    margin-bottom: 0.5rem;
  }
`

const CTA = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    transform: scale(0.95);
    gap: 0rem;
    padding: 0;
  }
`

const MoreCTA = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    transform: scale(0.95);
    gap: 0.5rem;
    padding: 0;
  }
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
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
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
  padding-bottom: 16%;
  padding-left: 21%;
  ${p => p.theme.mediaQueries.xl} {
    padding-left: 20%;
    padding-bottom: 16%;
  }
  ${p => p.theme.mediaQueries.desktopLarge} {
    padding-left: 17%;
    padding-bottom: 15%;
  }
  ${p => p.theme.mediaQueries.desktop} {
    padding-left: 16%;
    padding-bottom: 15%;
  }
  ${p => p.theme.mediaQueries.mobile} {
    padding-left: 18%;
    padding-bottom: 53%;
  }

`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  user-select: none;
`

const Logo = styled.img`
  width: 120px;
  height: 100px;
  
  ${p => p.theme.mediaQueries.mobile} {
    width: 100px;
    object-fit: contain;
  }
`

const Hero = () => {
  const parallax = useParallax({
    speed: -20,
  });

  return (
    <HeroContainer>
      <CloudsContainer ref={parallax.ref}>
        <StyledImage alt="mad aesthetic pretty pink clouds" src='/assets/hero/hero_background.svg' />
      </CloudsContainer>
      <HouseContainer>
        <StyledImage alt="pretty brick house meow" src='/assets/hero/countdown_background.svg' />
      </HouseContainer>

      <HeroContentContainer>
        <LogoContainer>
          <Logo layout="fill" src="/assets/logo.png" alt="cmd-f logo" />
        </LogoContainer>
        <Header1 color="#1A61A0">
          {`Western Canada's largest hackathon celebrating underrepresented genders in tech`}
        </Header1>
        <Header4 color="#1A61A0">
          March 2024 | The University of British Columbia (UBC)
        </Header4>
        <CTA>
          <Button variant="solid" href="https://forms.gle/3U6yjkrEBiQCv4q27">
            Apply Now!
          </Button>
          {/* <Button variant="outlined" href="https://docs.google.com/forms/d/1Imcoxry_GWRe6zM5GB7sgsffswmxGeXC6wwa1tZEsFU/">
            Be a Mentor!
          </Button> */}
        </CTA>
        <MoreCTA>
        {/* <StyledA href="https://docs.google.com/forms/d/e/1FAIpQLSc8jhBuq8zxC4cl_SXTrp9H3ZSyv0WD9VqlGLg7guwhJok6Jg/viewform" target="_blank" rel="noreferrer noopener">
          Be a Volunteer!
        </StyledA>
        <StyledA href="https://docs.google.com/forms/d/e/1FAIpQLSfIMBVHOp5xoRYPZZhAsVmAmDOJx9oEsYEX6L8ZiGyOt1kIEw/viewform" target="_blank" rel="noreferrer noopener">
          Apply for the media team!
        </StyledA> */}
        </MoreCTA>
      </HeroContentContainer>
      <CountdownContainer>
        <Countdown />
      </CountdownContainer>
    </HeroContainer>
  )
}

export default Hero
