import Head from 'next/head'
import React from 'react'
import GlobalStyles from '@styles/global'
import Button from '@components/Button'
// import fireDb from '@utilities/firebase'
import { SectionContainer } from '@lib/Containers'
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${p => p.backgroundColor}
  background: ${p => p.backgroundColor}
  height: ${p => p.height}
  width: ${p => p.width}
  border-radius: ${p => p.borderRadius}
`;

export default function Index({ title }) {
  return (
    <SectionContainer>
      <GlobalStyles />
      <Head>
        <div>hello</div>
        <button>
          ligma
        </button>
        <StyledButton width='257px' height='60px' backgroundColor='#224B5C' borderRadius='8px' textColor='#AFBFE5'>
          hasldfjl;dsai
        </StyledButton>
        <Button>
          ooooo
        </Button>
        <Button width='257px' height='60px' backgroundColor='#224B5C' borderRadius='8px' textColor='#AFBFE5'>
          Register Now
        </Button>
        <Button width='129px' height='44px' backgroundColor='#224B5C' borderRadius='100px' textColor='#2C2543'>
          Live Portal
        </Button>
        <Button width='312px' height='60px' backgroundColor='#FFFFFF' borderRadius='8px' textColor='#0D3153'>
          Become a Sponsor
        </Button>
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
