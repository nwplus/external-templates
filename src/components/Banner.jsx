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
  align-items: left;
  padding: 12px 64px;
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
  font-weight: 600;
`

const Banner = () => (
  <BannerContainer>
    <BannerHeader>IMPORTANT UPDATE:</BannerHeader>
    <BannerText>
      nwHacks 2024 is not currently accepting applications. The application form will open on November 20th, 2023.
    </BannerText>
  </BannerContainer>
)

export default Banner
