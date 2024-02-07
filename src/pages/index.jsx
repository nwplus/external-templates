import Head from 'next/head'
import { React, useEffect, useState } from 'react'
import GlobalStyles from '@styles/global'

import styled from 'styled-components'

import Sponsors from 'src/sections/Sponsors'
import About from 'src/sections/About'
import Values from 'src/sections/Values'
import Statistics from 'src/sections/Statistics'
import FAQ from 'src/sections/FAQ'
import Footer from 'src/sections/Footer'
import Tracks from 'src/sections/Tracks'

import NavBar from 'src/components/NavBar'
import Hero from '../sections/Hero'
import Encouragement from '../sections/Encouragement'

import BackgroundImage from '../../public/assets/background.svg'
import MobileBackgroundImage from '../../public/assets/mobile_background.svg'

import HeroSlide from 'src/mobile_slides/HeroSlide'

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

const MobileBackground = styled.img`
  position: absolute;
  top: 0;
  z-index: 0;
  user-select: none;
  height: 100%;
`

export default function Index({ title }) {
  const [isNavBarLight, setIsNavBarLight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollOffset = window.scrollX || document.documentElement.scrollX
  //     // const horizontalScrollContainer = document.getElementById('horizontal-scroll-container');
  //     // const scrollLeftTracker = document.getElementById('scroll-left-tracker');
  //     // console.log('offfset left property:', horizontalScrollContainer.scrollLeft);
  //     // const toLeft = event.deltaY < 0 && horizontalScrollContainer.scrollLeft > 0;
  //     // const toRight = event.deltaY > 0 && horizontalScrollContainer.scrollLeft < horizontalScrollContainer.scrollWidth - window.innerWidth;

  //     // if (toLeft || toRight) {
  //     //     event.preventDefault();
  //     //     horizontalScrollContainer.scrollLeft += event.deltaY;
  //     // }

  //     // event.preventDefault();
  //     // const horizontalScrollContainer = document.getElementById('horizontal-scroll-container');
      
  //     // horizontalScrollContainer.scrollLeft += event.deltaY;

  //     if (scrollOffset > 7.65 * window.innerHeight) {
  //       setIsNavBarLight(true);
  //     } else {
  //       setIsNavBarLight(false);
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll);

  //   return () => {
  //       window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);
  //   // Cleanup the event listener on component unmount
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const isMobileFixed = true;

  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap" rel="stylesheet" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Western Canada's largest hackathon celebrating underrepresented genders in tech`}
        />
        <meta property="og:image" content="/og_preview.png" />
      </Head>
      {isMobileFixed ? (
        <div className="mobile-root-container">
          <MobileBackground src={MobileBackgroundImage} />
          <HeroSlide />
          <HeroSlide />
          <HeroSlide />
        </div>
      ) : (
        <div className="root-container" id="horizontal-scroll-container">
          {/* Components Starts */}
          <Background src={BackgroundImage} />
          <NavBar isLight={isNavBarLight} />
          <Hero />
          <Encouragement />
          <About/>
          <Values />
          <Tracks/>
          <Statistics />
          <FAQ/>
          <Sponsors/>
          <Footer />
          {/* Components Ends */}
        </div>
      )}
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
