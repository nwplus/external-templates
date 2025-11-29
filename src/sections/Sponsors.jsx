import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import SponsorsGrid from '@components/SponsorsGrid'
import fireDb from '@utilities/firebase'
import Carousel from '../components/Carousel'

const SponsorsContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg,
  #C7E2F7 0%,
  #F9F1D1 10%,
  #F8C885 16%,
  #F4EEE5 20%,
  #FFE0B0 50%,
  #fdc182ff 100%
  );
  
  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: unset;
    background: linear-gradient(180deg,
      #E4EAE0 0%,
      #F9F1D1 10%,
      #F8C885 20%,
      #F4EEE5 30%,
      #FFE0B0 80%,
      #FFCE9A 90%,
      #E3B2A3 100%
    );
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(100vw * (50 / 1280));
  padding-top: calc(100vw * (200 / 1280));
  
  ${p => p.theme.mediaQueries.mobile} {
    padding-top: calc(100vw * (200 / 487));
  }
`

const Title = styled.p`
  text-align: center;
  color: #0F2333;
  font-size: calc(100vw * (40 / 1280));
  font-weight: 500;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (24 / 487));
  }
`

const Description = styled.p`
  text-align: left;
  color: #000000;
  line-height: 140%;
  letter-spacing: 0px;
  font-size: calc(100vw * (20 / 1280));
  width: 50%;
  margin: 0 auto;

  a {
    color: #000000;
    transition: font-weight 0.2s ease, color 0.2s ease;
    
    &:hover {
      font-weight: bold;
      color: #d1923aff;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
    text-align: center;
    width: 80%;
    margin-bottom: 2%;
  }
`

const SponsorLink = styled.a` 
  background: linear-gradient(180deg, rgba(236, 170, 119, 0.6) 0%, rgba(232, 156, 36, 0.6) 100%);
  cursor: pointer;
  color: #783613;
  padding: calc(100vw * (16 / 1280));
  font-size: calc(100vw * (18 / 1280));
  border-radius: calc(100vw * (16 / 1280));
  border: 1px solid;
  border-image-source: linear-gradient(272.85deg, rgba(255, 255, 255, 0.5) -3.43%, rgba(255, 240, 240, 0.5) 98.51%);
  width: calc(100vw * (146 / 1280));
  height: calc(100vw * (56 / 1280));

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: linear-gradient(180deg, rgba(236, 170, 119, 1) 0%, rgba(232, 156, 36, 1) 100%);
    text-decoration: none;
  }

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (1600 / 487));
    width: calc(100vw * (146 / 487));
    height: calc(100vw * (56 / 487));
    font-size: calc(100vw * (20 / 487));
  }
`


const CloudsBehind = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 808 / 600;
  z-index: 1;
  background-image: url('/assets/images/sponsor/sponsor_clouds_behind.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;
  pointer-events: none;
  will-change: transform;
  transition: transform 0.1s ease-out;

  ${p => p.theme.mediaQueries.mobile} {
    display: None;
  }
`

const CloudsFront = styled.div`
  position: absolute;
  top: calc(100vw * (350 / 1280));
  left: 0;
  width: 100%;
  aspect-ratio: 808 / 600;
  z-index: 2;
  background-image: url('/assets/images/sponsor/sponsor_clouds_front.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;
  pointer-events: none;
  will-change: transform;
  transition: transform 0.1s ease-out;

  ${p => p.theme.mediaQueries.mobile} {
    display: None;
  }
`

const BearAnimation = styled.img`
  position: absolute;
  top: calc(100vw * (325 / 1280));
  right: calc(100vw * (175 / 1280));
  width: calc(100vw * (150 / 1280));
  z-index: 1;
  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} { 
    z-index: -1;
    top: calc(100vw * (550 / 487));
    width: 50%;
  } 
`

const IslandFog = styled.img`
  display: none;
  
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: 100%;
    top: calc(100vw * (500 / 487));
  }
`

const SPONSOR_IMAGE_OVERRIDES = {
  TELUS: '/assets/images/telus.png',
  CSE: '/assets/images/cse.png',
  Deloitte: '/assets/images/deloitte.png',
  Warp: '/assets/images/warp.png',
}

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])
  const [carouselSponsors, setCarouselSponsors] = useState([])
  const cloudsBehindRef = useRef(null)
  const cloudsFrontRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2025', 'Sponsors')
    if (data) {
      const filteredCarouselSponsors = data.filter(child => child.blurb !== undefined && child.blurb !== '')
      const tierOrder = ['title', 'platinum', 'gold', 'silver', 'bronze', 'startup', 'inkind']
      const sortedCarouselSponsors = filteredCarouselSponsors.sort(
        (a, b) => tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier)
      )
      setCarouselSponsors(sortedCarouselSponsors)

      const deepCopyData = JSON.parse(JSON.stringify(data))
      const modifiedSponsors = deepCopyData.map(sponsor => ({
        ...sponsor,
        imgURL: SPONSOR_IMAGE_OVERRIDES[sponsor.name] || sponsor.imgURL,
      }))
      setSponsors(modifiedSponsors)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !cloudsBehindRef.current || !cloudsFrontRef.current) return

      const containerTop = containerRef.current.offsetTop
      const {scrollY} = window
      const scrollPosition = scrollY - containerTop

      const behindSpeed = 0.2
      const frontSpeed = 0.1

      const behindOffset = scrollPosition * behindSpeed
      const frontOffset = scrollPosition * frontSpeed

      cloudsBehindRef.current.style.transform = `translateY(${behindOffset}px)`
      cloudsFrontRef.current.style.transform = `translateY(${frontOffset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <SponsorsContainer ref={containerRef}>
      {isMobile && (<IslandFog src="/assets/images/sponsor/mobile/island_fog.png"/>)}

      <CloudsBehind ref={cloudsBehindRef} />
      <CloudsFront ref={cloudsFrontRef} />
      <BearAnimation src="/assets/images/animations/bear.gif" alt="Bear animation" />
      <ContentWrapper>
        <Title id="sponsors">Sponsor nwHacks 2026</Title>
        <Description>
          nwHacks is more than just a hackathon; it&apos;s a place that supports and fosters a community for the next generation of tech leaders. 
          <br /><br />
          If you&apos;re interested in collaborating with us or speaking at one of our events, please reach out at <a href="mailto:sponsorship@nwplus.io" target="_blank" rel="noreferrer">sponsorship@nwplus.io</a>. 
        </Description>
        <SponsorLink href="mailto:sponsorship@nwplus.io" target="_blank" rel="noreferrer">Sponsor us!</SponsorLink>
        {carouselSponsors.length > 0 && <Carousel sponsors={carouselSponsors} />}
      </ContentWrapper>
      <SponsorsGrid sponsors={sponsors} />
    </SponsorsContainer>
  )
}

export default Sponsors