import styled from 'styled-components'
import React, { useEffect, useRef } from 'react'

const AboutContainer = styled.div`
  aspect-ratio: 1512/900;
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, #f6dbc8 0%, #f9dcae 50%, #ffc973 70%, #f9f2ea 100%);

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1000;
  }
`

// TRAIN START
const Tracks = styled.img`
  position: absolute;
  width: calc(100vw * (760 / 1512));
  top: calc(100vw * (-228 / 1512));
  right: calc(100vw * (750 / 1512));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (-20 / 393));
    right: calc(100vw * (260 / 393));
    width: calc(100vw * (300 / 393));
  }
`

const Rails = styled.img`
  position: absolute;
  width: 100vw;
  top: calc(100vw * (-150 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    top: calc(100vw * (-90 / 393));
    width: 300vw;
    right: calc(100vw * (-350 / 393));
  }
`
// TRAIN END



// ABOUT IMAGES
const LeftIsland = styled.img`
  position: absolute;
  width: calc(100vw * (250 / 1512));
  top: calc(100vw * (-60 / 1512));
  left: 0;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (100 / 393));
    top: calc(100vw * (380 / 1512));
  }
`

const CloudOne = styled.img`
  position: absolute;
  width: calc(100vw * (445 / 1512));
  top: calc(100vw * (-80 / 1512));
  left: 0;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (222 / 393));
    right: calc(100vw * (300 / 393));
    top: calc(100vw * (80 / 393));
    z-index: 1;
  }
`

const LeftBgIsland = styled.img`
  position: absolute;
  width: calc(100vw * (175 / 1512));
  top: calc(100vw * (190 / 1512));
  right: calc(100vw * (1220 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (87.5 / 393));
    right: calc(100vw * (260 / 393));
    top: calc(100vw * (190 / 393));
  }
`

const CloudTwo = styled.img`
  position: absolute;
  width: calc(100vw * (305 / 1512));
  top: calc(100vw * (300 / 1512));
  right: calc(100vw * (1200 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (700 / 393));
    top: calc(100vw * (550 / 393));
    right: calc(100vw * (190 / 393));
  }
`

const RightIsland = styled.img`
  position: absolute;
  width: calc(100vw * (230 / 1512));
  top: calc(100vw * (200 / 1512));
  right: 0;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (110 / 393));
    top: calc(100vw * (520 / 393));
    right: -20px;
    opacity: 0.5;
  }
`

const CloudThree = styled.img`
  position: absolute;
  width: calc(100vw * (445 / 1512));
  top: calc(100vw * (00 / 1512));
  right: 0;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Fog = styled.img`
  position: absolute;
  bottom: calc(100vw * (50 / 1512));
  width: 100%;
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (1200 / 393));
    right: calc(100vw * (-200 / 393));
  }
`

const Sun = styled.img`
  position: absolute;
  bottom: calc(100vw * (100 / 1512));
  right: calc(100vw * (350 / 1512));
  z-index: 1;
  width: calc(100vw * (803 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`
// ABOUT IMAGES END

// TEXT START
const TextContainer = styled.div`
  display: flex;
  position: absolute;
  right: calc(100vw * (350 / 1512));
  width: calc(100vw * (844 / 1512));
  top: calc(100vw * (200 / 1512));
  gap: calc(100vw * (45 / 1512));
  align-items: center;
  z-index: 10;
  color: #262609;

  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    top: calc(100vw * (250 / 393));
  }
`

const TextLeft = styled.p`
  font-weight: 500;
  font-size: calc(100vw * (40 / 1512));
  width: calc(100vw * (282 / 1512));
  text-align: right;

  ${p => p.theme.mediaQueries.mobile} {
    text-align: center;
    font-size: calc(100vw * (30 / 487));
    width: calc(100vw * (212 / 393));
  }
`

const TextRight = styled.p`
  width: calc(100vw * (514 / 1512));
  text-align: left;
  font-weight: 400;
  font-size: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    text-align: center;
    font-size: calc(100vw * (15 / 487));
    width: calc(100vw * (267 / 393));
  }
`
// TEXT END

const About = () => {
  // refs for parallax
  const containerRef = useRef(null)
  const cloudOneRef = useRef(null)
  const cloudTwoRef = useRef(null)
  const cloudThreeRef = useRef(null)
  const leftIslandRef = useRef(null)
  const rightIslandRef = useRef(null)
  const fogRef = useRef(null)

  // Parallax scroll effect (similar pattern to Sponsors.jsx)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const containerTop = containerRef.current.offsetTop
      const { scrollY } = window
      const scrollPosition = scrollY - containerTop

      const setTransform = (elementRef, speed) => {
        const node = elementRef && elementRef.current
        if (!node) return
        node.style.transform = `translateY(${scrollPosition * speed}px)`
      }

      // Adjust speeds to taste (positive = moves down as user scrolls down,
      // negative = moves up / opposite direction)
      setTransform(cloudOneRef, 0.1)
      setTransform(cloudTwoRef, 0.12)
      setTransform(cloudThreeRef, 0.08)
      setTransform(leftIslandRef, 0.05)
      setTransform(rightIslandRef, 0.07)
      setTransform(fogRef, 0.02)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AboutContainer id="about" ref={containerRef}>
      <Tracks src="./assets/images/about/about_train.png" />
      <Rails src="./assets/images/about/about_rails.svg" />
      {/* <Countdown>
        <CountdownContainer src="./assets/images/about/countdown_container.svg" />
        <CountdownBorder src="./assets/images/about/countdown_border.svg" />
        <CountdownMascots src="./assets/images/about/countdown_mascots.svg" />
        <CountdownLeft>
          <CountdownP>The nwHacks train is arriving...</CountdownP>
          <CountdownT>Applications close in:</CountdownT>
          <CountdownP>Submit by Dec 19th 11:59PM PST!</CountdownP>
        </CountdownLeft>
        <CountdownGrid>
          <GridItem>
            <GridNumber>{pad(days)}</GridNumber>
            <GridLabel>days</GridLabel>
          </GridItem>
          <GridItem>
            <GridNumber>{pad(hours)}</GridNumber>
            <GridLabel>hrs</GridLabel>
          </GridItem>
          <GridItem>
            <GridNumber>{pad(minutes)}</GridNumber>
            <GridLabel>mins</GridLabel>
          </GridItem>
        </CountdownGrid>
      </Countdown> */}
      <LeftIsland ref={leftIslandRef} src="./assets/images/about/about_left_island.svg" />
      <CloudOne ref={cloudOneRef} src="./assets/images/about/about_cloud_one.svg" />
      <LeftBgIsland src="./assets/images/about/about_left_bg_island.svg" />
      <CloudTwo ref={cloudTwoRef} src="./assets/images/about/about_cloud_two.svg" />
      <RightIsland ref={rightIslandRef} src="./assets/images/about/about_right_island.svg" />
      <CloudThree ref={cloudThreeRef} src="./assets/images/about/about_cloud_three.svg" />
      <Fog ref={fogRef} src="./assets/images/about/fog.svg" />
      <Sun src="./assets/images/about/sun.svg" />
      <TextContainer>
        <TextLeft>Join us for the 12th iteration of nwHacks!</TextLeft>
        <TextRight>
          Welcome to the 12th iteration of nwHacks, where ideas take flight!
          <br />
          <br />
          Everyone is welcome at nwHacks, whether you are just getting into tech or are a seasoned hacker. Join us in-person on January 16-17, 2027 for a weekend of creativity, community, and innovation. All you need is an open mind and an insatiable desire to learn - we’ll take care of the rest. Create a project, learn new skills, and bond with friends, all in 24 hours! 
        </TextRight>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
