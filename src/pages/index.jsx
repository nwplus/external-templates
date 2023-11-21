import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import styled from 'styled-components'

import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import Countdown from 'src/sections/Countdown'
import About from 'src/sections/About'

import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

import MainGraphicsTop from '../assets/images/MainBackground.svg'
import MainGraphicsMobile from '../assets/images/mobile/MainBackground.svg'

import { BANNER_OFFSET_PX } from '../constants/measurements'

const HalfContainer = styled.div`
  min-height: calc(calc(3606 / 1440) * 100vw);
  position: relative;
  aspect-ratio: 1440 / 3606;
  width: 100%;
  top: ${BANNER_OFFSET_PX};

  ${p => p.theme.mediaQueries.mobile} {
    background: url(${MainGraphicsMobile}), linear-gradient(to bottom, #83f6f7, #bfeff0);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    aspect-ratio: 428/2661;
    min-width: 100%;
  }
`
const HalfBackgroundImage = styled.img`
  top: 0;
  z-index: 0;
  position: absolute;
  user-select: none;
  min-height: calc(calc(3606 / 1440) * 100vw);
  object-fit: cover;
  aspect-ratio: 1440 / 3606;
  width: 100%;

  @media-query (max-width: 1440px) {
    min-height: none;
  }

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

export default function Index({ title }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Western Canada’s largest (in-person) hackathon" />
        <meta property="og:image" content="/og_preview.png" />
      </Head>
      {/* Components Starts */}
      {/* <Banner buttonLink="info.html" /> */}
      {/* <NavigationBar bannerExists /> */}
      <NavigationBar />
      <HalfContainer>
        <HalfBackgroundImage src={MainGraphicsTop} alt="Background image" />
        <Hero />
        <About />
        <Countdown />
      </HalfContainer>
      <Faq />
      <Sponsors />
      <Footer />

      {/* Components Ends */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'nwHacks 2024',
    }, // will be passed to the page component as props
  }
}
