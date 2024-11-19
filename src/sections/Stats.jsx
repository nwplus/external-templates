import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import tabletStatsImage from '@assets/images/tabletStats.png'
import mobileStatsImage from '@assets/images/mobileStats.png'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import StatsBoxes from '@components/StatsBoxes'

const OuterContainer = styled.div`
  position: relative;
`

const StatsContainer = styled.div`
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

const MobileTabletImg = styled.img`
  width: 100%;
  height: auto;
`

const Title = styled.p`
  color: ${p => (p.isGlowing ? 'white' : '#B4B4B4')};
  text-shadow: ${p => (p.isGlowing ? '0 0 32px rgba(255, 255, 255, 0.5)' : 'none')};
  font-weight: 900;

  position: absolute;
  top: calc(100vw * (100 / 1280));
  font-size: calc(100vw * (56 / 1280));
  left: calc(100vw * (100 / 1280));

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

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [titleGlow, setTitleGlow] = useState(false)
  const statsContainerRef = useRef(null)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const lightElements = document.getElementsByClassName('light')
          Array.from(lightElements).forEach(element => {
            const newOpacity = entry.isIntersecting ? '1' : '0'
            element.setAttribute('style', `opacity: ${newOpacity}`)
          })
          setTitleGlow(entry.isIntersecting)
        })
      },
      { threshold: 0.4 }
    )

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <OuterContainer id="stats">
      {!isMobile && !isTablet && (
        <StatsContainer ref={statsContainerRef}>
          <StatsBoxes />
          <Title isGlowing={titleGlow}>Last year we had...</Title>
        </StatsContainer>
      )}

      {(isMobile || isTablet) && (
        <MobileTabletStatsContainer>
          <Title isGlowing>Last year we had...</Title>
          <MobileTabletImg src={isMobile ? mobileStatsImage : tabletStatsImage} alt="Mobile or Tablet Stats" />
        </MobileTabletStatsContainer>
      )}
    </OuterContainer>
  )
}

export default Stats
