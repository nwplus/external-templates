import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import cakeTop from '@assets/images/cake_top.svg'
import cakeMid from '@assets/images/cake_mid.svg'
import cakeBottom from '@assets/images/cake_bottom.svg'
import { useParallax } from 'react-scroll-parallax'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


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
  color: #A6321E;
  font-family: 'Gloock Regular', normal;
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
  width: calc(100vw * (280 / 1200));
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
  gap: 1.5rem; /* Space between dot/line and text */
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
  background-color: #A6321E;
  border-radius: 50%;
`

const Line1 = styled.div`
  width: 3px;
  background-color: #A6321E;
  margin-top: 8px;
  margin-bottom: -56px;
  height: calc(100vw * (192 / 1920));
`
const Line2 = styled.div`
  width: 3px;
  background-color: #A6321E;
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
  color: #A6321E;
  font-family: 'HappyTime', normal;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: calc(100vw * (20 / 393));
  }
`

const ValueDescription = styled.p`
  font-size: calc(100vw * (18 / 1920));
  color: #4F2F22;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: calc(100vw * (15 / 393));
  }
`

const Values = () => {
  const valuesRef = useRef(null);
  const [cakeEaseEnabled, setCakeEaseEnabled] = useState(false);
  const [descValuesEnabled, setDescValuesEnabled] = useState(false);
  // const [valuesEnabled, setValuesEnabled] = useState(false);

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
      setIsTablet(window.innerWidth <= SCREEN_BREAKPOINTS.tablet)
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  const cakeTopEase = useParallax(
    cakeEaseEnabled ?
      { easing: 'easeOutQuad', speed: 0.1, translateY: [35, -5], } :
      { easing: 'easeOutQuad', speed: 0, translateY: [35, 35], }
  );

  const cakeMidEase = useParallax(
    cakeEaseEnabled ?
      { easing: 'easeOutQuad', speed: 0.1, translateY: [0, 0], } :
      { easing: 'easeOutQuad', speed: 0, translateY: [0, 0], }
  );

  const cakeBotEase = useParallax(
    cakeEaseEnabled ?
      { easing: 'easeOutQuad', speed: 0.1, translateY: [-35, 5], } :
      { easing: 'easeOutQuad', speed: 0, translateY: [-35, -35], }
  );

  const descFade = Array(3).fill(null).map(() =>
    useParallax(descValuesEnabled && !isMobile && !isTablet ?
      { opacity: [0, 1], duration: 0.001 } :
      isMobile || isTablet ?
        { opacity: [1, 1] } :
        { opacity: [0, 0] }
    )
  );

  // const easeUp = Array(2).fill(null).map(() =>
  //   useParallax(valuesEnabled && !isMobile && !isTablet ?
  //     { duration: 1, translateY: [400, 0], } :
  //     isMobile || isTablet ?
  //       { speed: 0, translateY: [0, 0], } :
  //       { speed: 0, translateY: [400, 400], }
  //   )
  // );


  useEffect(() => {
    const values = valuesRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: values,
        start: 'top top',
        end: '+=110%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        onEnter: () => {
          setTimeout(() => {
            setCakeEaseEnabled(true);
          }, 400); // Adjust delay time here

          setTimeout(() => {
            setDescValuesEnabled(true);
          }, 48); // Adjust delay time here

          // setTimeout(() => {
          //   setValuesEnabled(true);
          // }, 10); // Adjust delay time here

        },
        onLeaveBack: () => {
          setCakeEaseEnabled(false);
          setDescValuesEnabled(false);
          // setValuesEnabled(false);},

        }
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, []);

  return (
    <OuterContainer ref={valuesRef}>
      <Title>Our Values</Title>
      <ValuesContainer>
        <ColumnContainer>
          <ExpandedCakeImage ref={cakeTopEase.ref} src={cakeTop} alt="Cake Top Layer" style={{ zIndex: 3 }} />
          <ExpandedCakeImage ref={cakeMidEase.ref} src={cakeMid} alt="Cake Middle Layer" style={{ zIndex: 2 }} />
          <ExpandedCakeImage ref={cakeBotEase.ref} src={cakeBottom} alt="Cake Bottom Layer" style={{ zIndex: 1 }} />
        </ColumnContainer>

        <ColumnContainer>
          <ValuesList>
            <ValueItem>
              <DotLineContainer>
                <Dot />
                <Line1 />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Build Confidence</ValueTitle>
                <ValueDescription ref={descFade[0].ref}>
                  Develop career-ready skills, fight impostor syndrome, and create an invaluable support
                  network with friends, mentors, and sponsors. Regardless of your background, you bring a
                  unique and important perspective to tech. Like how there is always a treat for everyone,
                  there is always a place for you in tech—a space where everyone belongs.
                </ValueDescription>
              </ValueContent>
            </ValueItem>

            <ValueItem>
              <DotLineContainer>
                <Dot />
                <Line2 />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Learn Together</ValueTitle>
                <ValueDescription ref={descFade[1].ref}>
                  Whether you have never coded before, or you dream in assembly, challenge yourself to create
                  something meaningful! Learn new skills at our workshops and apply them to fresh and creative
                  projects! Regardless of your project&apos;s completion at the end of the weekend, take pride in the
                  knowledge gained or the courage to try something new. It&apos;s time to rise to the occasion because
                  it&apos;s always sweet to learn more!
                </ValueDescription>
              </ValueContent>
            </ValueItem>

            <ValueItem>
              <DotLineContainer>
                <Dot />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Explore in a Safe Space</ValueTitle>
                <ValueDescription ref={descFade[2].ref}>
                  Discover a community of like-minded, creative, and passionate individuals. Form lasting bonds,
                  share experiences, and create memories in an environment free from judgment, where all gender
                  identities and expressions are respected. We&apos;re all here unified under one cause—to strive for
                  better representation in tech!
                </ValueDescription>
              </ValueContent>
            </ValueItem>
          </ValuesList>
        </ColumnContainer>
      </ValuesContainer>
    </OuterContainer>
  )
}

export default Values;