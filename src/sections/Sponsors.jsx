import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import SponsorsGrid from '@components/SponsorsGrid'
import fireDb from '@utilities/firebase'
import Carousel from '../components/Carousel'

const SponsorsContainer = styled.div`
  position: relative;
  z-index: 10;
  top: calc(100vw * (600 / 1280));
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (10 / 1280));
  padding-bottom: calc(100vw * (650 / 1280));
`

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


const Title = styled(Header2)`
  text-align: center;
  color: #0F2333;
  font-family: 'Space Grotesk';
  font-size: calc(100vw * (40 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (56 / 487));
  }
`

const Description = styled.p`
  text-align: left;
  color: #000000;
  font-family: 'Space Grotesk';
  line-height: 140%;
  letter-spacing: 0px;
  font-size: calc(100vw * (20 / 1280));
  width: 50%;
  margin: 0 auto;
  margin-bottom: calc(100vw * (150 / 1280));

  a {color: #000000;}
`

const SwipeDescription = styled.p`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    color: white;
    font-weight: 600;
    font-size: calc(100vw * (16 / 487));
    margin-bottom: calc(100vw * (-20 / 487));
  }
`

const CloudsBehind = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 808 / 600;
  z-index: 1;

  background-image: url('/assets/images/sponsor/sponsor_clouds_behind.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;

  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: 0;
    aspect-ratio: 808 / 600;
    background-size: 100% auto;
  }
`

const CloudsFront = styled.div`
  position: absolute;
  top: calc(100vw * (350 / 1280));
  left: 0;
  width: 100%;
  aspect-ratio: 808 / 600;
  z-index: 3;

  background-image: url('/assets/images/sponsor/sponsor_clouds_front.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;

  pointer-events: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (350 / 487));
    aspect-ratio: 808 / 600;
    background-size: 100% auto;
  }
`

const BearAnimation = styled.img`
  position: absolute;
  top: calc(100vw * (325 / 1280));
  right: calc(100vw * (175 / 1280));
  width: calc(100vw * (150 / 1280));
  z-index: 2;
  pointer-events: none;
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

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2025', 'Sponsors')
    if (data) {
      const filteredCarouselSponsors = data.filter(child => child.blurb !== undefined && child.blurb !== '')
      const tierOrder = ['title', 'platinum', 'gold', 'silver', 'bronze', 'startup', 'inkind']
      const sortedCarouselSponsors = filteredCarouselSponsors.sort(
        (a, b) => tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier)
      )
      setCarouselSponsors(sortedCarouselSponsors)

      // create a deep copy of the data so we can modify TELUS' logo for the
      // sponsors grid without affecting how it appears in the carousel
      const deepCopyData = JSON.parse(JSON.stringify(data))
      const modifiedSponsors = deepCopyData.map(sponsor => ({
        ...sponsor,
        imgURL: SPONSOR_IMAGE_OVERRIDES[sponsor.name] || sponsor.imgURL,
      }))
      setSponsors(modifiedSponsors)
    }
  }, [])

  return (
    <SponsorsContainer>
      <CloudsBehind />
      <CloudsFront />
      <BearAnimation src="/assets/images/animations/bear.gif" alt="Bear animation" />
      <ContentWrapper>
        <Title id="sponsors">Sponsor nwHacks 2026</Title>
        <Description>
          nwHacks is more than just a hackathon; it&apos;s a place that supports and fosters a community for the next generation of tech leaders. 
          <br /><br />
          If you&apos;re interested in collaborating with us or speaking at one of our events, please reach out at <a href="mailto:sponsorship@nwplus.io">sponsorship@nwplus.io</a>. 
        </Description>
        <SwipeDescription>Swipe to learn more about our sponsors</SwipeDescription>
        {carouselSponsors.length > 0 && <Carousel sponsors={carouselSponsors} />}
      </ContentWrapper>
      <SponsorsGrid sponsors={sponsors} />
    </SponsorsContainer>
  )
}

export default Sponsors
