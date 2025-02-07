import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import rizzsumoImg from '@assets/images/projects/rizzsumo.png'
import dinoauraImg from '@assets/images/projects/dinoaura.png'
import lovealarmImg from '@assets/images/projects/lovealarm.png'
import chownowImg from '@assets/images/projects/chow-now.png'
import maincard from '@assets/images/projects/maincard.svg'
import tape from '@assets/images/projects/tape.png'
import project1 from '@assets/images/projects/project1.svg'
import chococake from '@assets/images/projects/chococake.svg'
import blueberry from '@assets/images/projects/blueberry.svg'
import brownies from '@assets/images/projects/brownies.svg'
import bread from '@assets/images/projects/bread.svg'
import croissant from '@assets/images/projects/croissant.svg'
import dinocard from '@assets/images/projects/dinoaura_card.svg'
import breadbasket from '@assets/images/projects/breadbasket.svg'
import lovecard from '@assets/images/projects/lovealarm_card.svg'
import bread2 from '@assets/images/projects/bread2.svg'
import lovealarmmob from '@assets/images/projects/lovealarm_mobile.svg'
import dinomob from '@assets/images/projects/dinoaura_mobile.svg'
import chowmob from '@assets/images/projects/chownow_mobile.svg'

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;
  position: relative;
  aspect-ratio: 1280/812;
  padding: 0 calc(100vw * (73 / 1683));

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1271;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw);
  }
`

const MainCardContainer = styled(CardContainer)`
  grid-column: 2;
  grid-row: 3 / span 2;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const RizzsumoCardContainer = styled(CardContainer)`
  grid-column: 1;
  grid-row: 1 / span 2;
  transform: translate(10%, 37%);

  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    grid-row: 2 / span 2;
  }
`

const ChownowCardContainer = styled(CardContainer)`
  grid-column: 2;
  grid-row: 5 / span 2;
  transform: translate(5%, -11%);

  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    grid-column: 1;
    grid-row: 7 / span 2;
  }
`

const DinoauraCardContainer = styled(CardContainer)`
  grid-column: 3;
  grid-row: 1 / span 3;
  flex-direction: column;
  transform: translate(-10%, 23%);

  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    grid-column: 1;
    grid-row: 4 / span 3;
  }
`

const LovealarmCardContainer = styled(CardContainer)`
  grid-column: 3;
  grid-row: 4 / span 3;
  transform: translate(-15%, -3%);

  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    grid-column: 1;
    grid-row: 9 / span 3;
  }
`

const MainCardImage = styled.img`
  width: calc(100vw * (497 / 1920));
  height: auto;
  z-index: 1;
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MainText = styled.h1`
  font-family: Gloock;
  font-weight: 400;
  font-size: calc(100vw * (48 / 1920));
  color: #a6321e;
  position: absolute;
  text-align: center;
  z-index: 10;
  width: calc(100vw * (497 / 1920));
  padding: calc(100vw * (40 / 1920));
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileHeader = styled.p`
  display: none;
  font-family: Gloock;
  font-weight: 400;
  font-size: calc(100vw * (35 / 393));
  color: #a6321e;
  text-align: left;
  margin: calc(100vw * (40 / 393));

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    grid-column: 1;
    grid-row: 1 / span 1;
  }
`

const TapeImage = styled.img`
  width: calc(100vw * (188 / 1920));
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  ${MainCardContainer} & {
    ${p => p.theme.mediaQueries.mobile} {
      display: none;
    }
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (106 / 393));
    top: -3%;
    left: 35%;
    transform: translate(0%, 0%);
  }
`

const Project1Image = styled.img`
  width: calc(100vw * (497 / 1920));
  height: auto;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (317 / 393));
  }
`

const Project1Title = styled.p`
  font-family: 'Happy Time';
  font-weight: 400;
  font-size: calc(100vw * (40 / 1920));
  font-style: italic;
  color: #a6321e;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 393));
  }
`

const Project1Description = styled.p`
  font-weight: 500;
  font-size: calc(100vw * (18 / 1920));
  padding: calc(100vw * (20 / 1920)) 0px;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (15 / 393));
  }
`

const ProjectButton = styled.button`
  background: #a6321e;
  width: calc(100vw * (170 / 1920));
  height: calc(100vw * (37 / 1920));
  color: #fff;
  font-size: calc(100vw * (16 / 1920));
  font-weight: 600;
  font-family: 'Poppins';
  border-radius: calc(100vw * (5 / 1920));
  border: none;
  margin-top: auto;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (112 / 393));
    height: calc(100vw * (24 / 393));
    font-size: calc(100vw * (10 / 393));
    border-radius: calc(100vw * (5 / 393));
  }
`

const ProjectText = styled.div`
  position: absolute;
  top: 53%;
  left: 48%;
  width: calc(100vw * (380 / 1920));
  transform: translate(-50%, -60%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;

  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    top: 13%;
    left: 18%;
    width: calc(100vw * (260 / 393));
    height: 70%;
  }
`

const ChococakeCardContainer = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(7%, 30%);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const ChococakeCardImage = styled.img`
  width: calc(100vw * (422 / 1920));
  height: auto;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const DessertCardsContainer = styled.div`
  grid-column: 1;
  grid-row: 3 / span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BrownieCardImage = styled.img`
  width: calc(100vw * (307 / 1920));
  height: auto;
  z-index: 5;
  position: absolute;
  top: 35%;
  left: 43%;
  transform: translate(-50%, -50%);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BlueberryCardImage = styled.img`
  width: calc(100vw * (304 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  top: 61%;
  left: 80%;
  transform: translate(-50%, -46%);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const BreadImage = styled.img`
  width: calc(100vw * (175 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translateX(140%);

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (86 / 393));
    z-index: 15;
    transform: translate(170%, 150%);
  }
`

const CroissantImage = styled.img`
  width: calc(100vw * (360 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translate(55%, -40%);

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (203 / 393));
    z-index: 15;
    transform: translate(-65%, 65%);
  }
`

const DinoauraCardImage = styled.img`
  width: calc(100vw * (497 / 1920));
  height: auto;
  z-index: 1;
  transform: translateY(-5%);

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (317 / 393));
    transform: none;
  }
`

const DinoauraText = styled.p`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 46%;
  left: 43%;
  transform: translate(-50%, -55%);
  z-index: 5;
  height: 50%;

  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    top: 9%;
    left: 18%;
    width: calc(100vw * (260 / 393));
    height: 75%;
  }
`

const BreadBasketImage = styled.img`
  width: calc(100vw * (236 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translate(90%, 53%);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const LovealarmCardImage = styled.img`
  width: calc(100vw * (352 / 1920));
  height: auto;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (317 / 393));
  }
`

const LovealarmText = styled.p`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 52%;
  left: 52%;
  transform: translate(-50%, -51%);
  height: 50%;
  z-index: 5;
  ${p => p.theme.mediaQueries.mobile} {
    transform: none;
    top: 20%;
    left: 18%;
    width: calc(100vw * (260 / 393));
    height: 60%;
  }
`

const Bread2Image = styled.img`
  width: calc(100vw * (117 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translate(0%, -210%);

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const projects = { rizzsumo: rizzsumoImg, chownow: chownowImg, dinoaura: dinoauraImg, lovealarm: lovealarmImg }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    if (typeof window !== 'undefined') {
      handleResize() // Set initial state
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <ProjectsContainer id="past-projects">
      <MobileHeader>Check out these inspiring projects from past years!</MobileHeader>
      <MainCardContainer>
        <TapeImage src={tape} />
        <MainCardImage src={hoveredProject ? projects[hoveredProject] : maincard} />
        {!hoveredProject && <MainText>Check out these inspiring projects from past years!</MainText>}
      </MainCardContainer>

      <RizzsumoCardContainer
        onMouseEnter={() => setHoveredProject('rizzsumo')}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <TapeImage src={tape} />
        <Project1Image src={project1} />
        <ProjectText>
          <Project1Title>Rizzsumo</Project1Title>
          <Project1Description>Bringing a world of interests, and friendships in front of you.</Project1Description>
          <ProjectButton onClick={() => window.open('https://devpost.com/software/rizzsumo', '_blank')}>
            Check it out now!
          </ProjectButton>
        </ProjectText>
        <BreadImage src={bread} />
      </RizzsumoCardContainer>

      <ChownowCardContainer
        onMouseEnter={() => setHoveredProject('chownow')}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <TapeImage src={tape} />
        <Project1Image src={isMobile ? chowmob : project1} />
        <ProjectText>
          <Project1Title>Chow-now</Project1Title>
          <Project1Description>
            Discretely providing victims of domestic violence with the help they need.
          </Project1Description>
          <ProjectButton onClick={() => window.open('https://devpost.com/software/chow-now', '_blank')}>
            Check it out now!
          </ProjectButton>
        </ProjectText>
        <CroissantImage src={croissant} />
      </ChownowCardContainer>

      <ChococakeCardContainer>
        <ChococakeCardImage src={chococake} />
      </ChococakeCardContainer>

      <DessertCardsContainer>
        <BrownieCardImage src={brownies} />
        <BlueberryCardImage src={blueberry} />
      </DessertCardsContainer>

      <DinoauraCardContainer
        onMouseEnter={() => setHoveredProject('dinoaura')}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <TapeImage src={tape} />
        <DinoauraCardImage src={isMobile ? dinomob : dinocard} />
        <DinoauraText>
          <Project1Title>Dinoaura</Project1Title>
          <Project1Description>
            People are more likely to take advice when it is personalized to be for someone like them. DinoAura lets you
            take a personality test and then becomes a perfect emotional outlet for someone like you!
          </Project1Description>
          <ProjectButton onClick={() => window.open('https://devpost.com/software/dinoaura', '_blank')}>
            Check it out now!
          </ProjectButton>
        </DinoauraText>
        <BreadBasketImage src={breadbasket} />
      </DinoauraCardContainer>

      <LovealarmCardContainer
        onMouseEnter={() => setHoveredProject('lovealarm')}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <Bread2Image src={bread2} />
        {isMobile && <TapeImage src={tape} />}
        <LovealarmCardImage src={isMobile ? lovealarmmob : lovecard} />
        <LovealarmText>
          <Project1Title>Love Alarm</Project1Title>
          <Project1Description>
            Anonymously connect with others within a 10-metre radius by ringing their love alarm.
          </Project1Description>
          <ProjectButton onClick={() => window.open('https://devpost.com/software/lovealarm', '_blank')}>
            Check it out now!
          </ProjectButton>
        </LovealarmText>
      </LovealarmCardContainer>
    </ProjectsContainer>
  )
}

export default Projects
