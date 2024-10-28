import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import HeroBackground from './HeroBackground'
import RegistrationCountdown from './RegistrationCountdown'
import MuseumButton from './MuseumButton'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider'

gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1280/901;
  z-index: 10;
`

const DummySpacerDiv = styled.div`
  aspect-ratio: 1280/909;
  width: 100%;
  z-index: -10;
`

const MuseumHeader = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100vw * (185 / 1280));
  transform: translate(-50%, -50%) perspective(1000px) rotateX(8deg);
  text-align: center;
  font-family: 'LT Museum';
  color: #1f1f1f;
`

const Title = styled.p`
  font-weight: 900;
  font-size: calc(100vw * (48 / 1280));
`

const TitleSponsor = styled.p`
  font-weight: 700;
  font-size: calc(100vw * (16 / 1280));
`

const Description = styled.p`
  font-weight: 700;
  font-size: calc(100vw * (16 / 1280));
`

const Date = styled.p`
  margin-top: calc(100vw * (16 / 1280));
  font-family: 'LT Museum';
  font-weight: 500;
  font-size: calc(100vw * (16 / 1280));
`

const LeftPillar = styled.div`
  position: absolute;
  left: calc(100vw * (202 / 1280));
  top: calc(100vw * (280 / 1280));
  transform: perspective(1000px) rotateX(8deg) skewX(-6deg);
`

const Hero = () => {
  const heroRef = useRef(null)
  const [shouldAnimate, setShouldAnimate] = useState(true)
  const tlRef = useRef(null) // Reference to store the timeline

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setShouldAnimate(width >= SCREEN_BREAKPOINTS.desktop)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const initScrollTrigger = () => {
      const svg = hero.querySelector('svg')
      const door = hero.querySelector('#door')

      if (!door || !svg) return

      const svgWidth = 1280
      const svgHeight = 901

      // Get door's position within SVG coordinate space
      const doorBBox = door.getBBox()
      const doorCenterX = doorBBox.x + doorBBox.width / 2
      const doorCenterY = doorBBox.y + doorBBox.height / 2

      // Calculate the transform origin based on door position
      const transformOriginX = (doorCenterX / svgWidth) * 100
      const transformOriginY = (doorCenterY / svgHeight) * 100

      gsap.set(hero, {
        transformOrigin: `${transformOriginX}% ${transformOriginY}%`,
      })

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.25,
          onLeave: () => {
            gsap.set(hero, { autoAlpha: 0 })
          },
          onEnterBack: () => {
            gsap.to(hero, {
              autoAlpha: 1,
              duration: 0.25,
              overwrite: 'auto',
            })
          },
          fastScrollEnd: true,
        },
      })

      tlRef.current.to(
        hero.querySelector(MuseumHeader), // Ensure the selector matches the DOM
        {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        0
      )

      tlRef.current.to(
        hero,
        {
          scale: 15,
          duration: 1,
          ease: 'power2.inOut',
        },
        0
      )

      tlRef.current.to(
        hero,
        {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        '>-0.3'
      )
    }

    if (shouldAnimate) {
      initScrollTrigger()
    } else {
      if (tlRef.current) {
        tlRef.current.kill()
        tlRef.current = null
      }
      ScrollTrigger.refresh()
      gsap.set(hero, { clearProps: 'all' })
    }

    return () => {
      if (tlRef.current) {
        tlRef.current.kill()
        tlRef.current = null
      }
    }
  }, [shouldAnimate])

  return (
    <>
        <HeroContainer ref={heroRef}>
        <HeroBackground />
        <MuseumHeader>
          <Title>nwHacks</Title>
          <TitleSponsor>powered by Aquareum</TitleSponsor>
          <Description>Western Canada's largest hackathon</Description>
          <Date>Jan 13-15, 2025 | UBC Life Science Institute</Date>
        </MuseumHeader>
        <LeftPillar>
          <RegistrationCountdown />
        </LeftPillar>
        {/* <RightPillar>
          <SponsorText>Sponsored by</SponsorText>
          <SponsorButton> Sponsor Us </SponsorButton>
        </RightPillar> */}

        <MuseumButton top={455} left={435} topText="Become a" bottomText="Mentor" href="" />
        <MuseumButton top={430} topText="Apply as a" bottomText="Hacker" href="https://portal.nwplus.io" />
        <MuseumButton top={455} left={700} topText="Become a" bottomText="Volunteer" href="" />
      </HeroContainer>
      <DummySpacerDiv />
    </>
  )
}

export default Hero
