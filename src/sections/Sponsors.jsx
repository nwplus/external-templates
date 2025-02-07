import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import SponsorsGrid from '@components/SponsorsGrid'
import fireDb from '@utilities/firebase'
import Carousel from '../components/Carousel'

const SponsorsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (40 / 1920));
  margin-top: calc(100vw * (200 / 1920));
`

const Title = styled(Header2)`
  text-align: center;
  color: #a6321e;
  font-size: calc(100vw * (64 / 1920));
  font-family: Gloock;
  font-weight: 400;
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (40 / 393));
  }
`

const Description = styled.p`
  font-family: Poppins;
  font-weight: 500;
  font-size: calc(100vw * (20 / 1920));
  width: calc(100vw * (850 / 1920));
  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
    width: calc(100vw * (319 / 393));
    margin: calc(100vw * (20 / 393)) 0;
  }
`

const SponsorButton = styled.button`
  width: calc(100vw * (323 / 1920));
  background: #a6321e;
  color: #f0e9d7;
  font-family: Poppins;
  font-size: calc(100vw * (28 / 1920));
  font-weight: 700;
  border-radius: calc(100vw * (15 / 1920));
  height: calc(100vw * (67 / 1920));
  border: none;
  margin-bottom: calc(100vw * 40 / 1920);

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #456774;
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

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2025', 'Sponsors') // TODO: CHANGE TO CMD-F2025
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
      <Title id="sponsors">Sponsors</Title>
      <Description>
        nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in sponsoring
        us, working with us, or speaking at one of our events, shoot us an email at sponsorship@nwplus.io.
      </Description>
      <SponsorButton
        onClick={() => {
          window.location.href = 'mailto:sponsorship@nwplus.io'
        }}
      >
        Sponsor cmd-f
      </SponsorButton>
      {/* <SwipeDescription>Swipe on the TV screen to read about our sponsors</SwipeDescription> */}
      {carouselSponsors.length > 0 && <Carousel sponsors={carouselSponsors} />}
      <SponsorsGrid sponsors={sponsors} />
    </SponsorsContainer>
  )
}

export default Sponsors
