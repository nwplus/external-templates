import { SectionContainer } from '@lib/Containers'
import React from 'react'
import styled from 'styled-components'
import { Body } from './Typography'
import { Header2 } from './Typography'

const PC_STATS = 'assets/stats.svg'

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
    background-size: auto 100%;
    min-height: 600px;
  }
`
const StyledTitle = styled(Header2)`
  position: absolute;
  top: 50px;
  left: 45vw;
  
  ${(p) => p.theme.mediaQueries.mobile} {
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

const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
margin-bottom: 250px;
`

export default function Stats() {
  return (
    <BgSectionContainer>
      <StyledTitle>Statistics</StyledTitle>
      <StyledBody>Based on last nwHacks in 2021</StyledBody>
      {/* <Image src={PC_STATS} alt="nwHacks Stats" /> */}
    </BgSectionContainer>
  )
}