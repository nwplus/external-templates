import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import styled from 'styled-components'

import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import Countdown from 'src/sections/Countdown'
import About from 'src/sections/About'
import Track from 'src/sections/Tracks'
import Stats from 'src/sections/Stats'

// import LoadingScreen from '../components/LoadingScreen'
import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

import MainGraphics from '../assets/images/MainBackground.svg'
import MainGraphicsMobile from '../assets/images/mobile/MainBackground.svg'

import SusNuggetGif from '../assets/images/animations/nugget-sus.gif'
import RedVanImg from '../assets/images/red_van.svg'

const HalfContainer = styled.div`
  min-height: calc(calc(9229 / 1440) * 100vw);
  position: relative;
  aspect-ratio: 1440 / 9229px;
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
  top: 0;
  z-index: 0;
  position: absolute;
  user-select: none;
  min-height: calc(calc(9229 / 1440) * 100vw);
  object-fit: cover;
  width: 100%;

  @media-query (max-width: 1440px) {
    min-height: none;
  }

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const SusNuggetContainer = styled.img`
  position: absolute;
  bottom: 10.5%;
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
  bottom: 9%;
  width: 12%;
  height: auto;
  
  ${p => p.theme.mediaQueries.mobile} {
    bottom: 360px;
    width: 12%;
  }
`

export default function Index({ title }) {

  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Western Canada’s largest (in-person) hackathon" />
        <meta property="og:image" content="/og_preview.png" />
      </Head>
      {/* Components Starts */}
      {/* <Banner buttonLink="info.html" /> */}
      {/* <NavigationBar bannerExists /> */}

      {/* <LoadingScreen /> */}

      <NavigationBar />

      <HalfContainer>
        {/* add if statement, show mobile background if mobile */}
        <BackgroundImage src={MainGraphics} alt="Background image" />
        <SusNuggetContainer src={SusNuggetGif} alt="Nugget with eyes looking around" />
        <RedVanContainer src={RedVanImg} />

        <Hero />
        <About />
        <Countdown />
        <Stats />
        <Track />
        <Faq />
        <Sponsors />
        <Footer />
      </HalfContainer>
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
