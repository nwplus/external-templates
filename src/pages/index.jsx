import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
// import fireDb from '@utilities/firebase'
// import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

import Sponsors from 'src/sections/Sponsors'
import Faq from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import Countdown from 'src/sections/Countdown'
import About from 'src/sections/About'

import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

import logo from '../assets/logos/nwplus-logo.svg'
import MainGraphicsTop from '../assets/images/MainBackground.svg'

const HalfContainer = styled.div`
  position: relative;
  min-height: calc( calc(3606 / 1440) * 100vw);
`
const HalfBackgroundImage = styled.img`
  top: 0;
  z-index: 0;
  position: absolute;
  user-select: none;
  min-height: calc( calc(3606 / 1440) * 100vw);
  width: 100%;
`

export default function Index({ title }) {

  return (
    <>
      <GlobalStyles />
      <Head>
        {/* Remove comment once title is set */}
        <title>{title}</title>

        {/* Remove comment once favicon is set */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href={logo} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove comment once description is written */}
        <meta name="description" content="" />
        {/* Remove comment once preview image is set */}
        <meta property="og:image" content="/preview.png" />
      </Head>
      {/* Components Starts */}

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
      title: 'nwHacks 2023',
    }, // will be passed to the page component as props
  }
}
