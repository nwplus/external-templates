import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'

import StatsSVG from "../assets/images/stats.svg"
import MobileStatsSVG from "../assets/images/mobile/stats.svg"


const StatsContainer = styled.img`
  min-height: calc(calc(900 / 1440) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
  top: -60px;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileStatsContainer = styled.img`
  min-height: calc(calc(439 / 414) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
  top: -60px;
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const Stats = () => {

  return (
    <>
      <StatsContainer src={StatsSVG} />
      <MobileStatsContainer src={MobileStatsSVG} />
    </>
  )
}

export default Stats