import { SectionContainer } from '@lib/Containers'
import { useWindowWidth } from '@react-hook/window-size';
import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from './Typography'
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider';

const BgSectionContainer = styled(SectionContainer)`
  background: url('/assets/stats_2.svg');
  background-repeat: no-repeat;
  height: 62vw;
  display: grid;
  align-items: center;
  background-size: 100vw;
  background-position: center center;
  position: relative;
  ${p => p.theme.mediaQueries.mobile} {
    background: url('/assets/Statistics_2.svg');
    background-size: 100vw;
    background-repeat: no-repeat;
    height: 103vw;
  }
`
const StyledTitle = styled(Header2)`  
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 2em;
  }
`

const StyledBody = styled(Body)`
  ${(p) => p.theme.mediaQueries.mobile} {
    text-align: center;
    
  }
`

const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: auto;
margin-top: 2.5em;
`

export default function Stats() {
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = SCREEN_BREAKPOINTS.mobile;
  return (
    <BgSectionContainer id="statistics">
      <TextContainer>
        <StyledTitle>Statistics</StyledTitle>
        {windowWidth > mobileBreakpoint && <StyledBody>Based on last nwHacks in 2021</StyledBody>}
      </TextContainer>
    </BgSectionContainer>
  )
}