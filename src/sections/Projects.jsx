import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import rizzsumo from '@assets/images/projects/rizzsumo.png'
import dinoaura from '@assets/images/projects/dinoaura.png'
import lovealarm from '@assets/images/projects/lovealarm.png'
import chownow from '@assets/images/projects/chow-now.png'
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

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;
  position: relative;
  aspect-ratio: 1280/812;
  padding: 0 calc(100vw * (73 / 1683));
  // height: 100%;
  // position: relative;
  // z-index: 1;
  // width: 100%;
  // background: #f0e9d7;

  // ${p => p.theme.mediaQueries.tablet} {
  //   position: relative;
  //   aspect-ratio: 834 / 1150;
  // }

  // ${p => p.theme.mediaQueries.mobile} {
  //   aspect-ratio: 487 / 1006;
  //   position: relative;
  //   width: 100%;
  //   overflow: hidden;
  // }
`

const Description = styled.p`
  color: white;
  font-size: calc(100vw * (20 / 1280));
  font-family: 'HK Grotesk Medium';
  font-weight: 500;
  position: relative;
  top: calc(100vw * (40 / 1280));
  text-align: center;
  z-index: 1;

  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (20 / 834));
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (20 / 487));
    top: 30px;
  }
`

const DesktopTabletProjects = styled.div`
  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const MobileProjects = styled.div`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    margin: 0 auto;
    width: 100vw;
    height: 60vh;
  }
`

const MainCardContainer = styled.div`
  grid-column: 2;
  grid-row: 3 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const MainCardImage = styled.img`
  width: calc(100vw * (497 / 1920));
  height: auto;
  z-index: 1;
`

const MainText = styled.p`
  font-family: 'Gloock Regular';
  font-weight: 600;
  font-size: calc(100vw * (48 / 1920));
  color: #a6321e;
  position: absolute;
  text-align: center;
  z-index: 10;
  width: calc(100vw * (497 / 1920));
  padding: calc(100vw * (40 / 1920));
`

const TapeImage = styled.img`
  width: calc(100vw * (188 / 1920));
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`

const RizzsumoCardContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(10%, 37%);
`

const ChownowCardContainer = styled.div`
  grid-column: 2;
  grid-row: 5 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(5%, -11%);
`

const Project1Image = styled.img`
  width: calc(100vw * (497 / 1920));
  height: auto;
  z-index: 1;
`

const Project1Title = styled.p`
  font-family: 'Happy Time';
  font-weight: 400;
  font-size: calc(100vw * (40 / 1920));
  font-style: italic;
  color: #a6321e;
`

const Project1Description = styled.p`
  font-weight: 400;
  font-size: calc(100vw * (18 / 1920));
  padding: calc(100vw * (20 / 1920)) 0px;
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
`

const ChococakeCardContainer = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(7%, 30%);
`

const ChococakeCardImage = styled.img`
  width: calc(100vw * (422 / 1920));
  height: auto;
  z-index: 1;
`

const DessertCardsContainer = styled.div`
  grid-column: 1;
  grid-row: 3 / span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BrownieCardImage = styled.img`
  width: calc(100vw * (307 / 1920));
  height: auto;
  z-index: 5;
  position: absolute;
  top: 35%;
  left: 43%;
  transform: translate(-50%, -50%);
`

const BlueberryCardImage = styled.img`
  width: calc(100vw * (304 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  top: 61%;
  left: 80%;
  transform: translate(-50%, -46%);
`

const BreadImage = styled.img`
  width: calc(100vw * (175 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translateX(140%);
`

const CroissantImage = styled.img`
  width: calc(100vw * (360 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translate(55%, -40%);
`

const DinoauraCardContainer = styled.div`
  grid-column: 3;
  grid-row: 1 / span 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(-10%, 23%);
`

const DinoauraCardImage = styled.img`
  width: calc(100vw * (497 / 1920));
  height: auto;
  z-index: 1;
  transform: translateY(-5%);
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
`

const BreadBasketImage = styled.img`
  width: calc(100vw * (236 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translate(90%, 53%);
`

const LovealarmCardContainer = styled.div`
  grid-column: 3;
  grid-row: 4 / span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(-15%, -3%);
`

const LovealarmCardImage = styled.img`
  width: calc(100vw * (352 / 1920));
  height: auto;
  z-index: 1;
`

const LovealarmText = styled.p`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -51%);
  height: 50%;
  z-index: 5;
`

const Bread2Image = styled.img`
  width: calc(100vw * (117 / 1920));
  height: auto;
  z-index: 3;
  position: absolute;
  transform: translate(0%, -210%);
`

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [tvLit, setTvLit] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)
  const projects = { rizzsumo: rizzsumo, chownow: chownow, dinoaura: dinoaura, lovealarm: lovealarm }

  const handleHover = project => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setHoveredProject(project)
    setTvLit(true)

    timeoutRef.current = setTimeout(() => {
      setTvLit(false)
      setHoveredProject(null)
    }, 10000)
  }

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    },
    []
  )

  return (
    <ProjectsContainer id="past-projects">
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
        <Project1Image src={project1} />
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
        <DinoauraCardImage src={dinocard} />
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
        <LovealarmCardImage src={lovecard} />
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

      {/* <DesktopTabletProjects>
        <ProjectItems>
          {projects.map(project => (
            <ProjectContainer key={project.id} onMouseEnter={() => handleHover(project)}>
              <project.Component src={hoveredProject?.id === project.id ? project.litImage : project.normalImage} />
              <project.Card src={project.holderImage} />
            </ProjectContainer>
          ))}

          <TVContainer>
            <TVImage src={tvLit ? OnTV : TV} />
            <NuggetImage src={nuggetImg} />
            <NuggetArmImage src={nuggetArm} />
            {tvLit && hoveredProject && (
              <TVOverlay>
                <TVText>{hoveredProject.description}</TVText>
                <TVButton href={hoveredProject.link} target="_blank" rel="noopener noreferrer">
                  Check it out!
                </TVButton>
              </TVOverlay>
            )}
          </TVContainer>
        </ProjectItems>
      </DesktopTabletProjects> */}

      {/* <MobileProjects>
        <Carousel
          currentIndex={currentIndex}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map(project => (
            <ProjectSlide key={project.id}>
              <TVText>{project.description}</TVText>
              <TVButton href={project.link} target="_blank" rel="noopener noreferrer">
                Check it out!
              </TVButton>
              <project.Component src={project.mobileImage} alt={project.name} />
            </ProjectSlide>
          ))}
        </Carousel>
        <LeftButton onClick={handleLeftClick}>
          <img src={leftArrow} alt="Carousel Left Arrow" />
        </LeftButton>
        <RightButton onClick={handleRightClick}>
          <img src={rightArrow} alt="Carousel Left Arrow" />
        </RightButton>
        <DotsContainer>
          {projects.map((_, index) => (
            <Dot isActive={index === currentIndex} onClick={() => handleDotClick(index)} />
          ))}
        </DotsContainer>
      </MobileProjects> */}
    </ProjectsContainer>
  )
}

export default Projects
