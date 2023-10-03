import { useParallax } from 'react-scroll-parallax'
import styled, { keyframes } from 'styled-components'
import { SectionContainer } from '@lib/Containers'
import { Header2 } from '@components/Typography'
import Button from '@components/Button'

const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  aspect-ratio: 1440/1000;
  z-index: 0;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    background: #150C27;
    background-repeat: no-repeat;
    text-align: center;
    aspect-ratio: 412/843;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/hero/background.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
  width: 100%;
  
  position: absolute;
  top: 0;
  z-index: 1;
  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/hero/background.png');
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
  background: url('assets/background/hero/portal.svg');
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
  padding-top: 15vw;
  padding-right: 42.5vw;
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
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
  max-width: 906px;
  margin-top: 20px;
  
  ${p => p.theme.mediaQueries.mobile} {
    max-width: calc(100% - 3rem);
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
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
  color: #F0EFF2 !important;
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
  line-height: 2rem;
  font-weight: 600;
  color: #D5D7FD;
  padding-top: 1rem;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
    padding-top: 0;
    line-height: 1.5rem;
  }
`

const HCSub = styled.div`
  font-size: 1.75vw;
  color: #D5D7FD;
  font-weight: 700;
  padding-top: 1rem;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 0.8rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`

const Tent = styled.div`
  background: url('assets/tent.svg');
  width: 110px;
  height: 70px;
  
  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
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
      <Portal />
      <GridContainer>
        <MediaContainer>
          <Tent />
          <HackCampHeader>
            HackCamp
          </HackCampHeader>
          <BodyContainer>
            <HackCampSubheader>Canada’s largest beginner-friendly hackathon</HackCampSubheader>
            <HCSub>In-person event</HCSub>
            <HackCampSubheader>November 18-19, 2023</HackCampSubheader>
          </BodyContainer>
          <ButtonContainer>
            <Button
              target="_blank"
              rel="noopener noreferrer"
              // href="https://forms.gle/GQ3k8ZbtfULfVYxq6"
              width='205px'
              height='50px'
              fontSize='0.75rem'
              borderRadius='6px'
              textColor='#2C2543'
              backgroundColor="#00DBCE"
              isHover
              disabled
            >
              Applications Open October 6th!
            </Button>
            <Button
              isOutline
              target="_blank"
              rel="noopener noreferrer"
              // href="https://docs.google.com/forms/d/e/1FAIpQLScA2RtmikDSTaeLqi7vadLDq4Wom4N9N1wDVZu0rpZ5Xk2sow/viewform"
              width='205px'
              height='50px'
              fontSize='0.75rem'
              borderRadius='6px'
              borderColor="#00DBCE"
              textColor="#00DBCE"
              backgroundColor="transparent"
              isHover
              disabled
            >
              Applications Open October 6th!
            </Button>
          </ButtonContainer>
        </MediaContainer>
      </GridContainer>
    </BgSectionContainer>
  )
}
