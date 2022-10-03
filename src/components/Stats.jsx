// import { useParallax } from 'react-scroll-parallax';
import { SectionContainer } from '@lib/Containers'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Header2 } from './Typography'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


// import { useWindowWidth } from '@react-hook/window-size';
// import { Body, Header2 } from './Typography'
// import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider';

const BgSectionContainer = styled(SectionContainer)`
  background: linear-gradient(to bottom, #ADDBF3, #F2B491);
  display: grid;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440/840;
  position: relative;

  z-index: 15;
  overflow-y: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/stats/static.svg');
    
    aspect-ratio: 428/1129;
  }
`

const BgScroll = styled(SectionContainer)`
  background: url('assets/background/stats/background.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
  }
`
const MgScroll = styled(SectionContainer)`
  background: url('assets/background/stats/midground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 12;

  ${(p) => p.theme.mediaQueries.mobile} {
    background: none;
    z-index: -1;
  }

`

const bop = keyframes`
  0% {
    transform: translate(0, -0%);
  }
  50% {
    transform: translate(0, -2%);
  }
  100% {
    transform: translate(0, -0%);
  }
`

const Crane = styled.img`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: table;
    
    width: 100%;
    object-fit: contain;
    margin: 0;
    position: relative;
    animation-name: ${bop};
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
`

const bopdesktop = keyframes`
  0% {
    transform: translate(0, -0%);
  }
  50% {
    transform: translate(0, -10%);
  }
  100% {
    transform: translate(0, -0%);
  }
`


const Flying = styled(SectionContainer)`
  background: url('assets/background/stats/foreground.svg'); // flying dino holding stats
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100vw;
  aspect-ratio: 1479 / 400;
  margin: 5rem 0;
  z-index: 15;
  position: relative;
  animation-name: ${bopdesktop};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  overflow-x: hidden;
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #002F4D;
  font-size: 3rem;
  padding-top: 5rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
    display: none;
  }
`

export default function Stats() {
  // const windowWidth = useWindowWidth();
  // const mobileBreakpoint = SCREEN_BREAKPOINTS.mobile;

  // const { ref: ref1 } = useParallax({
  //   speed: -20,
  // });

  // const { ref: ref2 } = useParallax({
  //   speed: -10,
  // });

  return (
    <BgSectionContainer id="statistics">
      <BgScroll />
      <MgScroll />
      <Crane src="assets/mobile/stats/flying.svg" alt="Flying doode" />

      <ContentInner>
        <StyledTitle>
          Statistics
        </StyledTitle>

        <AnimationOnScroll style={{ zIndex: 15 }} animateIn="animate__fadeInRightBig">
          <Flying />
        </AnimationOnScroll>

      </ContentInner>
    </BgSectionContainer>
  )
}