import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import Banner from '@components/Banner'

import Sponsors from 'src/sections/Sponsors'
import About from 'src/sections/About'
import Values from 'src/sections/Values'
import Statistics from 'src/sections/Statistics'
import FAQ from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'

import NavigationBar from '../components/NavigationBar'
import Hero from '../components/Hero'

export default function Index({ title }) {
  return (
    <div className="root-container">
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Western Canada's largest hackathon celebrating underrepresented genders in tech`}
        />
        <meta property="og:image" content="/og_preview.png" />
      </Head>

      {/* Components Starts */}
      {/* <Banner /> */}
      <NavigationBar bannerExists={false}/>
      <Hero />
      <About />
      <Statistics />
      <Values />
      <FAQ />
      <Sponsors />
      <Footer />
      {/* Components Ends */}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'cmd-f 2024',
    }, // will be passed to the page component as props
  }
}
