import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'

const AboutContainer = styled.div`
  aspect-ratio: 1512/2500;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #f9ed9bcc 0%, #e8b6b7cc 30%, #b0bed5cc 60%, #78c7f3cc 75%);
    z-index: 1;

    ${p => p.theme.mediaQueries.mobile} {
      background: linear-gradient(to bottom, #f9ed9bcc 0%, #e8b6b7cc 50%, #b0bed5cc 80%, #78c7f3cc 100%);
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 2500;
    z-index: 1;
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: calc(calc(400 / 1920) * 100vw);
  left: calc(calc(605 / 1920) * 100vw);
  width: calc(100vw * (682 / 1920));

  display: flex;
  flex-direction: column;
  gap: calc(100vw * (24 / 1920));
  z-index: 11;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(calc(650 / 1920) * 100vw);
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw * (335 / 393));
    gap: calc(100vw * (20 / 393));
  }
`

const Title = styled.p`
  font-family: 'Bree Serif';
  font-size: calc(100vw * (48 / 1512));
  font-weight: 400;
  color: #ffffff;
  line-height: 1.31;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (22 / 393));
  }
`

const Description = styled.p`
  font-family: 'Quicksand';
  font-size: calc(100vw * (20 / 1512));
  font-weight: 500;
  line-height: 1.5;
  font-style: normal;
  color: #ffffff;
  margin-top: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
  }
`

const Divider = styled.img`
  width: calc(100vw * (1010 / 1512));
  position: absolute;
  top: calc(100vw * (-305 / 1512));
  left: calc(100vw * (-555 / 1512));
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const LeftGround = styled.img`
  width: calc(100vw * (950 / 1512));
  position: absolute;
  top: calc(100vw * (-282 / 1512));
  left: calc(100vw * (-490 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const LeftRoot = styled.img`
  width: calc(100vw * (180 / 1512));
  position: absolute;
  top: calc(100vw * (-80 / 1512));
  left: calc(100vw * (-480 / 1512));
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const UpperLeftText = styled.div`
  position: absolute;
  width: calc(100vw * (765 / 1512));
  top: calc(100vw * (-180 / 1512));
  left: calc(100vw * (-390 / 1512));
  z-index: 3;
  display: flex;
  flex-direction: column;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (334 / 393));
    top: calc(100vw * (-110 / 393));
    left: calc(100vw * (10 / 393));
  }
`

const RightGround = styled.img`
  width: calc(100vw * (1000 / 1512));
  position: absolute;
  top: calc(100vw * (-200 / 1512));
  left: calc(100vw * (50 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RightRootOne = styled.img`
  width: calc(100vw * (300 / 1512));
  position: absolute;
  top: calc(100vw * (300 / 1512));
  left: calc(100vw * (750 / 1512));
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RightRootTwo = styled.img`
  width: calc(100vw * (300 / 1512));
  position: absolute;
  top: calc(100vw * (1200 / 1512));
  left: calc(100vw * (750 / 1512));
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const UpperRightText = styled.div`
  position: absolute;
  width: calc(100vw * (636 / 1512));
  top: calc(100vw * (720 / 1512));
  left: calc(100vw * (240 / 1512));
  z-index: 3;
  display: flex;
  flex-direction: column;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (324 / 393));
    top: calc(100vw * (850 / 393));
    left: calc(100vw * (10 / 393));
  }
`

const LightRays = styled.img`
  position: absolute;
  width: calc(100vw * (900 / 1512));
  top: calc(100vw * (-660 / 1512));
  left: calc(100vw * (615 / 1512));
  z-index: 3;
  opacity: 0.25;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

// FALLING OBJECTS - with parallax
const CardOne = styled.img`
  position: absolute;
  width: calc(100vw * (50 / 1512));
  top: calc(100vw * (-100 / 1512));
  left: calc(100vw * (500 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Alice = styled.img`
  position: absolute;
  width: calc(100vw * (250 / 1512));
  top: calc(100vw * (-50 / 1512));
  left: calc(100vw * (550 / 1512));
  z-index: 10;
  transform: translate(${p => p.$translateX}px, ${p => p.$translateY}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CardTwo = styled.img`
  position: absolute;
  width: calc(100vw * (80 / 1512));
  top: calc(100vw * (250 / 1512));
  left: calc(100vw * (650 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.1}px, ${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Hat = styled.img`
  position: absolute;
  width: calc(100vw * (300 / 1512));
  top: calc(100vw * (250 / 1512));
  left: calc(100vw * (370 / 1512));
  z-index: 0;
  transform: translate(${p => p.$scroll * -0.1}px, ${p => p.$scroll * 0.01}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CardThree = styled.img`
  position: absolute;
  width: calc(100vw * (70 / 1512));
  top: calc(100vw * (180 / 1512));
  left: calc(100vw * (100 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.1}px, ${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CardFour = styled.img`
  position: absolute;
  width: calc(100vw * (100 / 1512));
  top: calc(100vw * (470 / 1512));
  left: calc(100vw * (250 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.1}px, ${p => p.$scroll * 0.01}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const PinkTeapot = styled.img`
  position: absolute;
  width: calc(100vw * (250 / 1512));
  top: calc(100vw * (400 / 1512));
  left: calc(100vw * (-300 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.15}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TeaSpill = styled.img`
  position: absolute;
  width: calc(100vw * (700 / 1512));
  top: calc(100vw * (130 / 1512));
  left: calc(100vw * (-120 / 1512));
  z-index: 0;
  transform: translateY(${p => p.$scroll * 0.15}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TeacupOne = styled.img`
  position: absolute;
  width: calc(100vw * (130 / 1512));
  top: calc(100vw * (350 / 1512));
  left: calc(100vw * (50 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.1}px, ${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const TeacupTwo = styled.img`
  position: absolute;
  width: calc(100vw * (130 / 1512));
  top: calc(100vw * (270 / 1512));
  left: calc(100vw * (-140 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.1}px, ${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const FallingClockTop = styled.img`
  position: absolute;
  width: calc(100vw * (150 / 1512));
  top: calc(100vw * (480 / 1512));
  left: calc(100vw * (-470 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.2}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CardFive = styled.img`
  position: absolute;
  width: calc(100vw * (85 / 1512));
  top: calc(100vw * (780 / 1512));
  left: calc(100vw * (-100 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.2}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Deer = styled.img`
  position: absolute;
  width: calc(100vw * (251 / 1512));
  top: calc(100vw * (900 / 1512));
  left: calc(100vw * (-380 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.2}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CardSix = styled.img`
  position: absolute;
  width: calc(100vw * (80 / 1512));
  top: calc(100vw * (1100 / 1512));
  left: calc(100vw * (-480 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.2}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const FallingClockBottom = styled.img`
  position: absolute;
  width: calc(100vw * (280 / 1512));
  top: calc(100vw * (1200 / 1512));
  left: calc(100vw * (-180 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const CardSeven = styled.img`
  position: absolute;
  width: calc(100vw * (160 / 1512));
  top: calc(100vw * (1450 / 1512));
  left: calc(100vw * (-380 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.1}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BlueTeapot = styled.img`
  position: absolute;
  width: calc(100vw * (400 / 1512));
  top: calc(100vw * (1450 / 1512));
  left: calc(100vw * (0 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.05}px);
  will-change: transform;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

// MOBILE
const TopRock = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (400 / 393));
    top: calc(100vw * (-170 / 393));
    left: calc(100vw * (-30 / 393));
  }
`

const TopRoot = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (120 / 393));
    top: calc(100vw * (70 / 393));
    left: calc(100vw * (-30 / 393));
  }
`

const BottomRock = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (400 / 393));
    top: calc(100vw * (50 / 393));
    left: calc(100vw * (-30 / 393));
  }
`

const BottomRootOne = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (150 / 393));
    top: calc(100vw * (550 / 393));
    left: calc(100vw * (215 / 393));
  }
`

const BottomRootTwo = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (150 / 393));
    top: calc(100vw * (1450 / 393));
    left: calc(100vw * (215 / 393));
  }
`

const Teapot = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (400 / 393));
    top: calc(100vw * (180 / 393));
    left: calc(100vw * (-30 / 393));
  }
`

const HatMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (110 / 393));
    top: calc(100vw * (120 / 393));
    left: calc(100vw * (250 / 393));
  }
`

const CardOneMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (53 / 393));
    top: calc(100vw * (230 / 393));
    left: calc(100vw * (150 / 393));
  }
`

const TopWatch = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (150 / 393));
    top: calc(100vw * (260 / 393));
    left: calc(100vw * (-20 / 393));
  }
`

const CardTwoMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (80 / 393));
    top: calc(100vw * (490 / 393));
    left: calc(100vw * (150 / 393));
  }
`

const AliceMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (150 / 393));
    top: calc(100vw * (360 / 393));
    left: calc(100vw * (215 / 393));
  }
`

const CardThreeMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (60 / 393));
    top: calc(100vw * (1650 / 393));
    left: calc(100vw * (-30 / 393));
  }
`

const TeacupOneMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (90 / 393));
    top: calc(100vw * (1640 / 393));
    left: calc(100vw * (50 / 393));
  }
`

const TeacupTwoMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (90 / 393));
    top: calc(100vw * (1780 / 393));
    left: calc(100vw * (0 / 393));
  }
`

const BottomTeapot = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (180 / 393));
    top: calc(100vw * (1700 / 393));
    left: calc(100vw * (160 / 393));
  }
`

const DeerMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (250 / 393));
    top: calc(100vw * (1830 / 393));
    left: calc(100vw * (40 / 393));
  }
`

const BottomClock = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (150 / 393));
    top: calc(100vw * (2030 / 393));
    left: calc(100vw * (-20 / 393));
  }
`

const CardFourMobile = styled.img`
  display: none;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: calc(100vw * (120 / 393));
    top: calc(100vw * (2150 / 393));
    left: calc(100vw * (220 / 393));
  }
`

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const aboutRef = useRef(null)

  // Calculate Alice's position based on scroll phases
  const getAliceTransform = scroll => {
    if (!aboutRef.current) return { translateX: 0, translateY: 0 }

    const vw = window.innerWidth
    const rect = aboutRef.current.getBoundingClientRect()
    const sectionTop = aboutRef.current.offsetTop
    const sectionHeight = rect.height

    // Calculate progress within this section (0 to 1)
    const scrollInSection = scroll - sectionTop + window.innerHeight
    const scrollProgress = Math.max(0, Math.min(1, scrollInSection / (sectionHeight + window.innerHeight)))

    let translateX = 0
    let translateY = 0

    if (scrollProgress <= 0.5) {
      // Phase 1: Diagonal - left and down
      const phaseProgress = scrollProgress / 0.5
      translateX = phaseProgress * (vw * (-800 / 1512)) // move left faster
      translateY = phaseProgress * (vw * (500 / 1512)) // move down faster
    } else {
      // Phase 2: Vertical - straight down
      const phaseProgress = (scrollProgress - 0.5) / 0.5
      translateX = vw * (-850 / 1512) // maintain left position from end of phase 1
      translateY = vw * (650 / 1512) + phaseProgress * (vw * (1400 / 1512)) // continue from phase 1's end position
    }

    return { translateX, translateY }
  }

  const aliceTransform = getAliceTransform(scrollY)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
    return undefined
  }, [])

  return (
    <AboutContainer id="about" ref={aboutRef}>
      {/* DESKTOP OBJECTS */}
      <LightRays src="/assets/images/about/light_rays.svg" />
      <TextContainer>
        <Divider src="/assets/images/about/divider.svg" />
        <LeftGround src="/assets/images/about/left_ground.svg" />
        <LeftRoot src="/assets/images/about/root.svg" />
        <UpperLeftText>
          <Title>Jump into a new world at cmd-f</Title>
          <Title>what a treat to share!</Title>
          <Description>
            Learn new skills, build with passion and connect with a community dedicated to making a difference. No
            matter your background or technical expertise, we provide the resources and support to ensure your journey
            is a success.
          </Description>
        </UpperLeftText>

        <Alice
          src="/assets/images/about/alice.svg"
          $translateX={aliceTransform.translateX}
          $translateY={aliceTransform.translateY}
        />

        {/* FALLING OBJECTS */}
        {/* falling downwards on parallax */}
        <CardOne $scroll={scrollY} src="/assets/images/about/card_one.svg" />

        {/* moving horizontally to the left with super slight down angle on parallax */}
        <CardTwo $scroll={scrollY} src="/assets/images/about/card_two.svg" />
        <Hat $scroll={scrollY} src="/assets/images/about/hat.svg" />
        <CardThree $scroll={scrollY} src="/assets/images/about/card_three.svg" />
        <CardFour $scroll={scrollY} src="/assets/images/about/card_four.svg" />

        {/* moving straight down on parallax */}
        <PinkTeapot $scroll={scrollY} src="/assets/images/about/pink_teapot.svg" />
        <TeaSpill $scroll={scrollY} src="/assets/images/about/tea_spill.svg" />
        <TeacupOne $scroll={scrollY} src="/assets/images/about/teacup_one.svg" />
        <TeacupTwo $scroll={scrollY} src="/assets/images/about/teacup_two.svg" />
        <FallingClockTop $scroll={scrollY} src="/assets/images/about/falling_clock_top.svg" />
        <CardFive $scroll={scrollY} src="/assets/images/about/card_five.svg" />
        <Deer $scroll={scrollY} src="/assets/images/about/deer.svg" />
        <CardSix $scroll={scrollY} src="/assets/images/about/card_six.svg" />
        <FallingClockBottom $scroll={scrollY} src="/assets/images/about/falling_clock_bottom.svg" />
        <CardSeven $scroll={scrollY} src="/assets/images/about/card_seven.svg" />
        <BlueTeapot $scroll={scrollY} src="/assets/images/about/blue_teapot.svg" />
        {/* FALLING OBJECTS END */}

        <RightGround src="/assets/images/about/right_ground.svg" />
        <RightRootOne src="/assets/images/about/right_root_one.svg" />
        <RightRootTwo src="/assets/images/about/right_root_two.svg" />
        {/* MOBILE OBJECTS */}
        <TopRock src="/assets/images/about/mobile/top_rock.svg" />
        <TopRoot src="/assets/images/about/mobile/top_root.svg" />
        <BottomRock src="/assets/images/about/mobile/bottom_rock.svg" />
        <BottomRootOne src="/assets/images/about/mobile/bottom_root_one.svg" />
        <BottomRootTwo src="/assets/images/about/mobile/bottom_root_two.svg" />
        <Teapot src="/assets/images/about/mobile/teapot.svg" />
        <HatMobile src="/assets/images/about/mobile/hat.svg" />
        <CardOneMobile src="/assets/images/about/mobile/card_one.svg" />
        <TopWatch src="/assets/images/about/mobile/top_watch.svg" />
        <CardTwoMobile src="/assets/images/about/mobile/card_two.svg" />
        <AliceMobile src="/assets/images/about/mobile/alice.svg" />
        <CardThreeMobile src="/assets/images/about/mobile/card_three.svg" />
        <TeacupOneMobile src="/assets/images/about/mobile/teacup_one.svg" />
        <TeacupTwoMobile src="/assets/images/about/mobile/teacup_two.svg" />
        <BottomTeapot src="/assets/images/about/mobile/bottom_teapot.svg" />
        <DeerMobile src="/assets/images/about/mobile/deer.svg" />
        <BottomClock src="/assets/images/about/mobile/bottom_clock.svg" />
        <CardFourMobile src="/assets/images/about/mobile/card_four.svg" />

        <UpperRightText>
          <Title>What is cmd-f?</Title>
          <Description>
            cmd-f is a 24-hour hackathon focused on addressing gender inequality in technology. Our main purpose is to
            create a safe and dedicated space for individuals who identify with underrepresented genders in tech to hack
            together. We&apos;re trying to create access for people who have faced systemic barriers to inclusion on the
            basis of gender. We encourage participation from women, trans, non-binary, Two-Spirit and gender diverse
            people. Thus, cmd-f prioritizes and centers individuals who identify as a member of an underrepresented
            gender in technology.
            <br />
            <br />
            We&apos;re aware that gender is not the only inequality in technology. We appreciate allyship and recognize
            it is important in the community. We invite allies to show their support by volunteering or mentoring, as
            opposed to hacking. Please make sure your participation in this event is aligned with the intentions of the
            event. We also ask all participants who attend to trust that everyone attending is meant to be here.
            <br />
            <br />
            For more information on who is an underrepresented gender in technology, please email us at{' '}
            <a href="mailto:cmd-f@nwplus.io" style={{ textDecoration: 'underline', color: 'inherit' }}>
              cmd-f@nwplus.io
            </a>
            .
          </Description>
        </UpperRightText>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
