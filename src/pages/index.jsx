import Head from 'next/head'
import { React, useEffect } from 'react'
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
import styled from 'styled-components'

import BackgroundImage from '../../public/assets/background.svg'

const Background = styled.img`
  top: 0;
  z-index: 0;
  position: absolute;
  user-select: none;
  height: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

export default function Index({ title }) {

  useEffect(() => {
    const handleScroll = (event) => {
        const horizontalScrollContainer = document.getElementById('horizontal-scroll-container');
        const toLeft = event.deltaY < 0 && horizontalScrollContainer.scrollLeft > 0;
        const toRight = event.deltaY > 0 && horizontalScrollContainer.scrollLeft < horizontalScrollContainer.scrollWidth - window.innerWidth;

        if (toLeft || toRight) {
            event.preventDefault();
            horizontalScrollContainer.scrollLeft += event.deltaY;
        }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
        window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="root-container" id="horizontal-scroll-container">
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
      <Background src={BackgroundImage} />
      {/* <NavigationBar bannerExists={false}/> */}
      {/* <Hero />
      <About />
      <Statistics />
      <Values />
      <FAQ />
      <Sponsors />
      <Footer /> */}
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
