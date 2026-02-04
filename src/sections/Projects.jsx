import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const OuterContainer = styled.div`
  position: relative;
`

const ProjectsContainer = styled.div`
  position: relative;
  aspect-ratio: 1512/1100;
  width: 100%;
  height: 100%;
  background: #c1e8fe;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393 / 850;
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

  &:hover {
    opacity: 0;
  }
`

const MindfulMeadowsSelected = styled.img`
  width: calc(100vw * (245 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (460 / 1512));
  left: calc(100vw * (335 / 1512));
  cursor: pointer;
  opacity: ${p => (p.isSelected ? 1 : 0)};

  &:hover {
    opacity: 1;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (185 / 393));
    bottom: calc(100vw * (310 / 393));
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
`

const MindfulMeadowsLabel = styled.img`
  width: calc(100vw * (149 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (440 / 1512));
  left: calc(100vw * (400 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (116 / 393));
    bottom: calc(100vw * (295 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const DinoBuddies = styled.img`
  width: calc(100vw * (175 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (483 / 1512));
  left: calc(100vw * (585 / 1512));
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`

const DinoBuddiesLabel = styled.img`
  width: calc(100vw * (148 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (450 / 1512));
  left: calc(100vw * (610 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (119 / 393));
    bottom: calc(100vw * (295 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const DinoBuddiesSelected = styled.img`
  width: calc(100vw * (200 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (484 / 1512));
  left: calc(100vw * (575 / 1512));
  cursor: pointer;
  opacity: ${p => (p.isSelected ? 1 : 0)};

  &:hover {
    opacity: 1;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (181 / 393));
    bottom: calc(100vw * (310 / 393));
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
`

const BigFish = styled.img`
  width: calc(100vw * (137 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (490 / 1512));
  left: calc(100vw * (790 / 1512));
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`

const BigFishLabel = styled.img`
  width: calc(100vw * (104 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (450 / 1512));
  left: calc(100vw * (810 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (104 / 393));
    bottom: calc(100vw * (285 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const BigFishSelected = styled.img`
  width: calc(100vw * (160 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (475 / 1512));
  left: calc(100vw * (780 / 1512));
  cursor: pointer;
  opacity: ${p => (p.isSelected ? 1 : 0)};

  &:hover {
    opacity: 1;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (156 / 393));
    bottom: calc(100vw * (300 / 393));
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
`

const BusBuddies = styled.img`
  width: calc(100vw * (196 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (490 / 1512));
  left: calc(100vw * (960 / 1512));
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`

const BusBuddiesLabel = styled.img`
  width: calc(100vw * (129 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (455 / 1512));
  left: calc(100vw * (980 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (121 / 393));
    bottom: calc(100vw * (290 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const BusBuddiesSelected = styled.img`
  width: calc(100vw * (260 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (455 / 1512));
  left: calc(100vw * (930 / 1512));
  cursor: pointer;
  opacity: ${p => (p.isSelected ? 1 : 0)};

  &:hover {
    opacity: 1;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (220 / 393));
    bottom: calc(100vw * (300 / 393));
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (420 / 393));
    bottom: calc(100vw * (530 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const DinoAuraSmoke = styled.img`
  width: calc(100vw * (797 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (600 / 1512));
  left: calc(100vw * (355 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (431 / 393));
    bottom: calc(100vw * (500 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const BigFishSmoke = styled.img`
  width: calc(100vw * (731 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (660 / 1512));
  left: calc(100vw * (398 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (400 / 393));
    bottom: calc(100vw * (520 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
`

const BusBuddiesSmoke = styled.img`
  width: calc(100vw * (659 / 1512));
  z-index: 7;
  position: absolute;
  bottom: calc(100vw * (625 / 1512));
  left: calc(100vw * (425 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (427 / 393));
    bottom: calc(100vw * (500 / 393));
    left: 50%;
    transform: translateX(-50%);
  }
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

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (964 / 393));
    bottom: calc(100vw * (300 / 393));
    left: calc(100vw * (-520 / 393));
  }
`

const CloudOne = styled.img`
  width: calc(100vw * (1500 / 1512));
  z-index: 2;
  position: absolute;
  bottom: calc(100vw * (120 / 1512));
  left: calc(100vw * (0 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (964 / 393));
    bottom: calc(100vw * (240 / 393));
    left: calc(100vw * (-400 / 393));
  }
`

const Table = styled.img`
  width: calc(100vw * (1377 / 1512));
  z-index: 6;
  position: absolute;
  bottom: calc(100vw * (190 / 1512));
  left: calc(100vw * (60 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: 100vw;
    left: 0;
  }
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
  z-index: 45;
  position: absolute;
  bottom: calc(100vw * (-170 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (600 / 393));
    bottom: calc(100vw * (-40 / 393));
    left: calc(100vw * (0 / 393));
  }
`

const DevpostBtn = styled.a`
  position: absolute;
  ${p => p.devpostTop || 'top: calc(100vw * (320 / 1512));'}
  ${p => p.devpostLeft || 'left: calc(100vw * (710 / 1512));'}
  color: #000000;
  text-decoration: underline;
  font-family: 'Quicksand';
  z-index: 10;
  opacity: ${p => (p.visible ? 1 : 0)};
  transition: opacity 0.3s ease;

  &:hover {
    color: #095575;
  }

  ${p => p.theme.mediaQueries.mobile} {
    bottom: calc(100vw * (200 / 393));
  }
`

// MOBILE CAROUSEL STYLES
const CarouselWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const SlidesContainer = styled.div`
  display: flex;
  width: 400%;
  height: 100%;
  transform: translateX(${p => -p.currentSlide * 25}%);
  transition: transform 0.3s ease-out;
`

const Slide = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px 0;
  box-sizing: border-box;
`

const PaginationDots = styled.div`
  position: absolute;
  bottom: calc(100vw * (235 / 393));
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 11;
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${p => (p.active ? '#8B7355' : '#FFFFFF')};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:nth-child(1) {
    transform: translateY(-4px);
  }
  &:nth-child(2) {
    transform: translateY(-2px);
  }
  &:nth-child(3) {
    transform: translateY(-2px);
  }
  &:nth-child(4) {
    transform: translateY(-4px);
  }
`

const MobileSideTeacup = styled.img`
  position: absolute;
  width: calc(100vw * (${p => p.mobileWidth || 80} / 393));
  opacity: 0.6;
  bottom: ${p => p.bottom || 'calc(100vw * (360 / 393))'};
  ${p => (p.left ? `left: calc(${p.left} + 100vw * (20 / 393));` : '')}
  ${p => (p.right ? `right: calc(${p.right} + 100vw * (20 / 393));` : '')}
  z-index: 8;
`

const PROJECTS_DATA = [
  {
    id: 'mindfulMeadows',
    devpost: 'https://devpost.com/software/mindful-meadows',
    devpostTop: 'top: calc(100vw * (320 / 1512));',
    devpostLeft: 'left: calc(100vw * (700 / 1512));',
    sideTeacups: [
      { src: '/assets/images/projects/dino_buddies_teacup.svg', right: '20px', width: '70px', mobileWidth: 90 },
    ],
  },
  {
    id: 'dinoBuddies',
    devpost: 'https://devpost.com/software/dinoaura',
    devpostTop: 'top: calc(100vw * (320 / 1512));',
    devpostLeft: 'left: calc(100vw * (720 / 1512));',
    sideTeacups: [
      { src: '/assets/images/projects/mindful_meadows_teacup.svg', left: '10px', width: '100px', mobileWidth: 106 },
      { src: '/assets/images/projects/big_fish_teacup.svg', right: '20px', width: '60px', mobileWidth: 72 },
    ],
  },
  {
    id: 'bigFish',
    devpost: 'https://devpost.com/software/best-fish',
    devpostTop: 'top: calc(100vw * (310 / 1512));',
    devpostLeft: 'left: calc(100vw * (730 / 1512));',
    sideTeacups: [
      { src: '/assets/images/projects/dino_buddies_teacup.svg', left: '10px', width: '100px', mobileWidth: 90 },
      { src: '/assets/images/projects/bus_buddies_teacup.svg', right: '10px', width: '80px', mobileWidth: 97 },
    ],
  },
  {
    id: 'busBuddies',
    devpost: 'https://devpost.com/software/busbuddies-3k9bqn',
    devpostTop: 'top: calc(100vw * (320 / 1512));',
    devpostLeft: 'left: calc(100vw * (710 / 1512));',
    sideTeacups: [{ src: '/assets/images/projects/big_fish_teacup.svg', left: '20px', width: '60px', mobileWidth: 72 }],
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = e => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (diff > threshold && currentSlide < PROJECTS_DATA.length - 1) {
      setCurrentSlide(prev => prev + 1)
    } else if (diff < -threshold && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }

  const handleOnClick = selected => {
    if (selected === selectedProject) {
      setSelectedProject(null)
    } else {
      setSelectedProject(selected)
    }
  }

  return (
    <OuterContainer id="past-projects">
      {!isMobile ? (
        <ProjectsContainer>
          {selectedProject === null && <PastProjectsSmoke src="/assets/images/projects/past_projects_smoke.svg" />}
          {selectedProject === 'mindfulMeadows' && (
            <MindfulMeadowsSmoke src="/assets/images/projects/mindful_meadows_smoke.svg" />
          )}
          {selectedProject === 'dinoBuddies' && <DinoAuraSmoke src="/assets/images/projects/dino_aura_smoke.svg" />}
          {selectedProject === 'bigFish' && <BigFishSmoke src="/assets/images/projects/big_fish_smoke.svg" />}
          {selectedProject === 'busBuddies' && <BusBuddiesSmoke src="/assets/images/projects/bus_buddies_smoke.svg" />}

          <MindfulMeadows
            src="/assets/images/projects/mindful_meadows_teacup.svg"
            onClick={() => handleOnClick('mindfulMeadows')}
          />
          <MindfulMeadowsSelected
            src="/assets/images/projects/mindful_meadows_selected.svg"
            onClick={() => handleOnClick('mindfulMeadows')}
            isSelected={selectedProject === 'mindfulMeadows'}
          />
          <MindfulMeadowsLabel src="/assets/images/projects/mindful_meadows_label.svg" />

          <DinoBuddies
            src="/assets/images/projects/dino_buddies_teacup.svg"
            onClick={() => handleOnClick('dinoBuddies')}
          />
          <DinoBuddiesSelected
            src="/assets/images/projects/dino_buddies_selected.svg"
            onClick={() => handleOnClick('dinoBuddies')}
            isSelected={selectedProject === 'dinoBuddies'}
          />
          <DinoBuddiesLabel src="/assets/images/projects/dino_buddies_label.svg" />

          <BigFish src="/assets/images/projects/big_fish_teacup.svg" onClick={() => handleOnClick('bigFish')} />
          <BigFishSelected
            src="/assets/images/projects/big_fish_selected.svg"
            onClick={() => handleOnClick('bigFish')}
            isSelected={selectedProject === 'bigFish'}
          />
          <BigFishLabel src="/assets/images/projects/big_fish_label.svg" />

          <BusBuddies
            src="/assets/images/projects/bus_buddies_teacup.svg"
            onClick={() => handleOnClick('busBuddies')}
          />
          <BusBuddiesSelected
            src="/assets/images/projects/bus_buddies_selected.svg"
            onClick={() => handleOnClick('busBuddies')}
            isSelected={selectedProject === 'busBuddies'}
          />
          <BusBuddiesLabel src="/assets/images/projects/bus_buddies_label.svg" />

          <DevpostBtn
            href={selectedProject ? PROJECTS_DATA.find(p => p.id === selectedProject)?.devpost : '#'}
            visible={selectedProject !== null}
            devpostTop={selectedProject ? PROJECTS_DATA.find(p => p.id === selectedProject)?.devpostTop : undefined}
            devpostLeft={selectedProject ? PROJECTS_DATA.find(p => p.id === selectedProject)?.devpostLeft : undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </DevpostBtn>

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
      ) : (
        <ProjectsContainer>
          <CarouselWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <SlidesContainer currentSlide={currentSlide}>
              {PROJECTS_DATA.map(project => (
                <Slide key={project.id}>{/* Smoke and content will be positioned absolutely outside */}</Slide>
              ))}
            </SlidesContainer>
          </CarouselWrapper>

          {currentSlide === 0 && <MindfulMeadowsSmoke src="/assets/images/projects/mobile/mindful_meadows_smoke.svg" />}
          {currentSlide === 1 && <DinoAuraSmoke src="/assets/images/projects/mobile/dino_aura_smoke.svg" />}
          {currentSlide === 2 && <BigFishSmoke src="/assets/images/projects/mobile/big_fish_smoke.svg" />}
          {currentSlide === 3 && <BusBuddiesSmoke src="/assets/images/projects/mobile/bus_buddies_smoke.svg" />}

          {currentSlide === 0 && (
            <>
              <MindfulMeadowsSelected src="/assets/images/projects/mindful_meadows_selected.svg" />
              <MindfulMeadowsLabel src="/assets/images/projects/mindful_meadows_label.svg" />
            </>
          )}
          {currentSlide === 1 && (
            <>
              <DinoBuddiesSelected src="/assets/images/projects/dino_buddies_selected.svg" />
              <DinoBuddiesLabel src="/assets/images/projects/dino_buddies_label.svg" />
            </>
          )}
          {currentSlide === 2 && (
            <>
              <BigFishSelected src="/assets/images/projects/big_fish_selected.svg" />
              <BigFishLabel src="/assets/images/projects/big_fish_label.svg" />
            </>
          )}
          {currentSlide === 3 && (
            <>
              <BusBuddiesSelected src="/assets/images/projects/bus_buddies_selected.svg" />
              <BusBuddiesLabel src="/assets/images/projects/bus_buddies_label.svg" />
            </>
          )}

          {PROJECTS_DATA[currentSlide].sideTeacups.map(teacup => (
            <MobileSideTeacup
              key={`${PROJECTS_DATA[currentSlide].id}-teacup-${teacup.src}`}
              src={teacup.src}
              left={teacup.left}
              right={teacup.right}
              width={teacup.width}
              mobileWidth={teacup.mobileWidth}
              bottom={teacup.bottom}
            />
          ))}

          <PaginationDots>
            {PROJECTS_DATA.map(project => (
              <Dot
                key={project.id}
                active={project.id === PROJECTS_DATA[currentSlide].id}
                onClick={() => setCurrentSlide(PROJECTS_DATA.findIndex(p => p.id === project.id))}
              />
            ))}
          </PaginationDots>

          <Table src="/assets/images/projects/mobile/table.svg" />
          <Bushes src="/assets/images/projects/bushes_divider.svg" />
          <CloudTwo src="/assets/images/projects/cloud_two.svg" />
          <CloudOne src="/assets/images/projects/cloud_one.svg" />
        </ProjectsContainer>
      )}
    </OuterContainer>
  )
}

export default Projects
