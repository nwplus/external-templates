import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import styled from 'styled-components'
import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import Countdown from 'src/sections/Countdown'
import About from 'src/sections/About'
// import Track from 'src/sections/Tracks'
import Stats from 'src/sections/Stats'

// import LoadingScreen from '../components/LoadingScreen'

import MainGraphics from '@assets/images/BackgroundWithoutHero.svg'
import MainGraphicsMobile from '@assets/images/mobile/MainBackground.svg'

import SusNuggetGif from '@assets/images/animations/nugget-sus.gif'
import RedVanImg from '@assets/images/red_van.svg'
import Hero from '../components/Hero'
import NavigationBar from '../components/NavigationBar'

const HalfContainer = styled.div`
  background-color: #2a2218;
  min-height: calc(calc(10525 / 1280) * 100vw);
  position: relative;
  aspect-ratio: 1440 / 10525px;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    background: url(${MainGraphicsMobile});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    min-height: calc(calc(8363 / 414) * 100vw);
    aspect-ratio: 414/8363;
    min-width: 100%;
  }
`
const BackgroundImage = styled.img`
  top: calc(calc(785 / 1280) * 100vw);
  z-index: 0;
  user-select: none;
  min-height: calc(calc(9740 / 1280) * 100vw);
  object-fit: cover;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const SusNuggetContainer = styled.img`
  position: absolute;
  bottom: 1650px;
  width: 15%;
  height: auto;
  left: 37.5%;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 5.8%;
    left: 45%;
    width: 18%;
  }
`

const RedVanContainer = styled.img`
  position: absolute;
  bottom: 1300px;
  width: 12%;
  height: auto;

  ${p => p.theme.mediaQueries.mobile} {
    bottom: 360px;
    width: 12%;
  }
`

const ContentContainer = styled.div`
  top: 150vh;
  z-index: 1;
`

export default function Index({ title }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Western Canada's largest (in-person) hackathon" />
        <meta property="og:image" content="/og_preview.png" />
      </Head>
      {/* Components Starts */}
      {/* <Banner buttonLink="info.html" /> */}
      {/* <NavigationBar bannerExists /> */}

      {/* <LoadingScreen /> */}

      <NavigationBar />

      <HalfContainer>
        <Hero />

        <ContentContainer>
          <BackgroundImage src={MainGraphics} alt="Background image" />

          <About />
          <Countdown />
          <Stats />
          {/* <Track /> */}
          <Faq />
          <Sponsors />
          <Footer />
        </ContentContainer>
      </HalfContainer>
      {/* Components Ends */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'nwHacks 2025',
    }, // will be passed to the page component as props
  }
}
