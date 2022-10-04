import Head from 'next/head'
import React from 'react'
// import fireDb from '@utilities/firebase'
// import { SectionContainer } from '@lib/Containers'
import NavBar from '@components/Navbar'
// import Stats from '@components/Stats'
import Footer from '@components/Footer'
import Stats from '@components/Stats'
import Info from 'src/sections/Info'
import Register from 'src/sections/Register'
import Sponsor from 'src/sections/Sponsor'
import Count from 'src/sections/Count'
import Learn from 'src/sections/Learn'
import GlobalStyle from '../theme/GlobalStyle'
import Faq from '../sections/Faq'

export default function Index ({ title }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Remove comment once title is set */}
        <title> {title} </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This year, we are bringing you a 2-day in-person event where
          participants can learn new skills, connect with fellow tech
          enthusiasts, and build solutions to tackle challenges together."
        />
        <meta property="og:image" content="/hc-og.png" />
      </Head>

      {/* Components Starts */}

      <NavBar />
      <Register />
      <Count />
      <Info />
      <Learn />
      <Stats />
      <Faq />
      <Sponsor />
      <Footer />
      {/* Components Ends */}

    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      title: 'HackCamp 2022'
    } // will be passed to the page component as props
  }
}
