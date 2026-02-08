import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import SponsorsGrid from '@components/SponsorsGrid'
import fireDb from '@utilities/firebase'
import Carousel from '../components/Carousel'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const SponsorsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (40 / 1920));
  margin-top: calc(100vw * (200 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (-150 / 393));
    aspect-ratio: 393 / 800;
  }
`

const Title = styled(Header2)`
  text-align: center;
  color: #000000;
  font-size: calc(100vw * (64 / 1920));
  font-family: Bree Serif;
  font-weight: 400;
  margin-top: calc(100vw * (100 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (40 / 393));
  }
`

const Description = styled.p`
  font-weight: 400;
  font-size: calc(100vw * (21 / 1920));
  width: calc(100vw * (900 / 1920));
  color: #000000;
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
    width: calc(100vw * (319 / 393));
    margin: calc(100vw * (20 / 393)) 0;
  }
`

const SponsorButton = styled.button`
  width: calc(100vw * (250 / 1920));
  background: #c63359;
  color: #fffcfa;
  font-family: Space Grotesk;
  font-size: calc(100vw * (25 / 1920));
  font-weight: 400;
  border-radius: calc(100vw * (15 / 1920));
  height: calc(100vw * (67 / 1920));
  border: none;

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e76c79;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
    width: calc(100vw * (200 / 393));
    height: calc(100vw * (40 / 393));
    border-radius: calc(100vw * (5 / 393));
    margin-bottom: calc(100vw * 40 / 393);
  }
`

// const Spotlight = styled.div`
//   position: absolute;
//   top: calc(100vw * (100 / 1280));
//   left: ${props => (props.direction === 'left' ? '0' : 'none')};
//   right: ${props => (props.direction === 'right' ? '0' : 'none')};
//   width: 100%;
//   aspect-ratio: 808 / 600;
//   background-image: url('/assets/images/sponsor_spotlight.svg');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   z-index: 1;

//   transform: ${props => (props.direction === 'left' ? 'scaleX(-1)' : 'none')};

//   ${p => p.theme.mediaQueries.mobile} {
//     top: calc(100vw * (250 / 487));
//   }
// `

// const SPONSOR_IMAGE_OVERRIDES = {
//   TELUS: '/assets/images/telus.png',
//   CSE: '/assets/images/cse.png',
//   Deloitte: '/assets/images/deloitte.png',
//   Warp: '/assets/images/warp.png',
// }

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])
  const [carouselSponsors, setCarouselSponsors] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  useEffect(async () => {
    const data = await fireDb.getCollection('cmd-f2026', 'Sponsors')
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
        // imgURL: SPONSOR_IMAGE_OVERRIDES[sponsor.name] || sponsor.imgURL,
        imgURL: sponsor.imgURL,
      }))
      setSponsors(modifiedSponsors)
    }
  }, [])

  return (
    <SponsorsContainer>
      {/* <Spotlight direction="left" />
      <Spotlight direction="right" /> */}
      <Title id="sponsors">Our 2026 Sponsors</Title>
      <Description>
        cmd-f is always looking for new ventures, opportunities, and connections. If you are interested in sponsoring
        us, working with us, or speaking at one of our events, shoot us an email at sponsorship@nwplus.io
      </Description>
      <SponsorButton
        onClick={() => {
          window.location.href = 'mailto:sponsorship@nwplus.io'
        }}
      >
        Sponsor us!
      </SponsorButton>
      {/* <SwipeDescription>Swipe on the TV screen to read about our sponsors</SwipeDescription> */}
      {!isMobile ? (
        <>
          {carouselSponsors.length > 0 && <Carousel sponsors={carouselSponsors} />}
          <SponsorsGrid sponsors={sponsors} />
        </>
      ) : (
        <>
          <Description>
            To view our current full list of sponsors, please view this website on desktop. We are still working on the
            mobile version!
          </Description>
        </>
      )}
    </SponsorsContainer>
  )
}

export default Sponsors
