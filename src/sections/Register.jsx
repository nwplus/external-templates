import { useParallax } from 'react-scroll-parallax';
import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import { Body, Header2, Header3 } from '@components/Typography';
import Button from '@components/Button';

const BgSectionContainer = styled(SectionContainer)`
  background: linear-gradient(to bottom, rgba(48,242,207,1) 0%, rgba(217,252,188,1) 33%, rgba(253,217,158,1) 100%);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;
  
  position: relative;
  width: 100%;
  aspect-ratio: 1440/1200;
  z-index: 10;

  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/background/mobileHero.png');
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center top;
    height: 217vw;
    padding: 3.625rem 0 0;
    text-align: center;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/hero/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  
  position: absolute;
  top: 0;
  z-index: 1;
`
const MgScroll = styled(SectionContainer)`
  background: url('assets/background/hero/midground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center 90%;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  z-index: 2;
`

// background: url('assets/background/hero/foreground.svg');

const FgScroll = styled(SectionContainer)`
  background: url('assets/background/hero/foreground_tall.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center bottom;
  height: 100%;
  width: 100%;
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MediaContainer = styled.div`
  padding-top: 12vw;
  margin: 0 auto;
  width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const BodyContainer = styled.div`
  width: 906px;
  margin-top: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 35px;
`

const MobileButtonContainer = styled.div`
  margin-top: 120vw;
`

const GridContainer = styled.div`
  z-index: 99;
  position: relative;
  grid-column: 3 / span 4;

  ${p => p.theme.mediaQueries.mobile} {
    grid-column: 3 / span 10;
  }
`

const HackCampHeader = styled(Header2)`
  font-size: 5rem !important;
  letter-spacing: -0.5px;
  font-weight: 900;
  color: #00455E !important;
  padding-top: 3rem;
  padding-bottom: 1rem;
`

const HackCampSubheader = styled.div`
  font-size: 1.4rem;
  color: #00455E;
`

const HCSub = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #00455E;
  padding-top: 0.5rem;
`

const Tent = styled.div`
  background: url('assets/tent.svg');
  width: 110px;
  height: 70px;
`

// const SponsorLink = styled.a`
//   color: #FFFFFF;
//   font-weight: bold;
// `

export default function Register() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = 768;

  const { ref: ref1 } = useParallax({
    speed: -30,
  });

  const { ref: ref2 } = useParallax({
    speed: -20,
  });

  const { ref: ref3 } = useParallax({
    speed: -10,
  });

  // const parallaxOffset = useParallax({
  //   speed: -30
  // })

  return (
    <BgSectionContainer>
      <BgScroll ref={ref1} />
      <MgScroll ref={ref2} />
      <FgScroll ref={ref3} />

      <GridContainer>
        {windowWidth && windowWidth <= mobileBreakpoint ?
          <MobileContainer>
            <Tent />
            <HackCampHeader color="#00455E">HackCamp</HackCampHeader>
            <BodyContainer>
              <Header3 color='#FFFFFF'>Western Canada’s largest beginner-friendly hackathon</Header3>
              <Header3 color='#FFFFFF'>largest hackathon</Header3>
              <Body color='#FFFFFF'>In-person event</Body>
            </BodyContainer>
            <MobileButtonContainer>
              <Button target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1TdvYy6trgRehIdnVhheaLwowBrGmC3zcNUl8UuoMwrI/edit?usp=sharing" width='259px' height='40px' borderRadius='100px' textColor='#FFB72C' borderColor="#FFB72C" isHover secondary isGradientText isOutline>
                Register Now
              </Button>
              {/* <SponsorLink href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor!</SponsorLink> */}
            </MobileButtonContainer>
          </MobileContainer>
          :
          <MediaContainer>
            <Tent />
            <HackCampHeader>
              HackCamp
            </HackCampHeader>
            <BodyContainer>
              <HackCampSubheader color='#00455E'>Western Canada’s largest beginner-friendly hackathon</HackCampSubheader>
              <HCSub color='#00455E'>In-person event</HCSub>
            </BodyContainer>
            <ButtonContainer>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/1TdvYy6trgRehIdnVhheaLwowBrGmC3zcNUl8UuoMwrI/edit?usp=sharing"
                width='175px'
                height='50px'
                borderRadius='7px'
                textColor='#FFFFFF'
                backgroundColor="#DB693B"
                isHover>
                Register Now
              </Button>
              <Body align="center">
                {/* <SponsorLink href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor!</SponsorLink> */}
              </Body>
            </ButtonContainer>
          </MediaContainer>}
      </GridContainer>
    </BgSectionContainer>
  )
}
