import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import styled from 'styled-components'
import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import About from 'src/sections/About'
import Stats from 'src/sections/Stats'
import Gallery from 'src/sections/Gallery'
import Projects from 'src/sections/Projects'
import Values from 'src/sections/Values'
// import LoadingScreen from '../components/LoadingScreen'

import Hero from '../sections/Hero'
import NavigationBar from '../components/NavigationBar'

// const HalfContainer = styled.div`
//   background-color: #2a2218;
//   position: relative;
//   width: 100%;
// `

// const ContentContainer = styled.div`
//   top: 150vh;

//   ${p => p.theme.mediaQueries.mobile} {
//     top: 0;
//     min-height: 200vh;
//   }
// `

// const MiddleSectionsContainer = styled.div`
//   position: relative;
//   background-image: url(/assets/images/middle_background.jpg);
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   object-fit: cover;

//   width: 100%;
//   aspect-ratio: 1280/2303;

//   ${p => p.theme.mediaQueries.tablet} {
//     background-image: url(/assets/images/middle_background_tablet.jpg);
//     aspect-ratio: 834/2870;
//   }

//   ${p => p.theme.mediaQueries.mobile} {
//     background-image: url(/assets/images/middle_background_mobile.jpg);
//     aspect-ratio: 487/3470;
//   }
// `

// const FaqSponsorsContainer = styled.div`
//   background-image: url(/assets/images/faq_sponsors_background.svg);
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   object-fit: cover;

//   width: 100%;
//   z-index: -1;

//   display: flex;
//   flex-direction: column;
//   gap: 10rem;
//   height: auto;
// `

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vw * (16955 / 1512));
  overflow-x: hidden;
  overflow-y: visible;
`

const BackgroundLayer = styled.div`
  position: absolute;
  top: -4vw;
  left: 0;
  width: 100%;
  height: calc(100vw * (16955 / 1512));
  background-image: url('/assets/images/hero_background.svg');
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: visible;
`

export default function Index({ title }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Western Canada's largest hackathon celebrating underrepresented genders in tech."
        />
        <meta property="og:image" content="/og_preview.png" />
      </Head>
      {/* <Banner buttonLink="info.html" /> */}
      {/* <NavigationBar bannerExists /> */}

      {/* <LoadingScreen /> */}

      <PageWrapper>
        <BackgroundLayer aria-hidden="true" />
        <ContentLayer>
          <NavigationBar />
          <Hero />
          <About />
          <Values />
          <Stats />
          <Projects />
          <Gallery />
          <Faq />
          <Sponsors />
          <Footer />
        </ContentLayer>
      </PageWrapper>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'cmd-f 2026',
    }, // will be passed to the page component as props
  }
}
