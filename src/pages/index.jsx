import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import styled from 'styled-components'
import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import About from 'src/sections/About'
// import Track from 'src/sections/Tracks'
// import Stats from 'src/sections/Stats'
import Workshops from 'src/sections/Workshops'
import Projects from 'src/sections/Projects'
import Separator from 'src/components/Separator'
import Testimonials from 'src/sections/Testimonials'
// import LoadingScreen from '../components/LoadingScreen'

// import MainGraphics from '@assets/images/BackgroundWithoutHero.svg'
import MainGraphicsMobile from '@assets/images/mobile/MainBackground.svg'

import Hero from '../components/Hero'
import NavigationBar from '../components/NavigationBar'

const HalfContainer = styled.div`
  background-color: #2a2218;
  position: relative;
  width: 100%;

  // ${p => p.theme.mediaQueries.mobile} {
  //   background: url(${MainGraphicsMobile});
  //   background-repeat: no-repeat;
  //   background-position: top center;
  //   background-size: cover;
  //   aspect-ratio: 414/8363;
  //   min-width: 100%;
  // }
`

const ContentContainer = styled.div`
  top: 150vh;
`

const MiddleSectionsContainer = styled.div`
  position: relative;
  background-image: url(/assets/images/middle_background.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  width: 100%;
  aspect-ratio: 1280/2303;
`

const FaqSponsorsContainer = styled.div`
  background-image: url(/assets/images/faq_sponsors_background.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  width: 100%;
  z-index: -1;

  display: flex;
  flex-direction: column;
  gap: 10rem;
  height: auto;
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
          <About />
          <Separator />

          <MiddleSectionsContainer>
            {/* <Stats /> */}
            <Workshops />
          </MiddleSectionsContainer>
          <Separator />
          <Projects />
          <Separator />
          <Testimonials />
          <Separator />
          {/* <Track /> */}
          <FaqSponsorsContainer>
            <Faq />
            <Sponsors />
          </FaqSponsorsContainer>
          <Separator />
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
