import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'

import logo from '../assets/logos/nwplus-logo.svg'
import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

import About from '../components/About'

// import MainGraphics from '../assets/images/MainImage.svg'

export default function Index({ title }) {
  const BigBoy = styled.div`
    /*min-height: calc( calc(7452 / 1440) * 100vw) !important;*/
    width: 100vw;
    position: relative;
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
      {/* Rough layout Guide start */}

      <NavigationBar />
      {/* Header section */}
      {/* Hero section */}
      <Hero />
      {/* TEMP HEADER */}

      {/* About section */}
      <About />
      {/* Registration Countdown timer */}
      {/* Background */}
      {/* FAQ */}
      {/* Sponsors */}
      {/* Footer */}

      {/* Rough layout Guide end */}
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
