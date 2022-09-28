import { useParallax } from 'react-scroll-parallax';
import { SectionContainer } from '@lib/Containers'
import React from 'react'
import styled from 'styled-components'
import { Header2 } from './Typography'
// import { useWindowWidth } from '@react-hook/window-size';
// import { Body, Header2 } from './Typography'
// import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider';

const BgSectionContainer = styled(SectionContainer)`
  background: linear-gradient(to bottom, #ADDBF3, #F2B491);
  display: grid;
  align-items: center;
  width: 100%;
  aspect-ratio: 1440/840;

  z-index: 15;
  overflow: hidden;

  ${p => p.theme.mediaQueries.mobile} {
    background: url('/assets/stats_bg1_mobile.svg');
    background-size: 100vw;
    background-repeat: no-repeat;
    height: 103vw;
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

`
const Flying = styled(SectionContainer)`
  background: url('assets/background/stats/foreground.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  aspect-ratio: 1479 / 400;
  margin: 5rem 0;
  z-index: 15;
`

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #002F4D;
  font-size: 3rem;
  padding-top: 5rem;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

export default function Stats() {
  // const windowWidth = useWindowWidth();
  // const mobileBreakpoint = SCREEN_BREAKPOINTS.mobile;

  const { ref: ref1 } = useParallax({
    speed: -30,
  });

  const { ref: ref2 } = useParallax({
    speed: -20,
  });

  return (
    <BgSectionContainer id="statistics">
      <BgScroll ref={ref1} />
      <MgScroll ref={ref2} />

      <ContentInner>
        <StyledTitle>
          Statistics
        </StyledTitle>
        <Flying />
      </ContentInner>
    </BgSectionContainer>
  )
}