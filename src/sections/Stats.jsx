import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'

import StatsSVG from "../assets/images/stats.svg"

const StatsContainer = styled.img`
  min-height: calc(calc(900 / 1440) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
  top: -60px;
`

const Stats = () => {

  return (
    <>
      <StatsContainer src={StatsSVG} />
    </>
  )
}

export default Stats