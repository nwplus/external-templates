import Head from 'next/head'
import React from 'react'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import NavBar from '@components/Navbar'
// import Stats from '@components/Stats'
import Footer from "@components/Footer"
import Stats from '@components/Stats';
import Info from 'src/sections/Info';
import Register from 'src/sections/Register';
import Sponsor from 'src/sections/Sponsor'
import GlobalStyle from "../theme/GlobalStyle";
import Faq from '../sections/Faq'

export default function Index({ title }) {
  return (
    <SectionContainer>
      <GlobalStyle />
      <Head>
        {/* Remove comment once title is set */}
        <title> {title} </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="nwHacks 2022 is the largest hackathon in Western Canada, located at the University of British Columbia in Vancouver, BC. Be part of this amazing gathering of developers, engineers, and designers from around the world. nwHacks is part of nwPlus, a team committed to supporting tech communities in BC and beyond."
        />
        <meta property="og:image" content="/nwhacks-metaimage.png" />
      </Head>

      {/* Components Starts */}
      <NavBar />
      <Register />
      <Info />
      <Stats />
      <Faq />
      <Sponsor />
      <Footer />
      {/* Components Ends */}

    </SectionContainer >
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "nwHacks 2022"
    }, // will be passed to the page component as props
  }
}
