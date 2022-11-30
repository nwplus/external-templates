import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import { Header2 } from '@components/Typography'
import SponsorsGrid from '@components/SponsorsGrid'
import Button from '@components/Button'
import fireDb from '@utilities/firebase'

import SponsorBackgroundImage from '../assets/images/SponsorBackground.svg'
import SponsorBackgroundMobile from '../assets/images/mobile/SponsorBackground.svg'
import DuckImage from '../assets/images/Duck.svg'
import DuckRipplesImage from '../assets/images/DuckRipples.svg'
import SeabusImage from '../assets/images/Seabus.svg'
import SeabusRipplesImage from '../assets/images/SeabusRipples.svg'

import ChinatownStamp from '../assets/images/stamps/Chinatown.svg'
import OlympicVillageStamp from '../assets/images/stamps/OlympicVillage.svg'
import WaterfrontStamp from '../assets/images/stamps/Waterfront.svg'
import GastownStamp from '../assets/images/stamps/Gastown.svg'

const SponsorsContainer = styled.div`
  position: relative;
  min-height: calc(calc(2050 / 1440) * 100vw);
  margin-top: -0.5rem;

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc( calc(488 / 428) * 100vw);
    background: linear-gradient(to bottom, #8486B8, #383E82);
  }
`

const SponsorsBackground = styled.img`
  top: 0;
  position: absolute;
  user-select: none;
  min-height: calc(calc(1282 / 1440) * 100vw);
  aspect-ratio: 1440 / 1282;
  width: 100%;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const SponsorsBackgroundMobile = styled.img`
  top: 0;
  position: absolute;
  user-select: none;
  min-height: calc( calc(488 / 428) * 100vw);
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

export const Stamp = styled.img`
  z-index: 4;
  position: absolute;
  ${p => p.top && `top: ${p.top};`}
  ${p => p.bottom && `bottom: ${p.bottom};`}
  ${p => p.right && `right: ${p.right};`}
  ${p => p.left && `left: ${p.left};`}

  transition: all 0.2s; 
  user-select: none;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const duckyAnimation = keyframes`
  0% {
    transform: rotateZ(-2deg) translateY(-3px);
  }
  50% {
    transform: rotateZ(2deg) translateY(0px);
  }
  100% {
    transform: rotateZ(-2deg) translateY(-3px);
  }
`

const DuckContainer = styled.div`
  position: absolute;
  right: 0;
  top: 5rem;
  display: flex;
  flex-direction: column;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Duck = styled.img`  
  animation-name: ${duckyAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`

const DuckRipples = styled.img`
  margin-top: -20%;
`

const SeabusContainer = styled.div`
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  top: 10rem;
  display: flex;
  align-items: flex-end;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Seabus = styled.img`
  margin-bottom: 2rem;
`

const SeabusRipples = styled.img`
  margin-left: -15%;
`

const StaticContainer = styled.div`
  top: 0;
  width: 100%;
  padding-top: calc(calc(750 / 1440) * 100vw);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(p) => p.theme.mediaQueries.mobile} {
    position: relative;
    padding-top: calc(calc(488 / 428) * 100vw);
  }
`

const StyledTitle = styled(Header2)`
  text-align: center;
  color: #FFF;
  font-size: 3rem;
  padding-top: 18rem;
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 3em;
    padding-top: 0;
  }
`

const PushinP = styled.p`
  color: #FFF;
  text-align: center;
  font-weight: 550;
  font-size: 1.1rem;
  width: 50vw;
  min-width: 500px;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 800px;
  padding-bottom: 2rem;
  
  ${(p) => p.theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    padding: 1.5rem 6vw 1rem 6vw;
  }
`

const Sponsors = () => {

  const stampPArr = [
    useParallax({ speed: 6 }),
    useParallax({ speed: 5 }),
    useParallax({ speed: 4 }),
    useParallax({ speed: 3 })
  ]

  const stamps = [
    {
      name: 'Chinatown Stamp',
      imgSrc: ChinatownStamp,
      top: '40%',
    },
    {
      name: 'Olympic Village Stamp',
      imgSrc: OlympicVillageStamp,
      top: '50%',
      right: '-7rem'
    },
    {
      name: 'Waterfront Stamp',
      imgSrc: WaterfrontStamp,
      bottom: '0',
      right: '7rem'
    },
    {
      name: 'Gastown Stamp',
      imgSrc: GastownStamp,
      bottom: '10%',
      left: '-5rem'
    },
  ]

  const [sponsors, setSponsors] = useState(null)

  useEffect(async () => {
    // use cmd-f2022 collection to test
    const data = await fireDb.getCollection('nwHacks2023', 'Sponsors')
    if (data) {
      setSponsors(data)
    }
  }, [])

  return (
    <SponsorsContainer>
      <SponsorsBackground src={SponsorBackgroundImage} alt="Sponsor section background" />
      <SponsorsBackgroundMobile src={SponsorBackgroundMobile} alt="Sponsor section background" />
      {stamps.map((item, index) => (
        <Stamp
          ref={stampPArr[index].ref}
          key={item.name}
          src={item.imgSrc}
          alt={item.name}
          top={item.top || null}
          right={item.right || null}
          bottom={item.bottom || null}
          left={item.left || null} />
      ))}
      <DuckContainer>
        <Duck src={DuckImage} alt="A cute large rubber ducky" />
        <DuckRipples src={DuckRipplesImage} alt="Ripples in the water caused by a big rubber ducky" />
      </DuckContainer>
      <SeabusContainer>
        <Seabus src={SeabusImage} alt="A seabus" />
        <SeabusRipples src={SeabusRipplesImage} alt="Ripples in the water caused by a seabus" />
      </SeabusContainer>
      <StaticContainer>
        <StyledTitle id="sponsors">
          Sponsors
        </StyledTitle>
        <PushinP>
          Sponsors make this event happen. If you are interested in working with us, joining us or speaking at one of our events, please reach out to us below!
        </PushinP>
        <Button
          variant="solid"
          href="mailto:sponsorship@nwplus.io">
          Sponsor nwHacks!
        </Button>
        <SponsorsGrid sponsors={sponsors} />
      </StaticContainer>
    </SponsorsContainer>
  )
}

export default Sponsors