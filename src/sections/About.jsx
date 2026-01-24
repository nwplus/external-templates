import styled from 'styled-components'
import { useState, useEffect, useRef, useMemo } from 'react'

const AboutContainer = styled.div`
  aspect-ratio: 1512/2300;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #f9ed9bcc 0%, #e8b6b7cc 30%, #b0bed5cc 60%, #78c7f3cc 75%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 958;
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
    font-size: calc(100vw * (30 / 393));
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
`

const LeftGround = styled.img`
  width: calc(100vw * (950 / 1512));
  position: absolute;
  top: calc(100vw * (-282 / 1512));
  left: calc(100vw * (-490 / 1512));
  z-index: 1;
`

const LeftRoot = styled.img`
  width: calc(100vw * (180 / 1512));
  position: absolute;
  top: calc(100vw * (-80 / 1512));
  left: calc(100vw * (-480 / 1512));
  z-index: 2;
`

const UpperLeftText = styled.div`
  position: absolute;
  width: calc(100vw * (765 / 1512));
  top: calc(100vw * (-180 / 1512));
  left: calc(100vw * (-390 / 1512));
  z-index: 3;
  display: flex;
  flex-direction: column;
`

const RightGround = styled.img`
  width: calc(100vw * (1000 / 1512));
  position: absolute;
  top: calc(100vw * (-200 / 1512));
  left: calc(100vw * (50 / 1512));
  z-index: 1;
`

const RightRootOne = styled.img`
  width: calc(100vw * (300 / 1512));
  position: absolute;
  top: calc(100vw * (300 / 1512));
  left: calc(100vw * (750 / 1512));
  z-index: 2;
`

const RightRootTwo = styled.img`
  width: calc(100vw * (300 / 1512));
  position: absolute;
  top: calc(100vw * (1200 / 1512));
  left: calc(100vw * (750 / 1512));
  z-index: 2;
`

const UpperRightText = styled.div`
  position: absolute;
  width: calc(100vw * (636 / 1512));
  top: calc(100vw * (720 / 1512));
  left: calc(100vw * (240 / 1512));
  z-index: 3;
  display: flex;
  flex-direction: column;
`

const LightRays = styled.img`
  position: absolute;
  width: calc(100vw * (900 / 1512));
  top: calc(100vw * (-660 / 1512));
  left: calc(100vw * (615 / 1512));
  z-index: 3;
  opacity: 0.25;
`

// FALLING OBJECTS - with parallax
const CardOne = styled.img`
  position: absolute;
  width: calc(100vw * (50 / 1512));
  top: calc(100vw * (-100 / 1512));
  left: calc(100vw * (500 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.06}px);
  will-change: transform;
`

const Alice = styled.img`
  position: absolute;
  width: calc(100vw * (250 / 1512));
  top: calc(100vw * (-50 / 1512));
  left: calc(100vw * (550 / 1512));
  z-index: 10;
  transform: translate(${p => p.$translateX}px, ${p => p.$translateY}px);
  will-change: transform;
`

const CardTwo = styled.img`
  position: absolute;
  width: calc(100vw * (80 / 1512));
  top: calc(100vw * (250 / 1512));
  left: calc(100vw * (650 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.04}px, ${p => p.$scroll * 0.01}px);
  will-change: transform;
`

const Hat = styled.img`
  position: absolute;
  width: calc(100vw * (300 / 1512));
  top: calc(100vw * (250 / 1512));
  left: calc(100vw * (370 / 1512));
  z-index: 0;
  transform: translate(${p => p.$scroll * -0.04}px, ${p => p.$scroll * 0.01}px);
  will-change: transform;
`

const CardThree = styled.img`
  position: absolute;
  width: calc(100vw * (70 / 1512));
  top: calc(100vw * (180 / 1512));
  left: calc(100vw * (100 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.035}px, ${p => p.$scroll * 0.01}px);
  will-change: transform;
`

const CardFour = styled.img`
  position: absolute;
  width: calc(100vw * (100 / 1512));
  top: calc(100vw * (470 / 1512));
  left: calc(100vw * (250 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.03}px, ${p => p.$scroll * 0.004}px);
  will-change: transform;
`

const PinkTeapot = styled.img`
  position: absolute;
  width: calc(100vw * (250 / 1512));
  top: calc(100vw * (400 / 1512));
  left: calc(100vw * (-300 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.035}px);
  will-change: transform;
`

const TeaSpill = styled.img`
  position: absolute;
  width: calc(100vw * (700 / 1512));
  top: calc(100vw * (130 / 1512));
  left: calc(100vw * (-120 / 1512));
  z-index: 0;
  transform: translateY(${p => p.$scroll * 0.035}px);
  will-change: transform;
`

const TeacupOne = styled.img`
  position: absolute;
  width: calc(100vw * (130 / 1512));
  top: calc(100vw * (350 / 1512));
  left: calc(100vw * (50 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.03}px, ${p => p.$scroll * 0.028}px);
  will-change: transform;
`

const TeacupTwo = styled.img`
  position: absolute;
  width: calc(100vw * (130 / 1512));
  top: calc(100vw * (270 / 1512));
  left: calc(100vw * (-140 / 1512));
  z-index: 1;
  transform: translate(${p => p.$scroll * -0.03}px, ${p => p.$scroll * 0.022}px);
  will-change: transform;
`

const FallingClockTop = styled.img`
  position: absolute;
  width: calc(100vw * (150 / 1512));
  top: calc(100vw * (480 / 1512));
  left: calc(100vw * (-470 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.035}px);
  will-change: transform;
`

const CardFive = styled.img`
  position: absolute;
  width: calc(100vw * (85 / 1512));
  top: calc(100vw * (780 / 1512));
  left: calc(100vw * (-100 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.035}px);
  will-change: transform;
`

const Deer = styled.img`
  position: absolute;
  width: calc(100vw * (251 / 1512));
  top: calc(100vw * (900 / 1512));
  left: calc(100vw * (-380 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.035}px);
  will-change: transform;
`

const CardSix = styled.img`
  position: absolute;
  width: calc(100vw * (80 / 1512));
  top: calc(100vw * (1100 / 1512));
  left: calc(100vw * (-480 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.03}px);
  will-change: transform;
`

const FallingClockBottom = styled.img`
  position: absolute;
  width: calc(100vw * (280 / 1512));
  top: calc(100vw * (1200 / 1512));
  left: calc(100vw * (-180 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.04}px);
  will-change: transform;
`

const CardSeven = styled.img`
  position: absolute;
  width: calc(100vw * (160 / 1512));
  top: calc(100vw * (1450 / 1512));
  left: calc(100vw * (-380 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.016}px);
  will-change: transform;
`

const BlueTeapot = styled.img`
  position: absolute;
  width: calc(100vw * (400 / 1512));
  top: calc(100vw * (1450 / 1512));
  left: calc(100vw * (0 / 1512));
  z-index: 1;
  transform: translateY(${p => p.$scroll * 0.03}px);
  will-change: transform;
`

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const rafRef = useRef(null)
  const aboutRef = useRef(null)

  const getAliceTransform = (scroll, vh, sectionEl) => {
    if (!sectionEl || !vh) return { translateX: 0, translateY: 0 }

    const { height } = sectionEl.getBoundingClientRect()
    const sectionTop = sectionEl.offsetTop
    const scrollInSection = scroll - sectionTop + vh
    const scrollProgress = Math.max(0, Math.min(1, scrollInSection / (height + vh)))

    if (scrollProgress <= 0.5) {
      const phaseProgress = scrollProgress / 0.5
      return { translateX: phaseProgress * -750, translateY: phaseProgress * 500 }
    }

    const phaseProgress = (scrollProgress - 0.5) / 0.5
    return { translateX: -800, translateY: 600 + phaseProgress * 1400 }
  }

  const aliceTransform = useMemo(
    () => getAliceTransform(scrollY, viewportHeight, aboutRef.current),
    [scrollY, viewportHeight]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateViewportHeight = () => setViewportHeight(window.innerHeight)
      updateViewportHeight()
      window.addEventListener('resize', updateViewportHeight)

      return () => window.removeEventListener('resize', updateViewportHeight)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY))
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <AboutContainer id="about" ref={aboutRef}>
      {/* Mobile Images */}
      {/* {mobileImages.map(({ src, alt, width, top, left }) => (
        <AboutImage
          key={`mobile-${src}`}
          src={`assets/images/about/mobile/${src}`}
          alt={alt}
          mobileWidth={width}
          mobileTop={top}
          mobileLeft={left}
          width={0}
          top={0}
          left={0}
          scroll={scrollY}
        />
      ))} */}
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
