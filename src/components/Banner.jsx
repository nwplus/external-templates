// implement a banner component that displays a message and a button

import React from 'react'
import styled from 'styled-components'

const BannerContainer = styled.div`
  background: linear-gradient(92.58deg, #0defe1 0%, #78ff96 100%);
  transform: translateY(-120px);
  position: fixed;
  z-index: 9999;
  height: 120px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-weight: 400;
`


const Banner = () => (
  <BannerContainer>
    <BannerHeader>IMPORTANT UPDATE:</BannerHeader>
    <BannerText>
      Applications have been extended until Monday, March 6 11:59 PM and acceptances will be sent out on a rolling basis.
    </BannerText>
  </BannerContainer>
)

export default Banner