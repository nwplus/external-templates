import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'

import lightStatsImage from '@assets/images/LightStats.svg'
import unlightStatsImage from '@assets/images/UnlightStats.svg'
import tabletStatsImage from '@assets/images/tabletStats.png'
import mobileStatsImage from '@assets/images/mobileStats.png'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const StatsContainer = styled.div`
  width: 100vw;
  aspect-ratio: 1280/1280;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.tablet} {
    display: none;
  }
`

const MobileTabletStatsContainer = styled.div`
  display: none;
  width: 100%;
  height: auto;
  position: relative;

  ${p => p.theme.mediaQueries.tablet} {
    display: block;
  }
`

const StatsImg = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  opacity: ${p => (p.isHidden ? 1 : 0)};
  transition: opacity 0.5s ease;
`

const MobileTabletImg = styled.img`
  width: 100%;
  height: auto;
`

const HiddenTitle = styled.p`
  font-family: 'LT Museum';
  color: white;
  font-size: calc(100vw * (50 / 1280));
  font-weight: 700;
  position: absolute;
  top: calc(100vw * (120 / 1280));
  left: 10%;
  z-index: 1;
  opacity: 0;
`

// Stats component
const Stats = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const statsContainerRef = useRef(null)

  useEffect(() => {
    const updateDeviceType = () => {
      // Update state based on window width
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
      setIsTablet(window.innerWidth <= SCREEN_BREAKPOINTS.tablet)
    }

    updateDeviceType() // Initial check
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  const unlight = useParallax({})
  const light = useParallax({})

  console.log(isMobile, isTablet)
  return (
    <StatsContainer id="stats">
      {!isMobileOrTablet && (
        <StatsContainer ref={statsContainerRef}>
          <HiddenTitle>Last year we had...</HiddenTitle>
          <StatsImg src={unlightStatsImage} ref={unlight.ref} isHidden={false} />
          <StatsImg src={lightStatsImage} ref={light.ref} isHidden />
        </StatsContainer>
      )}

      {(isMobile || isTablet) && (
        <MobileTabletStatsContainer>
          <MobileTabletImg src={isMobile ? mobileStatsImage : tabletStatsImage} alt="Mobile or Tablet Stats" />
        </MobileTabletStatsContainer>
      )}
    </StatsContainer>
  );
};

export default Stats
