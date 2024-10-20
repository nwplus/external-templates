import React from 'react'
import styled from 'styled-components'
import { LAPTOP, TABLET } from '@constants/measurements'
import Button from './Button'
// import { BANNER_OFFSET_PX } from '../constants/measurements'
import HeroGraphic from '@assets/images/Hero.svg'

const HeroContainer = styled.div`
  position: relative;
  top: 0rem;
  // top: ${BANNER_OFFSET_PX};
  background: url(${HeroGraphic});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  min-height: calc(calc(785 / 1280) * 100vw);
  min-width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(calc(1000 / 882) * 100vw);
    margin-top: 0rem;
  }
`

const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  top: calc(calc(75 / 1280) * 100vw);
  margin-top 5%;

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

  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
    top: 0px;
    text-align: center;
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

// const VolunteerLink = styled.a`
//   position: relative;
//   color: #F3F5F4;
//   text-decoration: none;
//   font-weight: 600;
//   font-size: 1.1rem;
//   letter-spacing: -0.2px;
//   transition: color 0.13s linear;

//   &:after {
//     content: ' ';
//     position: absolute;
//     bottom: -2px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #F3F5F4;
//     transition: background 0.13s linear;
//   }

//   &:hover {
//     color: #DCB551;

//     &:after {
//       background-color: #DCB551;
//     }
//   }
// `

const Hero = ({ HeroGraphic }) => (
  <HeroContainer>
    <OuterContainer>
      <IntroContainer>
        <Opening>Welcome to</Opening>
        <TitleContainer>
          <Title>nwHacks</Title>
        </TitleContainer>
        <Subtitle>Western Canada’s Largest Hackathon</Subtitle>
        <DescriptionContainer>
          <Description>Jan 18 - 19, 2025</Description>
          <HideMobile>&nbsp;|&nbsp;</HideMobile>
          <Description>In-person @ UBC Life Science Institute</Description>
        </DescriptionContainer>
      </IntroContainer>
      <ActionsContainer>
        <ButtonsContainer>
          <Button variant="solid" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScyrH57AXLwd90aiEg99pWT3TqOuLdKXhOCXtVBwPd_JfCNew/viewform">
            Notify me when applications open!
          </Button>
          <Button variant="outlined" rel="noreferrer" href="mailto:sponsorship@nwplus.io?subject=Sponsorship">
            Sponsor Us
          </Button>
        </ButtonsContainer>
        {/* <VolunteerLink href="https://docs.google.com/forms/d/e/1FAIpQLSchia8WiuZT7r1bLIBVLlLUohHAtwzklzszf5Nul2Zf240Vig/viewform" target="_blank" rel="noreferrer">
          Apply to be a volunteer!
        </VolunteerLink> */}
      </ActionsContainer>
    </OuterContainer>
  </HeroContainer>
)

export default Hero
