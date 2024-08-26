import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { SectionContainer } from '@lib/Containers'

const BgSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 1.25rem;
  min-height: 100vh;
  position: relative;

  width: 100%;
  aspect-ratio: 1440/1072;
  z-index: 17;
  overflow: hidden;

  /* background: #150c27; */

  ${p => p.theme.mediaQueries.mobile} {
    /* background: url('assets/mobile/faq/background.svg') #150C27; */
    aspect-ratio: 412/1359;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

const BgScroll = styled(SectionContainer)`
  grid-column: 1 / span 14;
  /* background: url('assets/background/faq/background.png'); */
  /* background-size: 100vw; */
  background-repeat: no-repeat;
  background-position: center top;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1440/1072;

  ${p => p.theme.mediaQueries.mobile} {
    background: none;
    aspect-ratio: 412/1359;
  }
`

const TestimonialsTitle = styled.div`
  background: url('assets/background/testimonials/testimonials-title.svg');
  background-size: 36vw;
  background-repeat: no-repeat;
  height: 12vw;
  width: 35.9vw;
  z-index: 1;
  position: absolute;
  top: 4vw;
  right: 10vw;
  left: 50%;
  transform: translateX(-50%);

  ${p => p.theme.mediaQueries.mobile} {
    transform: scale(0.8);
  }
`


export default function Testimonials() {
  
  return (
    <BgSectionContainer>
      <BgScroll />
      <TestimonialsTitle/>
    </BgSectionContainer>
  )
}