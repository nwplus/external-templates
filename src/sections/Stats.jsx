import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import tabletStatsImage from '@assets/images/tabletStats.png'
import mobileStatsImage from '@assets/images/mobileStats.png'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const OuterContainer = styled.div`
  position: relative;
`

const StatsContainer = styled.div`
  width: 100vw;
  aspect-ratio: 1920/1248;
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
    aspect-ratio: 1920/1280;
  }
`

const MobileTabletImg = styled.img`
  width: 100%;
  height: auto;
`

const Title = styled.p`
  color: #A6321E;
  font-family: Gloock;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  position: absolute;
  top: calc(100vw * (100 / 1920));
  font-size: calc(100vw * (56 / 1920));
  left: calc(100vw * (415 / 1920));

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

const Bowl = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (1275 / 1920));
  top: calc(100vw * (100 / 1920));
  left: calc(100vw * (0 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (100 / 393));
    top: calc(100vw * (50 / 393));
    left: calc(100vw * (150 / 393));
  }
`

const StatImage = styled.img`
  position: absolute;
  height: auto;
  width: ${({ width }) => `calc(100vw * (${width} / 1920))`};
  top: ${({ top }) => `calc(100vw * (${top} / 1920))`};
  left: ${({ left, scrollOffset }) => `calc(100vw * (${left} / 1920) + ${scrollOffset}px)`};
  transition: left 0.1s linear;
`;

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0);
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
      const {scrollY} = window;
      setScrollOffset(scrollY * 0.10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <OuterContainer id="stats">
      {!isMobile && !isTablet && (
        <StatsContainer ref={statsContainerRef}>
          <Title>Last year we had...</Title>
          <Bowl src='assets/images/about/bowl.svg'/>
          <StatImage src="assets/images/about/egg_stat.svg" width={370} top={300} left={190} scrollOffset={scrollOffset} />
          <StatImage src="assets/images/about/bottle_stat.svg" width={310} top={230} left={660} scrollOffset={scrollOffset} />
          <StatImage src="assets/images/about/flour_bag.svg" width={400} top={400} left={1000} scrollOffset={scrollOffset} />
          <StatImage src="assets/images/about/butter_stat.svg" width={520} top={750} left={840} scrollOffset={scrollOffset} />
        </StatsContainer>
      )}

      {(isMobile || isTablet) && (
        <MobileTabletStatsContainer>
          <Title>Last year we had...</Title>
          <MobileTabletImg src={isMobile ? mobileStatsImage : tabletStatsImage} alt="Mobile or Tablet Stats" />
        </MobileTabletStatsContainer>
      )}
    </OuterContainer>
  )
}

export default Stats
