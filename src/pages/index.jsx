import Head from 'next/head'
import React, { useState } from 'react'
// import NavBar from '@components/Navbar'
// import fireDb from '@utilities/firebase'
// import { SectionContainer } from '@lib/Containers'
// import Stats from '@components/Stats'
import Footer from '@components/Footer'
import Stats from '@components/Stats'
import Info from 'src/sections/Info'
import Register from 'src/sections/Register'
import Sponsor from 'src/sections/Sponsor'
import Learn from 'src/sections/Learn'
import GlobalStyle from '../theme/GlobalStyle'
import Faq from '../sections/Faq'
import Testimonials from 'src/sections/Testimonials'

// eslint-disable-next-line react/prop-types
export default function Index ({ title }) {
  const [bodyHeight, setBodyHeight] = useState('455.5vw')

  const updateBodyHeight = (newHeight) => {
    setBodyHeight(newHeight)
  }

  return (
    <>
      <GlobalStyle bodyHeight={bodyHeight} />
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
        <meta property="og:image" content="/hackcamp2023meta.png" />
      </Head>

      {/* <NavBar /> */}
      <Register />
      <Info />
      <Learn />
      <Stats />
      <Testimonials />
      <Faq />
      <Sponsor updateBodyHeight={updateBodyHeight} />
      <Footer />
      {/* Components Ends */}
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      title: 'HackCamp 2024'
    } // will be passed to the page component as props
  }
}
