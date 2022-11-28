import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

import Sponsors from 'src/sections/Sponsors'
import FAQ from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'

import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

import logo from '../assets/logos/nwplus-logo.svg'
import MainGraphicsTop from '../assets/images/MainBackground.svg'

export default function Index({ title }) {

  const HalfContainer = styled.div`
    position: relative;
    min-height: calc( calc(3606 / 1440) * 100vw) !important;
  `
  const HalfBackgroundImage = styled.img`
    top: 0;
    position: absolute;
	  min-height: calc( calc(3606 / 1440) * 100vw) !important;
  `

  return (
    <SectionContainer>
      <GlobalStyles />
      <Head>
        {/* Remove comment once title is set */}
        {/* <title> {title} </title> */}
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
        {/* About section */}
        {/* Registration Countdown timer */}
        {/* Background (Stats are in the image) */}
      </HalfContainer>
      <FAQ />
      <Sponsors />
      <Footer />



      {/* Components Ends */}
    </SectionContainer>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'nwHacks 2023',
    }, // will be passed to the page component as props
  }
}
