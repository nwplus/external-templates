import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LAPTOP, TABLET } from '@constants/measurements'
import { useParallax } from 'react-scroll-parallax'
import CarAndMap from '../assets/images/CarAndMapNoShadows.svg'
import CarScenery from '../assets/images/CarScenery.svg'
import RamBodyImage from '../assets/images/RamBody.svg'
import RamHeadImage from '../assets/images/RamHead.svg'
import Button from './Button'
import LivepeerImage from '../assets/images/Livepeer.svg'

const HeroContainer = styled.div`
  position: relative;
  min-height: calc(calc(802 / 1440) * 100vw);
`

const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 36vh;
`

const IntroContainer = styled.div`
  margin-left: 10vw;
  text-align: left;
  color: #433860;
`

const Opening = styled.p`
  position: relative;
  top: 25px;
  font-family: HK Grotesk;
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
`

const Title = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 100px;
  font-weight: 900;
  line-height: 100px;
  letter-spacing: 0em;
  background: linear-gradient(265.48deg, #959afb 80.67%, #9ad4de);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${LAPTOP}) {
    background: linear-gradient(265.48deg, #959afb 70.67%, #9ad4de);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 80px;
    line-height: 80px;
  }
  @media (max-width: ${TABLET}) {
    background: linear-gradient(265.48deg, #959afb 60.67%, #9ad4de);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  @media (max-width: ${LAPTOP}) {
    font-size: 23px;
  }
  @media (max-width: ${TABLET}) {
    font-size: 23px;
  }
`

const Description = styled.p`
  position: relative;
  font-family: HK Grotesk;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
`

const ButtonsContainer = styled.div`
  margin-left: 10vw;
  position: relative;
  display: flex;
  gap: 1.5rem;
  @media (max-width: ${TABLET}) {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 20px;
    width: 50%;
    align-items: center;
  }
`

const ZeroHeightContainer = styled.div`
  height: 0;
`

const CarAndMapImage = styled.img`
  min-height: calc(calc(775 / 1440) * 100vw);
  z-index: 1;
  user-select: none;
`

const CarSceneryImage = styled.img`
  margin-top: -10rem;
  min-height: calc(calc(530 / 1440) * 100vw);
  z-index: -1;
  user-select: none;
`

const RamContainer = styled.div`
  position: absolute;
  width: 100%;
  right: 12vw;
  top: calc(calc(200 / 1440) * 100vw);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const RamBody = styled.img`
  margin-top: -1.35rem;
  z-index: 2;
  user-select: none;
`

const bobAnimation = keyframes`
  0% {
    transform: rotateZ(0deg)
  }
  50% {
    transform: rotateZ(10deg)
  }
  100% {
    transform: rotateZ(0deg)
  }
`

const RamHead = styled.img`
  margin-right: -0.25rem;
  z-index: 1;
  user-select: none;

  animation-name: ${bobAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const LivepeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
`

const PoweredBy = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`

const Livepeer = styled.img`
  margin-left: -0.5rem;
`

const Hero = () => {
  const parallax = useParallax({ speed: -15 });
  const parallax2 = useParallax({ speed: 0 });
  const parallax3 = useParallax({ speed: 5 });

  return (
    <HeroContainer>
      <ZeroHeightContainer>
        <CarSceneryImage src={CarScenery} ref={parallax.ref} alt="The Beautiful nwHacks Scenery" />
      </ZeroHeightContainer>
      <ZeroHeightContainer>
        <CarAndMapImage src={CarAndMap} ref={parallax2.ref} alt="Dashboard and Map" />
      </ZeroHeightContainer>
      <RamContainer>
        <RamHead src={RamHeadImage} alt="A bobbing Ram head" />
        <RamBody src={RamBodyImage} alt="Ram body" />
      </RamContainer>
      <OuterContainer ref={parallax3.ref}>
        <IntroContainer>
          <Opening>Welcome to</Opening>
          <TitleContainer>
            <Title>nwHacks</Title>
            <LivepeerContainer>
              <PoweredBy>
                powered by
              </PoweredBy>
              <Livepeer src={LivepeerImage} alt="Title sponsor: Livepeer" />
            </LivepeerContainer>
          </TitleContainer>
          <Subtitle>Western Canada’s Largest Hackathon</Subtitle>
          <Description>January 14 - 15 2023 | In-Person Event @ UBC Life Sciences Institute </Description>
        </IntroContainer>
        <ButtonsContainer>
          <Button
            variant="solid"
            href="#">
            Apply Now!
          </Button>
          <Button
            variant="outlined"
            href="#">
            Be a Mentor!
          </Button>
        </ButtonsContainer>
      </OuterContainer>
    </HeroContainer>
  )
}

export default Hero
