import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
// import fireDb from '@utilities/firebase'
import Events from '@sections/Events';
import Faq from '@sections/Faq';
import Footer from '@components/Footer';
import NavBar from '@components/Navbar';
import Stats1 from '@sections/Stats1';
import Sponsors from '@sections/Sponsors';
import Welcome from '@sections/Welcome';
import Register from 'src/sections/Register';

export default function Index({ title }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title> {title} </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="At HackCamp, we welcome hundreds of tech newbies to learn new skills, build cool projects, and share new experiences! We are part of an international celebration of diversity, accessibility, and inclusivity for newcomers in the Greater Vancouver hackathon and tech community."
        />
        <meta property="og:image" content="/meta-image.png" />
      </Head>
      {/* Components Starts */}
      <NavBar />
      <Register />
      <Welcome />
      <Events />
      <Stats1 />
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
      title: "HackCamp 2021"
    }, // will be passed to the page component as props
  }
}
