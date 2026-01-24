import React, { useState } from 'react'
import styled from 'styled-components'

// import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const ProjectsContainer = styled.div`
  position: relative;
  aspect-ratio: 1512/1100;
  width: 100%;
  height: 100%;
  background: #c1e8fe;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 1271;
  }
`

// PROJECT TEACUPS
const MindfulMeadows = styled.img`
  width: calc(100vw * (229 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (475 / 1512));
  left: calc(100vw * (350 / 1512));
  cursor: pointer;
`

const MindfulMeadowsSelected = styled.img`
  width: calc(100vw * (245 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (460 / 1512));
  left: calc(100vw * (335 / 1512));
  cursor: pointer;
`

const MindfulMeadowsLabel = styled.img`
  width: calc(100vw * (149 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (440 / 1512));
  left: calc(100vw * (400 / 1512));
`

const DinoBuddies = styled.img`
  width: calc(100vw * (175 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (483 / 1512));
  left: calc(100vw * (585 / 1512));
  cursor: pointer;
`

const DinoBuddiesLabel = styled.img`
  width: calc(100vw * (148 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (450 / 1512));
  left: calc(100vw * (610 / 1512));
`

const DinoBuddiesSelected = styled.img`
  width: calc(100vw * (200 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (484 / 1512));
  left: calc(100vw * (575 / 1512));
  cursor: pointer;
`

const BigFish = styled.img`
  width: calc(100vw * (137 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (490 / 1512));
  left: calc(100vw * (790 / 1512));
  cursor: pointer;
`

const BigFishLabel = styled.img`
  width: calc(100vw * (104 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (450 / 1512));
  left: calc(100vw * (810 / 1512));
`

const BigFishSelected = styled.img`
  width: calc(100vw * (160 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (475 / 1512));
  left: calc(100vw * (780 / 1512));
  cursor: pointer;
`

const BusBuddies = styled.img`
  width: calc(100vw * (196 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (490 / 1512));
  left: calc(100vw * (960 / 1512));
  cursor: pointer;
`

const BusBuddiesLabel = styled.img`
  width: calc(100vw * (129 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (455 / 1512));
  left: calc(100vw * (980 / 1512));
`

const BusBuddiesSelected = styled.img`
  width: calc(100vw * (260 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (455 / 1512));
  left: calc(100vw * (930 / 1512));
  cursor: pointer;
`

// SMOKES
const PastProjectsSmoke = styled.img`
  width: calc(100vw * (783 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (660 / 1512));
  left: calc(100vw * (350 / 1512));
`

const MindfulMeadowsSmoke = styled.img`
  width: calc(100vw * (774 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (610 / 1512));
  left: calc(100vw * (355 / 1512));
`

const DinoAuraSmoke = styled.img`
  width: calc(100vw * (797 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (600 / 1512));
  left: calc(100vw * (355 / 1512));
`

const BigFishSmoke = styled.img`
  width: calc(100vw * (731 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (660 / 1512));
  left: calc(100vw * (398 / 1512));
`

const BusBuddiesSmoke = styled.img`
  width: calc(100vw * (659 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (625 / 1512));
  left: calc(100vw * (425 / 1512));
`

// BACKGROUND
const Deer = styled.img`
  width: calc(100vw * (253 / 1512));
  z-index: 5;
  position: absolute;
  bottom: calc(100vw * (280 / 1512));
  left: calc(100vw * (25 / 1512));
`

const Bunny = styled.img`
  width: calc(100vw * (273 / 1512));
  z-index: 5;
  position: absolute;
  bottom: calc(100vw * (270 / 1512));
  right: calc(100vw * (25 / 1512));
`

const CloudTwo = styled.img`
  width: calc(100vw * (1500 / 1512));
  z-index: 1;
  position: absolute;
  bottom: calc(100vw * (260 / 1512));
  left: calc(100vw * (0 / 1512));
`

const CloudOne = styled.img`
  width: calc(100vw * (1500 / 1512));
  z-index: 2;
  position: absolute;
  bottom: calc(100vw * (120 / 1512));
  left: calc(100vw * (0 / 1512));
`

const Table = styled.img`
  width: calc(100vw * (1377 / 1512));
  z-index: 6;
  position: absolute;
  bottom: calc(100vw * (190 / 1512));
  left: calc(100vw * (60 / 1512));
`
const Cat = styled.img`
  width: calc(100vw * (190 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (121 / 1512));
  left: calc(100vw * (460 / 1512));
`

const DarkerGround = styled.img`
  width: calc(100vw * (1600 / 1512));
  z-index: 3;
  position: absolute;
  bottom: calc(100vw * (120 / 1512));
`

const LightGround = styled.img`
  width: calc(100vw * (1600 / 1512));
  z-index: 4;
  position: absolute;
  bottom: calc(100vw * (65 / 1512));
`

const Bushes = styled.img`
  width: calc(100vw * (1600 / 1512));
  z-index: 5;
  position: absolute;
  bottom: calc(100vw * (-200 / 1512));
`

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
  //   }

  //   if (typeof window !== 'undefined') {
  //     handleResize() // Set initial state
  //     window.addEventListener('resize', handleResize)
  //   }

  //   return () => {
  //     if (typeof window !== 'undefined') {
  //       window.removeEventListener('resize', handleResize)
  //     }
  //   }
  // }, [])

  const handleOnClick = selected => {
    if (selected === selectedProject) {
      setSelectedProject(null)
    } else {
      setSelectedProject(selected)
    }
  }

  return (
    <ProjectsContainer id="past-projects">
      {selectedProject === null && <PastProjectsSmoke src="/assets/images/projects/past_projects_smoke.svg" />}
      {selectedProject === 'mindfulMeadows' && (
        <MindfulMeadowsSmoke src="/assets/images/projects/mindful_meadows_smoke.svg" />
      )}
      {selectedProject === 'dinoBuddies' && <DinoAuraSmoke src="/assets/images/projects/dino_aura_smoke.svg" />}
      {selectedProject === 'bigFish' && <BigFishSmoke src="/assets/images/projects/big_fish_smoke.svg" />}
      {selectedProject === 'busBuddies' && <BusBuddiesSmoke src="/assets/images/projects/bus_buddies_smoke.svg" />}

      {selectedProject === 'mindfulMeadows' ? (
        <MindfulMeadowsSelected
          src="/assets/images/projects/mindful_meadows_selected.svg"
          onClick={() => handleOnClick('mindfulMeadows')}
        />
      ) : (
        <MindfulMeadows
          src="/assets/images/projects/mindful_meadows_teacup.svg"
          onClick={() => handleOnClick('mindfulMeadows')}
        />
      )}
      <MindfulMeadowsLabel src="/assets/images/projects/mindful_meadows_label.svg" />

      {selectedProject === 'dinoBuddies' ? (
        <DinoBuddiesSelected
          src="/assets/images/projects/dino_buddies_selected.svg"
          onClick={() => handleOnClick('dinoBuddies')}
        />
      ) : (
        <DinoBuddies
          src="/assets/images/projects/dino_buddies_teacup.svg"
          onClick={() => handleOnClick('dinoBuddies')}
        />
      )}
      <DinoBuddiesLabel src="/assets/images/projects/dino_buddies_label.svg" />

      {selectedProject === 'bigFish' ? (
        <BigFishSelected src="/assets/images/projects/big_fish_selected.svg" onClick={() => handleOnClick('bigFish')} />
      ) : (
        <BigFish src="/assets/images/projects/big_fish_teacup.svg" onClick={() => handleOnClick('bigFish')} />
      )}
      <BigFishLabel src="/assets/images/projects/big_fish_label.svg" />

      {selectedProject === 'busBuddies' ? (
        <BusBuddiesSelected
          src="/assets/images/projects/bus_buddies_selected.svg"
          onClick={() => handleOnClick('busBuddies')}
        />
      ) : (
        <BusBuddies src="/assets/images/projects/bus_buddies_teacup.svg" onClick={() => handleOnClick('busBuddies')} />
      )}
      <BusBuddiesLabel src="/assets/images/projects/bus_buddies_label.svg" />

      <Deer src="/assets/images/projects/deer.svg" />
      <Bunny src="/assets/images/projects/bunny.svg" />
      <CloudTwo src="/assets/images/projects/cloud_two.svg" />
      <CloudOne src="/assets/images/projects/cloud_one.svg" />
      <Table src="/assets/images/projects/table.svg" />
      <Cat src="/assets/images/projects/cat.svg" />
      <DarkerGround src="/assets/images/projects/darker_ground.svg" />
      <LightGround src="/assets/images/projects/light_ground.svg" />
      <Bushes src="/assets/images/projects/bushes_divider.svg" />
    </ProjectsContainer>
  )
}

export default Projects
