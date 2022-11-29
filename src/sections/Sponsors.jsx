import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import SponsorBackgroundImage from '../assets/images/SponsorBackground.svg'
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
  min-height: calc( calc(2050 / 1440) * 100vw) !important;
`

const SponsorsBackground = styled.img`
  top: 0;
  position: absolute;
  min-height: calc( calc(1282 / 1440) * 100vw) !important;
`

export const Stamp = styled.img`
  z-index: 4;
  position: absolute;
  ${p => p.top && `top: ${p.top};`}
  ${p => p.bottom && `bottom: ${p.bottom};`}
  ${p => p.right && `right: ${p.right};`}
  ${p => p.left && `left: ${p.left};`}

  transition: all 0.2s; 
  // &:hover {
  //   transform: scale(1.1);
  // }
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
`

const Seabus = styled.img`
  margin-bottom: 2rem;
`

const SeabusRipples = styled.img`
  margin-left: -15%;
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

  return (
    <SponsorsContainer>
      <SponsorsBackground src={SponsorBackgroundImage} alt="Sponsor section background" />
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
    </SponsorsContainer>
  )
}

export default Sponsors