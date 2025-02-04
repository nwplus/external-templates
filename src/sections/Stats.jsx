import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const OuterContainer = styled.div`
  position: relative;
`

const StatsContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1920/1248;
  height: auto;
  display: flex;
  position: relative;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393/905;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
    color: #A6321E;
    text-align: center;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(100vw * (80 / 393));
  }
`

const Bowl = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (1275 / 1920));
  top: calc(100vw * (100 / 1920));
  left: calc(100vw * (0 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (350 / 393));
    top: calc(100vw * (100 / 393));
    left: calc(100vw * (10 / 393));
  }
`

const StatImage = styled.img`
  position: absolute;
  height: auto;
  width: ${({ width }) => `calc(100vw * (${width} / 1920))`};
  top: ${({ top }) => `calc(100vw * (${top} / 1920))`};
  left: ${({ left, scrollOffset }) => `calc(100vw * (${left} / 1920) + ${scrollOffset}px)`};
  transition: left 0.1s linear;

  ${p => p.theme.mediaQueries.mobile} {
    width: ${({ width }) => `calc(100vw * (${width} / 393))`};
    top: ${({ top }) => `calc(100vw * (${top} / 393))`};
    left: ${({ left, scrollOffset }) => `calc(100vw * (${left} / 393) + ${scrollOffset}px)`};
    z-index: 10;
  }
`;

const MobileEggStat = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (252 / 393));
  top: calc(100vw * (327 / 393));
  left: calc(100vw * (-170 / 393));
  z-index: 3;
  transform: translateX(${({ scrollOffset }) => scrollOffset}px);
  transition: transform 0.3s ease-out;
`;

const MobileBottleStat = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (195 / 393));
  top: calc(100vw * (470 / 393));
  left: calc(100vw * (-310 / 393));
  z-index: 3;
  transform: translateX(${({ scrollOffset }) => scrollOffset}px);
  transition: transform 0.3s ease-out;
`;

const MobileFlourStat = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (210 / 393));
  top: calc(100vw * (575 / 393));
  left: calc(100vw * (-150 / 393));
  z-index: 3;
  transform: translateX(${({ scrollOffset }) => scrollOffset}px);
  transition: transform 0.3s ease-out;
`;

const MobileButterStat = styled.img`
  position: absolute;
  height: auto;
  width: calc(100vw * (210 / 393));
  top: calc(100vw * (750 / 393));
  left: calc(100vw * (-305 / 393));
  z-index: 3;
  transform: translateX(${({ scrollOffset }) => scrollOffset}px);
  transition: transform 0.3s ease-out;
`;

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0);
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
      const { scrollY } = window;
      setScrollOffset(scrollY * 0.05);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <OuterContainer id="stats">
      {!isMobile ? (
        <StatsContainer ref={statsContainerRef}>
          <Title>Last year we had...</Title>
          <Bowl src='assets/images/stats/bowl.svg' />
          <StatImage src="assets/images/stats/egg_stat.svg" width={370} top={300} left={390} scrollOffset={scrollOffset} />
          <StatImage src="assets/images/stats/bottle_stat.svg" width={310} top={230} left={860} scrollOffset={scrollOffset} />
          <StatImage src="assets/images/stats/flour_bag_stat.svg" width={400} top={400} left={1200} scrollOffset={scrollOffset} />
          <StatImage src="assets/images/stats/butter_stat.svg" width={520} top={750} left={1040} scrollOffset={scrollOffset} />
        </StatsContainer>
      ) : (
        <StatsContainer ref={statsContainerRef}>
          <Title>Last Year We Had...</Title>
          <Bowl src='assets/images/stats/mobile/bowl_mobile.svg' />
          <MobileEggStat src="assets/images/stats/mobile/egg_stat_mobile.svg" scrollOffset={scrollOffset} />
          <MobileBottleStat src="assets/images/stats/mobile/bottle_stat_mobile.svg" scrollOffset={scrollOffset} />
          <MobileFlourStat src="assets/images/stats/mobile/flour_bag_stat_mobile.svg" scrollOffset={scrollOffset} />
          <MobileButterStat src="assets/images/stats/mobile/butter_stat_mobile.svg" scrollOffset={scrollOffset} />
        </StatsContainer>
      )}
    </OuterContainer>
  )
}

export default Stats
