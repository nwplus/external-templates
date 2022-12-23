// implement a banner component that displays a message and a button

import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
  background: linear-gradient(92.58deg, #0defe1 0%, #78ff96 100%);
  position: absolute;
  z-index: 1;
  height: 134px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 64px;
  gap: 10px;
  color: #2c2543;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    padding-right: 100px;
    font-size: 20px;
  }
`

const BannerHeader = styled.div`
  font-weight: 700;
`

const BannerText = styled.div`
  font-weight: 400;
`

const LearnMore = styled.a`
  text-decoration: underline;
  color: #2c2543;
`

const Banner = ({ buttonLink }) => (
  <BannerContainer>
    <BannerHeader>IMPORTANT UPDATE:</BannerHeader>
    <BannerText>
      nwHacks 2023 is rescheduled to January 21-22, 2023. The event will still take place at the University of British
      Columbia (UBC).{' '}
      <span>
        <LearnMore href={buttonLink}>Learn more here.</LearnMore>
      </span>
    </BannerText>
  </BannerContainer>
)

export default Banner
