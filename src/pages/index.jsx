import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import styled from 'styled-components'
import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import About from 'src/sections/About'
import Stats from 'src/sections/Stats'
// import Gallery from 'src/sections/Gallery'
import Projects from 'src/sections/Projects'
import Testimonials from 'src/sections/Testimonials'

import Hero from 'src/sections/Hero'
import NavigationBar from '../components/NavigationBar'

const HalfContainer = styled.div`
  position: relative;
  width: 100%;
`

const ContentContainer = styled.div`
  top: 150vh;

  ${p => p.theme.mediaQueries.mobile} {
    top: 0;
    min-height: 200vh;
  }
`

const FaqSponsorsContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  width: 100%;
  z-index: -1;

  display: flex;
  flex-direction: column;
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
        <meta name="description" content="Join us at nwHacks 2027!" />
        <meta property="og:image" content="/og_preview.png" />
      </Head>

      <NavigationBar />

      <HalfContainer>
        <Hero />

        <ContentContainer>
          <About />
          <Stats />

          <Testimonials />
          <Projects />

          <FaqSponsorsContainer>
            <Faq />
            <Sponsors />
          </FaqSponsorsContainer>
          <Footer />
        </ContentContainer>
      </HalfContainer>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'nwHacks 2026',
    },
  }
}
