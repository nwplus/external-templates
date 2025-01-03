import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import HeroBackground from './HeroBackground'
import RegistrationCountdown from './RegistrationCountdown'
import MuseumButton from './MuseumButton'
import HeroSponsors from './HeroSponsors'
import NwPlusLogo from './NwPlusLogo'
import { SCREEN_BREAKPOINTS } from '../theme/ThemeProvider'

gsap.registerPlugin(ScrollTrigger)

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1280/901;
  z-index: 10;

  ${p => p.theme.mediaQueries.mobile} {
    position: relative;
    aspect-ratio: 487/935;
    min-height: calc(100vw * (935 / 487));
  }
`

const HeroBackgroundContainer = styled.div`
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const HeroBackgroundMobile = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url(./assets/images/mobile_hero_background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const Nugget = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw * (95 / 487));
    top: calc(100vw * (755 / 487));
  }
`

const LogoContainer = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    top: calc(100vw * (210 / 1280));
    transform: translate(-50%, -50%);
    width: calc(100vw * (60 / 487));
    aspect-ratio: 44/50;
  }
`

const DummySpacerDiv = styled.div`
  aspect-ratio: 1280/909;
  width: 100%;
  z-index: -10;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MuseumHeader = styled.div`
  text-align: center;
  font-family: 'LT Museum';
  color: #3a2e21;

  position: absolute;
  left: 50%;
  top: calc(100vw * (185 / 1280));
  transform: translate(-50%, -50%) perspective(1000px) rotateX(8deg);
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (190 / 487));
    transform: translate(-50%, -50%);
  }
`

const Title = styled.p`
  font-weight: 900;
  font-size: calc(100vw * (48 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (66 / 487));
  }
`

const TitleSponsor = styled.p`
  font-weight: 700;
  font-size: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 487));
  }
`

const Description = styled.p`
  font-weight: 700;
  font-size: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (10 / 487));
    font-size: calc(100vw * (20 / 487));
    font-weight: 500;
  }
`

const Date = styled.p`
  font-family: 'LT Museum';
  font-weight: 500;
  margin-top: calc(100vw * (16 / 1280));
  font-size: calc(100vw * (16 / 1280));

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (4 / 487));
    font-size: calc(100vw * (20 / 487));
  }
`

const MobileRegistrationCountdownContainer = styled.div`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100vw * (332 / 487));
    width: 100%;
  }
`

const LeftPillar = styled.div`
  position: absolute;
  left: calc(100vw * (202 / 1280));
  top: calc(100vw * (280 / 1280));
  transform: perspective(2000px) rotateX(8.5deg) skewX(-7.5deg);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MentorButton = styled.a`
  position: absolute;
  left: calc(100vw * (435 / 1280));
  top: calc(100vw * (455 / 1280));

  cursor: pointer;
  text-decoration: none;

  ${p => p.theme.mediaQueries.mobile} {
    left: calc(100vw * (56 / 487));
    top: calc(100vw * (588 / 487));
    transform: perspective(2000px) rotateX(0deg) skewX(-4deg);
  }
`

const HackerButton = styled.a`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100vw * (430 / 1280));

  cursor: pointer;
  text-decoration: none;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (530 / 487));
  }
`

const VolunteerButton = styled.a`
  position: absolute;
  left: calc(100vw * (700 / 1280));
  top: calc(100vw * (455 / 1280));

  cursor: pointer;
  text-decoration: none;

  ${p => p.theme.mediaQueries.mobile} {
    left: calc(100vw * (283 / 487));
    top: calc(100vw * (588 / 487));
    transform: perspective(2000px) rotateX(0deg) skewX(4deg);
  }
`

const RightPillar = styled.div`
  position: absolute;
  left: calc(100vw * (947 / 1280));
  top: calc(100vw * (280 / 1280));
  transform: perspective(2000px) rotateX(-8.5deg) skewX(8.5deg);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RightPillarInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw * (134 / 1280));
  height: calc(100vw * (240 / 1280));
`

const SponsorText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: calc(100vw * (20 / 1280));
  color: #51483e;
`

const SponsorButton = styled.a`
  cursor: pointer;
  text-decoration: none;
`

const MobileSponsorButton = styled(SponsorButton)`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100vw * (891 / 487));
  }
`

const Hero = () => {
  const heroRef = useRef(null)
  const tlRef = useRef(null)
  const svgWidth = 1280
  const svgHeight = 901

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(`(min-width: ${SCREEN_BREAKPOINTS.desktop}px)`, () => {
      const hero = heroRef.current
      if (!hero) return

      const initScrollTrigger = () => {
        const svg = hero.querySelector('svg')
        const door = hero.querySelector('#door')

        if (!door || !svg) return

        const doorBBox = door.getBBox()
        const doorCenterX = doorBBox.x + doorBBox.width / 2
        const doorCenterY = doorBBox.y + doorBBox.height / 2

        const transformOriginX = (doorCenterX / svgWidth) * 100
        const transformOriginY = (doorCenterY / svgHeight) * 100

        let scrollDistance = 120
        const aspectRatio = window.innerWidth / window.innerHeight

        if (aspectRatio <= 16 / 9) {
          scrollDistance = 95 + (25 * Math.min(aspectRatio - 11 / 9, 5 / 9)) / (5 / 9)
        }

        gsap.set(hero, {
          transformOrigin: `${transformOriginX}% ${transformOriginY}%`,
        })

        tlRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: `+=${scrollDistance}%`,
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
            pinSpacing: false,
          },
        })

        tlRef.current.to(
          hero.querySelector('.museum-header'),
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

      initScrollTrigger()

      // eslint-disable-next-line consistent-return
      return () => {
        if (tlRef.current) {
          tlRef.current.kill()
          tlRef.current = null
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        ScrollTrigger.refresh()
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <div id="home">
      <HeroContainer ref={heroRef}>
        <HeroBackgroundContainer>
          <HeroBackground />
        </HeroBackgroundContainer>
        <HeroBackgroundMobile />

        <Nugget src="./assets/images/nugget_hero.png" />

        <LogoContainer>
          <NwPlusLogo fill="#3A2E21" />
        </LogoContainer>

        <MuseumHeader className="museum-header">
          <Title>nwHacks</Title>
          <TitleSponsor>powered by Aquareum.tv</TitleSponsor>
          <Description>Western Canada&apos;s largest hackathon</Description>
          <Date>Jan 18-19, 2025 | UBC Life Science Institute</Date>
        </MuseumHeader>

        <MobileRegistrationCountdownContainer>
          <RegistrationCountdown />
        </MobileRegistrationCountdownContainer>

        <LeftPillar>
          <RegistrationCountdown />
        </LeftPillar>

        <MentorButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-KggS1ekHPklwNTMdc4xQyVAPwLjC4oLWg4EWvn2BEx5jQw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MuseumButton topText="Become a" bottomText="Mentor" />
        </MentorButton>
        <HackerButton href="https://portal.nwplus.io" target="_blank" rel="noopener noreferrer">
          <MuseumButton topText="Apply as a" bottomText="Hacker" />
        </HackerButton>
        <VolunteerButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSevOUAxpWWvyaL4w6Jq9VIqpfZA3y-Lmk_RcAQ68ifCqH7ztg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MuseumButton topText="Become a" bottomText="Volunteer" />
        </VolunteerButton>

        <RightPillar>
          <RightPillarInnerContainer>
            <SponsorText>Sponsored by</SponsorText>
            <HeroSponsors />
            <SponsorButton href="mailto:sponsorship@nwplus.io" target="_blank" rel="noopener noreferrer">
              <MuseumButton topText="Sponsor Us" variant="sponsor" />
            </SponsorButton>
          </RightPillarInnerContainer>
        </RightPillar>

        <MobileSponsorButton href="mailto:sponsorship@nwplus.io" target="_blank" rel="noopener noreferrer">
          <MuseumButton topText="Become a Sponsor" variant="sponsor" />
        </MobileSponsorButton>
      </HeroContainer>
      <DummySpacerDiv />
    </div>
  )
}

export default Hero
