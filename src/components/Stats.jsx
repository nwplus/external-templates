import { SectionContainer } from '@lib/Containers'
import { useWindowWidth } from '@react-hook/window-size';
import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from './Typography'
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider';

const BgSectionContainer = styled(SectionContainer)`
  background: url('/assets/stats_bg1.svg');
  background-repeat: no-repeat;
  height: 62vw;
  display: grid;
  align-items: center;
  background-size: 100vw;
  background-position: center center;
  position: relative;
  ${p => p.theme.mediaQueries.mobile} {
    background: url('/assets/stats_bg1_mobile.svg');
    background-size: 100vw;
    background-repeat: no-repeat;
    height: 103vw;
  }
`
const StyledTitle = styled(Header2)`
  position: absolute;
  top: 50px;
  left: 45vw;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    left: 36vw;
    font-size: 2em;
  }
`

const StyledBody = styled(Body)`
position: absolute;
  top: 100px;
  left: 44vw;
  ${(p) => p.theme.mediaQueries.mobile} {
    text-align: center;
    
  }
`

export default function Stats() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = SCREEN_BREAKPOINTS.mobile;
  return (
    <BgSectionContainer>
      <StyledTitle>Statistics</StyledTitle>
      {windowWidth > mobileBreakpoint && <StyledBody>Based on last nwHacks in 2021</StyledBody>}
    </BgSectionContainer>
  )
}