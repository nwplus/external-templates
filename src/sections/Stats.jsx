import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'

// import StatsSVG from "../assets/images/stats.svg"
import MobileStatsSVG from "../assets/images/mobile/stats.svg"

import StatsPart1 from "../assets/images/StatsPart1.svg"
import StatsPart2 from "../assets/images/StatsPart2.svg"
import StatsPart3 from "../assets/images/StatsPart3.svg"

const StatsContainer = styled.div`
  min-height: calc(calc(900 / 1440) * 100vw);
  width: 100vw;
  height: auto;
  position: relative;
  top: -60px;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const StatsImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
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
  // const statsPart1 = useParallax({
  //   speed: -10,
  //   translateX: ['-100%', '120%']
  // });

  // const statsPart2 = useParallax({
  //   speed: -10,
  //   translateX: ['-115%', '105%']
  // });

  // const statsPart3 = useParallax({
  //   speed: -10,
  //   translateX: ['135%', '-85%']
  // });

  const statsPart1 = useParallax({
    speed: -10,
    translateX: ['-20%', '10%']
  });

  const statsPart2 = useParallax({
    speed: -10,
    translateX: ['-35%', '-10%']
  });

  const statsPart3 = useParallax({
    speed: -10,
    translateX: ['45%', '0%']
  });

  return (
    <>
      <StatsContainer>
        <StatsImg src={StatsPart1} ref={statsPart1.ref} />
        <StatsImg src={StatsPart3} ref={statsPart3.ref} />
        <StatsImg src={StatsPart2} ref={statsPart2.ref} />
      </StatsContainer>

      <MobileStatsContainer src={MobileStatsSVG} />
    </>
  )
}

export default Stats