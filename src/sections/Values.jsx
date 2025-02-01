import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import topCake from '@assets/images/tabletStats.png'
import mobileStatsImage from '@assets/images/mobileStats.png'
import { SCREEN_BREAKPOINTS, base } from 'src/theme/ThemeProvider'
import StatsBoxes from '@components/StatsBoxes'

const OuterContainer = styled.div`
  position: relative;
`

const ValuesContainer = styled.div`
  width: 100vw;
  aspect-ratio: 1280/1280;
  height: auto;
  position: relative;
  z-index: 2;

  ${p => p.theme.mediaQueries.tablet} {
    display: none;
  }
`

const MobileTabletStatsContainer = styled.div`
  display: none;
  width: 100vw;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.tablet} {
    display: block;
    aspect-ratio: 1280/1280;
  }
`

const Title = styled.p`
  color: #A6321E;
  font-weight: 400;
  font-family:'Gloock Regular', normal;
  text-align: center;

  position: relative;
  top: calc(100vw * (100 / 1280));
  font-size: calc(100vw * (56 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    width: 100%;
    font-size: calc(100vw * (56 / 834));
    font-weight: 700;
    top: calc(100vw * (40 / 834));
    left: 0;
    z-index: 1;
    text-align: center;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (42 / 487));
  }
`

const Values = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [titleGlow, setTitleGlow] = useState(false)
  const valueContainerRef = useRef(null)

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
      setIsTablet(window.innerWidth <= SCREEN_BREAKPOINTS.tablet)
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  return (
    <OuterContainer id="stats">
      <Title>Our Values</Title>
      {!isMobile && !isTablet && (
        <ValuesContainer ref={valueContainerRef}>
          <p>Cake Place Holder</p>
          <p>Line+Dots Place Holder</p>
          <p>Text Place Holder</p>

        </ValuesContainer>
      )}

      {(isMobile || isTablet) && (
        <MobileTabletStatsContainer>
        </MobileTabletStatsContainer>
      )}
    </OuterContainer>
  )
}

export default Values
