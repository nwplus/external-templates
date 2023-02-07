import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'

import Sponsors from 'src/sections/Sponsors'
import Footer from 'src/sections/Footer'
import Countdown from 'src/sections/Countdown'
import About from 'src/sections/About'
import Values from 'src/sections/Values'
import Statistics from 'src/sections/Statistics'

import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

export default function Index({ title }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Western Canada's largest hackathon celebrating underrepresented genders in tech`}
        />
        <meta property="og:image" content="/og_preview.png" />
      </Head>

      {/* Components Starts */}
      <NavigationBar />
      <Hero />
      <About />
      <Countdown />
      <Statistics />
      <Values />

      <Sponsors />
      <Footer />
      {/* Components Ends */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'cmd-f 2023',
    }, // will be passed to the page component as props
  }
}
