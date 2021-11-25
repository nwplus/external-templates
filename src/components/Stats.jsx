import { SectionContainer } from '@lib/Containers'
import React from 'react'
import styled from 'styled-components'

const PC_STATS = 'assets/stats.svg'

const BgSectionContainer = styled(SectionContainer)`
  background: url('/assets/stats_bg.svg');
  background-repeat: no-repeat;
  height: 41vw;
  display: grid;
  align-items: center;
  background-size: 100% 100%;
  ${p => p.theme.mediaQueries.mobile} {
    background-size: auto 100%;
    min-height: 600px;
  }
`

const Image = styled.img`
  width: 60%;
`

export default function Stats() {
  return (
    <BgSectionContainer>
      <Image src={PC_STATS} alt="nwHacks Stats" />
    </BgSectionContainer>
  )
}