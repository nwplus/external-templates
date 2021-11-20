import Head from 'next/head'
import React from 'react'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import Button from '@components/Button'
import styled from "styled-components";
import NavBar from '@components/Navbar'
// import Stats from '@components/Stats'
import { Body, Header1, Header2, Header3 } from "@components/Typography";
import Footer from "@components/Footer"
import GlobalStyle from "../theme/GlobalStyle";

const Container = styled.div`
  background-color: #3D3F59;
  border-radius: 8px;
  height: 200px;
  width: 800px;
  display: flex;
`

export default function Index({ title }) {
  return (
    <SectionContainer>
      <GlobalStyle />
      <div>
        <Header1>Large Title</Header1>
        <Header2>Title 1</Header2>
        <Header3>Title 2</Header3>
        <Body>Some long lorem ipsum body text that will probably never see the light of day but that is a-ok.</Body>
      </div>
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
      <Footer />
      {/* Components Starts */}
      <NavBar />
      <Container>
        <Button width='137px' height='44px' backgroundColor='#FFD12C' borderRadius='100px' textColor='#FFFFFF' isHover>
          Apply Now!
        </Button>
        <Button width='137px' height='44px' backgroundColor='#FFD12C' borderRadius='100px' textColor='#FFFFFF' isHover>
          Live Portal
        </Button>
        <Button width='137px' height='44px' borderRadius='100px' isHover secondary>
          Be a Mentor!
        </Button>
      </Container>

      {/* Components Ends */}
    </SectionContainer >
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "example title"
    }, // will be passed to the page component as props
  }
}
