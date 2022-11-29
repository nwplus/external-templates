import React from 'react'
import styled from 'styled-components'
import { useParallax } from 'react-scroll-parallax'
import { Stamp } from './Sponsors'
import FooterBackgroundImage from '../assets/images/FooterBackground.svg'

import VictoriaStamp from '../assets/images/stamps/Victoria.svg'
import WhistlerStamp from '../assets/images/stamps/Whistler.svg'

const FooterContainer = styled.div`
  position: relative;
  min-height: calc( calc(1556 / 1440) * 100vw) !important;
`

const FooterBackground = styled.img`
  bottom: 0;
  position: absolute;
  min-height: calc( calc(1163 / 1440) * 100vw) !important;
`

const Footer = () => {

  const stampPArr = [
    useParallax({ speed: 5 }),
    useParallax({ speed: 6 })
  ]

  const stamps = [
    {
      name: 'Victoria Stamp',
      imgSrc: VictoriaStamp,
      left: '-2rem'
    },
    {
      name: 'Whistler Stamp',
      imgSrc: WhistlerStamp,
      top: '20%',
      right: '-5rem'
    }
  ]

  return (
    <FooterContainer>
      <FooterBackground src={FooterBackgroundImage} alt="FAQ section background" />
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
    </FooterContainer>
  )
}

export default Footer