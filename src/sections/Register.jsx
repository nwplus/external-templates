import { useParallax } from 'react-scroll-parallax';
// import { useWindowWidth } from '@react-hook/window-size';
import styled from 'styled-components';
import { SectionContainer } from '@lib/Containers';
import { Body, Header2 } from '@components/Typography';
import Button from '@components/Button';

const BgSectionContainer = styled(SectionContainer)`
  background: linear-gradient(to bottom, rgba(48,242,207,1) 0%, rgba(217,252,188,1) 33%, rgba(253,217,158,1) 100%);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  aspect-ratio: 1440/1200;
  z-index: 0;
  overflow-y: hidden;

  
  ${p => p.theme.mediaQueries.mobile} {
    background: linear-gradient(to bottom, #30F2CF 0%, #D9FCBC 66%, #FDD99E 90%);
    background-repeat: no-repeat;

    text-align: center;
    aspect-ratio: 428/1082;
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background/hero/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
  width: 100%;
  
  position: absolute;
  top: 0;
  z-index: 1;
  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/hero/background.svg');
    background-repeat: no-repeat;
    z-index: -1;
  }
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
  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/hero/midground.svg');
    background-position: center top;
    background-repeat: no-repeat;
  }
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
  
  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/hero/foreground_tall.svg');
    background-repeat: no-repeat;
  }
`

const MediaContainer = styled.div`
  padding-top: 12vw;
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
    transform: translateY(-7rem);
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
  margin-top: 35px;
`

const GridContainer = styled.div`
  z-index: 99;
  position: absolute;
  height: 100%;
  grid-column: 3 / span 4;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display:flex;
    align-items: center;
  }
`

const HackCampHeader = styled(Header2)`
  font-size: 5rem;
  letter-spacing: -0.5px;
  font-weight: 900;
  color: #00455E !important;
  padding-top: 3rem;
  padding-bottom: 1rem;
  
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 4rem;
  }
`

const HackCampSubheader = styled.div`
  font-size: 1.4rem;
  color: #00455E;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1.2rem;
  }
`

const HCSub = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #00455E;
  padding-top: 0.5rem;
  ${p => p.theme.mediaQueries.mobile} {
    font-size: 1rem;
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

// const SponsorLink = styled.a`
//   color: #FFFFFF;
//   font-weight: bold;
// `

export default function Register() {
  // not using these hooks because they don't work on initial load -> better practice to pass an isMobile props from getServerSideProps after checking userAgent
  // const windowWidth = useWindowWidth();
  // const mobileBreakpoint = 768;

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
              href="https://forms.gle/GQ3k8ZbtfULfVYxq6"
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
        </MediaContainer>
      </GridContainer>
    </BgSectionContainer>
  )
}
