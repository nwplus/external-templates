import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import Button from '@components/Button'
import styled from "styled-components";

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
      <Container>
        <Button width='137px' height='44px' backgroundColor='#FFD12C' borderRadius='100px' textColor='#FFFFFF' isHover isGradient>
          Apply Now!
        </Button>
        <Button width='137px' height='44px' backgroundColor='#FFD12C' borderRadius='100px' textColor='#FFFFFF' isHover isGradient>
          Live Portal
        </Button>
        <Button width='137px' height='44px' backgroundColor='#FFD12C' borderRadius='100px' textColor='#FFFFFF' isHover>
          Be a Mentor!
        </Button>
      </Container>
      <span>ligma</span>
      {/* Components Ends */}
    </SectionContainer>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: "example title"
    }, // will be passed to the page component as props
  }
}
