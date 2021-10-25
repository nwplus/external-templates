import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import Button from '@components/Button'
// import fireDb from '@utilities/firebase'
import styled from "styled-components";
import Footer from '@components/Footer'
import NavBar from '@components/Navbar'
import { Body, Header1, Header2, Header3 } from "@components/Typography";
import EventBox from '@components/EventBox'
import FaqBox from '@components/FaqBox'
import Stats from '@components/Stats'
import Welcome from '@sections/Welcome';
import Register from 'src/sections/Register';

// Footer component needs space above it to not be cut off
const DummyContainer = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  background-color: #3D3F59;
  border-radius: 8px;
  height: 200px;
  width: 800px;
  display: flex;
`

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
      <Register />
      <Welcome />
      <Container>
        <NavBar />
        <Button width='257px' height='60px' backgroundColor='#224B5C' borderRadius='8px' textColor='#AFBFE5' isHover>
          Register Now
        </Button>
        <Button width='129px' height='44px' backgroundColor='#224B5C' borderRadius='100px' textColor='#2C2543' isGradient>
          Live Portal
        </Button>
        <Button width='312px' height='60px' backgroundColor='#FFFFFF' borderRadius='8px' textColor='#0D3153' isHover>
          Become a Sponsor
        </Button>
      </Container>
      <div>
        <FaqBox />
        <Stats />
        <Header1>Large Title</Header1>
        <Header2>Title 1</Header2>
        <Header3>Title 2</Header3>
        <Body>Some long lorem ipsum body text that will probably never see the light of day but that is a-ok.</Body>
      </div>
      <EventBox title="Learn" dateString="Nov. 6, 2021" body="A day of workshops and skill building. We make the entry into the tech field less daunting." />
      {/* Components Ends */}
      <DummyContainer />
      <Footer />
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
