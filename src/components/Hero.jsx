import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LAPTOP, TABLET } from '@constants/measurements'
import Button from './Button'

const HeroContainer = styled.div`
  position: relative;
  min-height: calc(calc(800 / 1440) * 100vw);
  margin-top: -15rem;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(1200 / 882) * 100vw);
  }
`

const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  top: calc(calc(350 / 1440) * 100vw);

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const IntroContainer = styled.div`
  margin-left: 10vw;
  text-align: left;

  ${p => p.theme.mediaQueries.mobile} {
    margin: 0;
    padding: 0 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Opening = styled.p`
  position: relative;
  top: 25px;
  font-family: HK Grotesk;
  color: #DCB551;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.44999998807907104px;
  @media (max-width: ${LAPTOP}) {
    font-size: 20px;
  }
  @media (max-width: ${TABLET}) {
    top: 20px;
    font-size: 18px;
  }
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Title = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 100px;
  font-weight: 900;
  line-height: 100px;
  letter-spacing: 0em;
  color: #F3F5F4;
  @media (max-width: ${LAPTOP}) {
    font-size: 80px;
    line-height: 80px;
  }
  @media (max-width: ${TABLET}) {
    font-size: 75px;
    line-height: 65px;
  }
`

const Subtitle = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 32px;
  font-weight: 600;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
  line-height: 32px;
  letter-spacing: -0.25999999046325684px;
  color: #F3F5F4;
  @media (max-width: ${LAPTOP}) {
    font-size: 23px;
  }
  @media (max-width: ${TABLET}) {
    font-size: 23px;
  }
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.1rem;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  font-family: HK Grotesk;
  font-size: 20px;
  font-weight: 500;
  color: #F3F5F4;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }
`

const HideMobile = styled.div`
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Description = styled.p`
  position: relative;
  line-height: 28px;
  letter-spacing: 0em;
`

const ActionsContainer = styled.div`
  margin-left: 10vw;
  position: relative;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: ${TABLET}) {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-top: 20px;
    width: 50%;
    align-items: center;
  }

  ${p => p.theme.mediaQueries.mobile} {
    padding-top: 0.5rem;
    margin-top: 0;
    font-size: 10px;
    margin-bottom: 0;
    gap: 1rem;
  }
`

const ZeroHeightContainer = styled.div`
  height: 0;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    gap: 0rem;
  }
`

const VolunteerLink = styled.a`
  position: relative;
  color: #F3F5F4;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: -0.2px;
  transition: color 0.13s linear;

  &:after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #F3F5F4;
    transition: background 0.13s linear;
  }

  &:hover {
    color: #DCB551;

    &:after {
      background-color: #DCB551;
    }
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <OuterContainer>
        <IntroContainer>
          <Opening>Welcome to</Opening>
          <TitleContainer>
            <Title>nwHacks</Title>
          </TitleContainer>
          <Subtitle>Western Canada’s Largest Hackathon</Subtitle>
          <DescriptionContainer>
            <Description>January 20 - 21 2024</Description>
            <HideMobile>&nbsp;|&nbsp;</HideMobile>
            <Description>In-Person Event @ UBC</Description>
          </DescriptionContainer>
        </IntroContainer>
        <ActionsContainer>
          <ButtonsContainer>
            <Button variant="solid" target="_blank" rel="noreferrer" href="https://portal.nwplus.io">
              Apply Now!
            </Button>
            <Button variant="outlined" target="_blank" rel="noreferrer" href="https://forms.gle/ianRSs3wd1SYjSDR8">
              Become a Mentor!
            </Button>
          </ButtonsContainer>
          <VolunteerLink href="https://forms.gle/N6VYuPugFRfNCjFUA" target="_blank" rel="noreferrer">
            Apply to be a volunteer!
          </VolunteerLink>
        </ActionsContainer>
      </OuterContainer>
    </HeroContainer>
  )
}

export default Hero
