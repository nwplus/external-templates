import React from 'react'
import styled from 'styled-components'
import { Body, Header2 } from '@components/Typography'

import StatsSVG from "../assets/images/stats.svg"

const StatsContainer = styled.img`
  width: 100vw;
  height: auto;
  position: relative;
`

const Stats = () => {

  return (
    <>
      <StatsContainer src={StatsSVG} />
    </>
  )
}

export default Stats