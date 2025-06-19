import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  margin: 40px 20px 20px 20px;

  ${p => p.theme.mediaQueries.mobile} {
    margin-top: 0px;
  }
`

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 8rem;
  }
`

const Title = styled.p`
  color: #a6321e;
  font-family: 'Gloock';
  font-weight: 400;
  text-align: center;
  font-size: calc(100vw * (64 / 1920));
  margin-bottom: calc(100vw * (40 / 1280));
  padding-top: calc(100vw * (40 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
  }
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ExpandedCakeImage = styled.img`
  width: calc(100vw * (280 / 1100));
  height: auto;
  margin-top: calc(100vw * -1 * (48 / 1200));

  @media (max-width: 768px) {
    width: calc(100vw * (140 / 393));
    margin-top: 0px;
    margin-bottom: -48px;
  }
`

const ValuesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

const ValueItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 1rem; /* Space between dot/line and text */
`

const DotLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
  margin-right: calc(100vw * (100 / 1920));

  @media (max-width: 768px) {
    display: none;
  }
`

const Dot = styled.div`
  width: calc(100vw * (16 / 1920));
  height: calc(100vw * (16 / 1920));
  background-color: #a6321e;
  border-radius: 50%;
`

const Line1 = styled.div`
  width: 3px;
  background-color: #a6321e;
  margin-top: 8px;
  margin-bottom: -56px;
  height: calc(100vw * (192 / 1920));
`
const Line2 = styled.div`
  width: 3px;
  background-color: #a6321e;
  margin-top: 8px;
  margin-bottom: -56px;
  height: calc(100vw * (220 / 1920));
`
const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw * (640 / 1920));

  @media (max-width: 768px) {
    max-width: calc(100vw * (600 / 768));
  }
`

const ValueTitle = styled.p`
  font-size: calc(100vw * (32 / 1920));
  color: #a6321e;
  font-family: 'Happy Time';
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: calc(100vw * (20 / 393));
  }
`

const ValueDescription = styled.p`
  font-size: calc(100vw * (18 / 1920));
  color: #4f2f22;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: calc(100vw * (15 / 393));
  }
`

const Values = () => {
  const valuesRef = useRef(null)
  const cakeTopRef = useRef(null)
  const cakeMidRef = useRef(null)
  const cakeBotRef = useRef(null)
  const title1Ref = useRef(null)
  const title3Ref = useRef(null)
  const dot1Ref = useRef(null)
  const dot3Ref = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const [title1StartY, setTitle1StartY] = useState(100)
  const [title3StartY, setTitle3StartY] = useState(-100)
  const [dot1StartY, setDot1StartY] = useState(100)
  const [dot3StartY, setDot3StartY] = useState(-100)
  const [cakeTopStartY, setCakeTopStartY] = useState(100)
  const [cakeBotStartY, setCakeBotStartY] = useState(-100)
  const [isMobile, setIsMobile] = useState(false)

  const fadeDescRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const updateY = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const valY = Math.min(screenWidth * 0.1, screenHeight * 0.15)
      setTitle1StartY(valY)
      setTitle3StartY(-1.2 * valY)
      setDot1StartY(valY)
      setDot3StartY(-1.2 * valY)
      setCakeTopStartY(valY - 12)
      setCakeBotStartY(valY * -1 + 12)
    }

    updateY()
    window.addEventListener('resize', updateY)

    return () => {
      window.removeEventListener('resize', updateY)
    }
  }, [])

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  useEffect(() => {
    // Set initial positions so that all elements start offset
    gsap.set(cakeTopRef.current, { y: cakeTopStartY })
    gsap.set(cakeMidRef.current, { y: 0 })
    gsap.set(cakeBotRef.current, { y: cakeBotStartY })
    gsap.set(title1Ref.current, isMobile ? { y: 0 } : { y: title1StartY })
    gsap.set(title3Ref.current, isMobile ? { y: 0 } : { y: title3StartY })
    gsap.set(dot1Ref.current, isMobile ? { y: 0 } : { y: dot1StartY })
    gsap.set(dot3Ref.current, isMobile ? { y: 0 } : { y: dot3StartY })
    fadeDescRefs.forEach(ref => gsap.set(ref.current, isMobile ? { opacity: 1 } : { opacity: 0 }))
    gsap.set(line1Ref.current, { scaleY: 0, opacity: 0, y: 100 })
    gsap.set(line2Ref.current, { scaleY: 0, opacity: 0, y: -100 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: valuesRef.current,
        start: 'top top',
        end: isMobile ? '+=75%' : '+=120%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
      },
    })

    tl.to(
      cakeTopRef.current,
      {
        y: -5,
        ease: 'easeInOutQuad',
        duration: 0.8,
      },
      0
    )

    tl.to(
      cakeBotRef.current,
      {
        y: 5,
        ease: 'easeInOutQuad',
        duration: 0.8,
      },
      0
    )

    tl.to(
      title1Ref.current,
      {
        y: 0,
        ease: 'easeInOutCubic',
        duration: 0.8,
      },
      0
    )

    tl.to(
      title3Ref.current,
      {
        y: 0,
        ease: 'easeInOutCubic',
        duration: 0.8,
      },
      0
    )

    tl.to(
      dot1Ref.current,
      {
        y: 0,
        ease: 'easeInOutQuart',
        duration: 0.8,
      },
      0
    )

    tl.to(
      dot3Ref.current,
      {
        y: 0,
        ease: 'easeInOutQuart',
        duration: 0.8,
      },
      0
    )

    tl.to(
      line1Ref.current,
      {
        y: 0,
        scaleY: isMobile ? 0 : 1,
        opacity: isMobile ? 0 : 1,
        ease: 'easeInOutQuad',
        duration: 0.8,
      },
      0
    )

    tl.to(
      line2Ref.current,
      {
        y: 0,
        scaleY: isMobile ? 0 : 1,
        opacity: isMobile ? 0 : 1,
        ease: 'easeInOutQuad',
        duration: 0.8,
      },
      0
    )

    fadeDescRefs.forEach(ref => {
      tl.to(
        ref.current,
        {
          opacity: 1,
          ease: 'easeInOutQuad',
          duration: 0.6,
        },
        1
      )
    })

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [fadeDescRefs])

  return (
    <OuterContainer id="values" ref={valuesRef}>
      <Title>Our Values</Title>
      <ValuesContainer>
        <ColumnContainer>
          <ExpandedCakeImage
            ref={cakeTopRef}
            src="/assets/images/cake_top.svg"
            alt="Cake Top Layer"
            style={{ zIndex: 3 }}
          />
          <ExpandedCakeImage
            ref={cakeMidRef}
            src="/assets/images/cake_mid.svg"
            alt="Cake Middle Layer"
            style={{ zIndex: 2 }}
          />
          <ExpandedCakeImage
            ref={cakeBotRef}
            src="/assets/images/cake_bottom.svg"
            alt="Cake Bottom Layer"
            style={{ zIndex: 1 }}
          />
        </ColumnContainer>
        <ColumnContainer>
          <ValuesList>
            <ValueItem>
              <DotLineContainer>
                <Dot ref={dot1Ref} />
                <Line1 ref={line1Ref} />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle ref={title1Ref}>Build Confidence</ValueTitle>
                <ValueDescription ref={fadeDescRefs[0]}>
                  Develop career-ready skills, fight impostor syndrome, and create an invaluable support network with
                  friends, mentors, and sponsors. Regardless of your background, you bring a unique and important
                  perspective to tech. Like how there is always a treat for everyone, there is always a place for you in
                  tech—a space where everyone belongs.
                </ValueDescription>
              </ValueContent>
            </ValueItem>
            <ValueItem>
              <DotLineContainer>
                <Dot />
                <Line2 ref={line2Ref} />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Learn Together</ValueTitle>
                <ValueDescription ref={fadeDescRefs[1]}>
                  Whether you have never coded before, or you dream in assembly, challenge yourself to create something
                  meaningful! Learn new skills at our workshops and apply them to fresh and creative projects!
                  Regardless of your project&apos;s completion at the end of the weekend, take pride in the knowledge
                  gained or the courage to try something new. It&apos;s time to rise to the occasion because it&apos;s
                  always sweet to learn more!
                </ValueDescription>
              </ValueContent>
            </ValueItem>
            <ValueItem>
              <DotLineContainer>
                <Dot ref={dot3Ref} />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle ref={title3Ref}>Explore in a Safe Space</ValueTitle>
                <ValueDescription ref={fadeDescRefs[2]}>
                  Discover a community of like-minded, creative, and passionate individuals. Form lasting bonds, share
                  experiences, and create memories in an environment free from judgment, where all gender identities and
                  expressions are respected. We&apos;re all here unified under one cause—to strive for better
                  representation in tech!
                </ValueDescription>
              </ValueContent>
            </ValueItem>
          </ValuesList>
        </ColumnContainer>
      </ValuesContainer>
    </OuterContainer>
  )
}

export default Values
