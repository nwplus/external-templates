import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header2 } from '@components/Typography'
import SponsorsGrid from '@components/SponsorsGrid'
import fireDb from '@utilities/firebase'
import Carousel from '../components/Carousel'

const SponsorsContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (100 / 1280));
`

const Title = styled(Header2)`
  text-align: center;
  color: #fff;
  font-size: calc(100vw * (56 / 1280));
`

const Spotlight = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.direction === 'left' ? '0' : 'none')};
  right: ${props => (props.direction === 'right' ? '0' : 'none')};
  width: 100%;
  aspect-ratio: 808 / 600;
  background-image: url('/assets/images/sponsor_spotlight.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  transform: ${props => (props.direction === 'left' ? 'scaleX(-1)' : 'none')};
`

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])
  const [carouselSponsors, setCarouselSponsors] = useState([])

  useEffect(async () => {
    const data = await fireDb.getCollection('nwHacks2025', 'Sponsors')
    if (data) {
      setSponsors(data)
      setCarouselSponsors(data.filter(child => child.blurb !== undefined && child.blurb !== ''))
    }
  }, [])

  return (
    <SponsorsContainer>
      <Spotlight direction="left" />
      <Spotlight direction="right" />
      <Title id="sponsors">SPONSORS</Title>
      {carouselSponsors.length > 0 && <Carousel sponsors={carouselSponsors} />}

      <SponsorsGrid sponsors={sponsors} />
    </SponsorsContainer>
  )
}

export default Sponsors
