import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
// import fireDb from '@utilities/firebase'
import styled from "styled-components";
import Events from '@sections/Events';
import Footer from '@components/Footer'
import NavBar from '@components/Navbar'
import Welcome from '@sections/Welcome';

// Footer component needs space above it to not be cut off
const DummyContainer = styled.div`
  height: 100vh;
`;

export default function Index({ title }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        {/* Remove comment once title is set */}
        <title> {title} </title>
        {/* Remove comment once favicon is set */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove comment once description is written */}
        <meta
          name="description"
          content=""
        />
        {/* Remove comment once preview image is set */}
        <meta property="og:image" content="/preview.png" />
      </Head>
      {/* Components Starts */}
      <NavBar />
      <Welcome />
      <Events />
      <DummyContainer />
      <Footer />
      {/* Components Ends */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "example title"
    }, // will be passed to the page component as props
  }
}
