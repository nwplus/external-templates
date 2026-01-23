import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const OuterContainer = styled.div`
  position: relative;
`

const StatsContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1520/1500;
  height: auto;
  display: flex;
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, #78c7f3cc 0%, #94d2f5 50%, #ddffdb 100%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393/905;
    margin-bottom: 4rem;
  }
`

const Title = styled.p`
  color: #000000;
  font-size: calc(100vw * (60 / 1512));
  font-family: 'Bree Serif';
  font-weight: 400;
  position: absolute;
  top: calc(100vw * (150 / 1512));
  left: calc(100vw * (100 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
    text-align: center;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(100vw * (80 / 393));
  }
`
// YELLOW TREE
const YellowTreeStats = styled.img`
  width: calc(100vw * (600 / 1512));
  z-index: 7;
  position: absolute;
  left: 0;
  top: calc(100vw * (300 / 1512));
`

const LeftIsland = styled.img`
  width: calc(100vw * (600 / 1512));
  z-index: 5;
  position: absolute;
  top: calc(100vw * (1030 / 1512));
`

const BallFlowers = styled.img`
  width: calc(100vw * (120 / 1512));
  z-index: 8;
  position: absolute;
  top: calc(100vw * (1060 / 1512));
  left: calc(100vw * (30 / 1512));
`

const AliceNugget = styled.img`
  width: calc(100vw * (167 / 1512));
  z-index: 6;
  position: absolute;
  top: calc(100vw * (960 / 1512));
  left: calc(100vw * (80 / 1512));
`

const OverHere = styled.img`
  width: calc(100vw * (200 / 1512));
  z-index: 6;
  position: absolute;
  top: calc(100vw * (940 / 1512));
  left: calc(100vw * (340 / 1512));
`

// RED TREE
const RedTreeStats = styled.img`
  width: calc(100vw * (670 / 1512));
  z-index: 4;
  position: absolute;
  left: calc(100vw * (450 / 1512));
  top: calc(100vw * (180 / 1512));
`

const TopMiddleIsland = styled.img`
  width: calc(100vw * (448 / 1512));
  z-index: 3;
  position: absolute;
  top: calc(100vw * (840 / 1512));
  left: calc(100vw * (530 / 1512));
`

// PURPLE TREE
const PurpleTreeStats = styled.img`
  width: calc(100vw * (577 / 1512));
  z-index: 6;
  position: absolute;
  right: 0;
  top: calc(100vw * (220 / 1512));
`

const RightIsland = styled.img`
  width: calc(100vw * (500 / 1512));
  z-index: 5;
  position: absolute;
  right: 0;
  top: calc(100vw * (900 / 1512));
`

const PurpleBallFlowers = styled.img`
  width: calc(100vw * (120 / 1512));
  z-index: 6;
  position: absolute;
  right: calc(100vw * (310 / 1512));
  top: calc(100vw * (810 / 1512));
`

// MIDDLE ISLAND WITH BEAR
const BotMiddleIsland = styled.img`
  width: calc(100vw * (450 / 1512));
  z-index: 5;
  position: absolute;
  right: calc(100vw * (520 / 1512));
  top: calc(100vw * (1100 / 1512));
`

const Bear = styled.img`
  width: calc(100vw * (117 / 1512));
  z-index: 6;
  position: absolute;
  right: calc(100vw * (700 / 1512));
  top: calc(100vw * (1050 / 1512));
`

const MiddleStick = styled.img`
  width: calc(100vw * (178 / 1512));
  z-index: 6;
  position: absolute;
  right: calc(100vw * (510 / 1512));
  top: calc(100vw * (1100 / 1512));
`

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)
  const statsContainerRef = useRef(null)

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const lightElements = document.getElementsByClassName('light')
          Array.from(lightElements).forEach(element => {
            const newOpacity = entry.isIntersecting ? '1' : '0'
            element.setAttribute('style', `opacity: ${newOpacity}`)
          })
        })
      },
      { threshold: 0.4 }
    )

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      setScrollOffset(scrollY * 0.05)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <OuterContainer id="stats">
      {!isMobile ? (
        <StatsContainer ref={statsContainerRef}>
          <Title>Last year we had...</Title>
          <YellowTreeStats src="/assets/images/stats/yellow/yellow_tree_stats.svg" />
          <LeftIsland src="/assets/images/stats/yellow/left_island.svg" />
          <BallFlowers src="/assets/images/stats/yellow/ball_flowers.svg" />
          <AliceNugget src="/assets/images/stats/yellow/alice_nugget.svg" />
          <OverHere src="/assets/images/stats/yellow/over_here.svg" />

          <RedTreeStats src="/assets/images/stats/red/red_tree_stats.svg" />
          <TopMiddleIsland src="/assets/images/stats/red/top_middle_island.svg" />

          <PurpleTreeStats src="/assets/images/stats/purple/purple_tree_stats.svg" />
          <RightIsland src="/assets/images/stats/purple/right_island.svg" />
          <PurpleBallFlowers src="/assets/images/stats/purple/ball_flowers.svg" />

          <BotMiddleIsland src="/assets/images/stats/middle/bot_middle_island.svg" />
          <Bear src="/assets/images/stats/middle/bear.svg" />
          <MiddleStick src="/assets/images/stats/middle/middle_stick.svg" />
        </StatsContainer>
      ) : (
        <StatsContainer ref={statsContainerRef}>
          <Title>Last year we had...</Title>
        </StatsContainer>
      )}
    </OuterContainer>
  )
}

export default Stats
