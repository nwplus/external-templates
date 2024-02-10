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

import NavigationBar from 'src/components/NavigationBar'
import LearnSlide from 'src/mobile_slides/LearnSlide'

import HeroSlide from 'src/mobile_slides/HeroSlide'
import EncouragementSlide from 'src/mobile_slides/EncouragementSlide'
import AboutSlide from 'src/mobile_slides/AboutSlide'
import ConfidenceSlide from 'src/mobile_slides/ConfidenceSlide'
import CommunitySlide from 'src/mobile_slides/CommunitySlide'
import EducationSlide from 'src/mobile_slides/EducationSlide'
import HealthSlide from 'src/mobile_slides/HealthSlide'
import SponsoredBySlide from 'src/mobile_slides/SponsoredBySlide'
import BigSponsorsSlide from 'src/mobile_slides/BigSponsorsSlide'
import SmallSponsorsSlide from 'src/mobile_slides/SmallSponsorsSlide'
import ContactSlide from 'src/mobile_slides/ContactSlide'
import LastSlide from 'src/mobile_slides/LastSlide'
import GeneralFaqSlide from 'src/mobile_slides/GeneralFaqSlide'
import TeamsFaqSlide from 'src/mobile_slides/TeamsFaqSlide'
import LastYearSlide from 'src/mobile_slides/LastYearSlide'
import StatisticsSlide from 'src/mobile_slides/StatisticsSlide'
import MapSlide from 'src/mobile_slides/MapSlide'
import ExploreSlide from 'src/mobile_slides/ExploreSlide'

import Hero from '../sections/Hero'
import Encouragement from '../sections/Encouragement'

import DesktopBackgroundImage from '../../public/assets/background/desktop_background.svg'
import MobileBackgroundImage from '../../public/assets/background/mobile_background.svg'

const Background = styled.img`
  top: 0;
  z-index: 0;
  position: absolute;
  user-select: none;
  height: 100%;
`

const MobileBackground = styled.img`
  position: absolute;
  top: -5vh;
  z-index: 0;
  user-select: none;
  width: 1900vw;
  min-width: 1900vw;
  max-width: 1900vw;
  text-align: center;
`

export default function Index({ title }) {
  const [isNavBarLight, setIsNavBarLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollX || document.documentElement.scrollX
      // const horizontalScrollContainer = document.getElementById('horizontal-scroll-container');
      // const scrollLeftTracker = document.getElementById('scroll-left-tracker');
      // console.log('offfset left property:', horizontalScrollContainer.scrollLeft);
      // const toLeft = event.deltaY < 0 && horizontalScrollContainer.scrollLeft > 0;
      // const toRight = event.deltaY > 0 && horizontalScrollContainer.scrollLeft < horizontalScrollContainer.scrollWidth - window.innerWidth;

      // if (toLeft || toRight) {
      //     event.preventDefault();
      //     horizontalScrollContainer.scrollLeft += event.deltaY;
      // }

      // event.preventDefault();
      // const horizontalScrollContainer = document.getElementById('horizontal-scroll-container');
      
      // horizontalScrollContainer.scrollLeft += event.deltaY;

      if (scrollOffset > 7.55 * window.innerHeight) {
        setIsNavBarLight(true);
      } else {
        setIsNavBarLight(false);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
        window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <div>
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
    <div className="mobile-root-container">
      <MobileBackground src={MobileBackgroundImage} />
      <NavigationBar />
      <HeroSlide />
      <EncouragementSlide />
      <AboutSlide />
      <MapSlide />
      <ConfidenceSlide />
      <LearnSlide />
      <ExploreSlide />
      <CommunitySlide />
      <EducationSlide />
      <HealthSlide />
      <LastYearSlide />
      <StatisticsSlide />
      <GeneralFaqSlide />
      <TeamsFaqSlide />
      <SponsoredBySlide />
      <BigSponsorsSlide />
      <SmallSponsorsSlide />
      <ContactSlide />
      <LastSlide />
    </div>
    <div className="root-container">
      <Background src={DesktopBackgroundImage} />
      <NavigationBar isLight={isNavBarLight} />
      <Hero />
      <Encouragement />
      <About/>
      <Values />
      <Tracks/>
      <Statistics />
      <FAQ/>
      <Sponsors/>
      <Footer />
    </div>
  </div>
}

export async function getStaticProps() {
  return {
    props: {
      title: 'cmd-f 2024',
    }, // will be passed to the page component as props
  }
}
