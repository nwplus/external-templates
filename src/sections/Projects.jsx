import React, { useState, useRef } from 'react'
import styled from 'styled-components';

import noodleDoodleHolder from '@assets/images/projects/NoodleDoodleHolder.svg';
import reworkdAIHolder from '@assets/images/projects/ReworkdAIHolder.svg';
import bowls from '@assets/images/projects/bowls.svg';
import litbowls from '@assets/images/projects/litbowls.svg';
import mobileBowls from '@assets/images/projects/mobileBowls.svg';
import TV from '@assets/images/projects/TV.svg';
import OnTV from '@assets/images/projects/onTV.svg';
import reworkdAI from '@assets/images/projects/sculptures.svg';
import litReworkdAI from '@assets/images/projects/litSculptures.svg';
import mobileReworkdAI from '@assets/images/projects/mobileSculptures.svg';
import duoASLCard from '@assets/images/projects/duoASLCard.svg';
import duoASLHand from '@assets/images/projects/handSculptures.svg';
import litDuoASLHand from '@assets/images/projects/litHandSculptures.svg';
import mobileDuoASLHand from '@assets/images/projects/mobileHandSculptures.svg';
import yapYapCard from '@assets/images/projects/yapYapCard.svg';
import yapYapAccessories from '@assets/images/projects/yapYapAccessories.svg';
import litYapYapAccessories from '@assets/images/projects/litYapYapAccessories.svg';
import mobileYapYapAccessories from '@assets/images/projects/mobileYapYapAccessories.svg';
import pitchAICard from '@assets/images/projects/pitchAICard.svg';
import pitchAIModel from '@assets/images/projects/pitchAIModel.svg';
import litPitchAIModel from '@assets/images/projects/litPitchAIModel.svg';
import mobilePitchAIModel from '@assets/images/projects/mobilePitchAIModel.svg';
import nuggetImg from '@assets/images/projects/nugget.svg';
import nuggetArm from '@assets/images/projects/nuggetArm.svg';

import leftArrow from '@assets/images/carouselLeft.svg'
import rightArrow from '@assets/images/carouselRight.svg'

const ProjectsContainer = styled.div`
  aspect-ratio: 1280/812;
  height: 100%;
  position: relative;
  z-index: 1;
  width: 100%;

  ${p => p.theme.mediaQueries.tablet} {
    position: relative;
    aspect-ratio: 834 / 1150;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1006;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
`;

const ProjectsBackground = styled.div`
  background-image: url('./assets/images/projects_background.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${p => p.theme.mediaQueries.tablet} {
    background-image: url('./assets/images/tabletProjectsBackground.svg');
  }

  ${p => p.theme.mediaQueries.mobile} {
    background-image: url('./assets/images/mobileProjectsBackground.svg');
  }
`;

const Title = styled.p`
  font-family: 'LT Museum';
  color: white;
  font-size: calc(100vw * (40 / 1280));
  font-weight: 700;
  position: relative;
  top: 120px;
  text-align: center;
  z-index: 1;

  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (40 / 1280));
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (140 / 1280));
    top: 20px;
  }
`;

const Description = styled.p`
  font-family: 'LT Museum';
  color: white;
  font-size: 1.2em;
  position: relative;
  top: 140px;
  text-align: center;
  z-index: 1;

  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (40 / 1280));
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (60 / 1280));
    top: 30px;
  }
`;

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
const MobileProjectInfo = styled.div`
  position: relative;
  top: 360px;
  width: 80%;
  display: block;
  margin: 0 auto;
`

const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  position: relative;
  padding: 20px;
  margin-top: calc(100vh * (380 / 1280));
`;

const ProjectContainer = styled.div`
  position: relative;
  width: fit-content;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

const ProjectImageBase = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
  transition: opacity 0.3s ease;
  width: 100%;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
  }
`;

const ProjectImageCard = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
  // z-index: 2;
`;

const NoodleDoodleImage = styled(ProjectImageBase)`
  ${p => p.theme.mediaQueries.mobile} {
    width: 60%;
    height: auto;
    top: calc(100vh * (680 / 1280));
  }
`;

const NoodleDoodleCard = styled(ProjectImageCard)`
  width: 267.95px;
  height: auto;
  top: -140px;
`;


const ReworkdAIImage = styled(ProjectImageBase)`
  ${p => p.theme.mediaQueries.mobile} {
    width: 50%;
    height: auto;
    top: calc(100vh * (680 / 1280));
  }
`;

const ReworkdAICard = styled(ProjectImageCard)`
  width: 267.95px;
  height: auto;
  top: -140px;
`;


const DuoASLImage = styled(ProjectImageBase)`
  top: -300px;
  z-index: 4;
  ${p => p.theme.mediaQueries.mobile} {
    width: 60%;
    height: auto;
    top: calc(100vh * (680 / 1280));
  }
`;

const DuoASLCard = styled(ProjectImageCard)`
  width: 140.52px;
  height: auto;
  top: -300px;
`;


const YapYapImage = styled(ProjectImageBase)`
  top: -300px;
  z-index: 3;
  ${p => p.theme.mediaQueries.mobile} {
    width: 60%;
    height: auto;
    top: calc(100vh * (680 / 1280));
  }
`;

const YapYapCard = styled(ProjectImageCard)`
  width: 140.52px;
  height: auto;
  top: -340px;
`;

const PitchAIImage = styled(ProjectImageBase)`
  top: -300px;
  z-index: 3;
  ${p => p.theme.mediaQueries.mobile} {
    width: 50%;
    height: auto;
    top: calc(100vh * (680 / 1280));\
  }
`;

const PitchAICard = styled(ProjectImageCard)`
  width: 140.52px;
  height: auto;
  top: -300px;
`;

const TVContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

const TVImage = styled.img`
  width: 475px;
  height: auto;
  z-index: 1;
`;

const TVOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const TVText = styled.p`
  font-family: 'LT Museum';
  position: relative;
  font-size: 1em;
  margin-top: -60%;
  margin-bottom: 20px;
  color: black;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    margin: 0 auto;
    width: 280px;
    margin-top: 50%;
    margin-bottom: 40px;
  }
`;

const TVButton = styled.a`
  display: block;
  background-color: #F0D798;
  color: black;
  font-family: 'LT Museum';
  font-size: 1em;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  text-align: center;
  width: 80%;

  &:hover {
    background-color: #FFC633;
  }

  ${p => p.theme.mediaQueries.mobile} {
    width: 200px;
  }
`;

const NuggetImage = styled.img`
  position: absolute;
  left: 50%;
  z-index: -1;
`
const NuggetArmImage = styled.img`
  position: absolute;
  left: 90%;
  top: 200px;
`

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ currentIndex }) => `-${currentIndex * 100}%`});
`;

const ProjectSlide = styled.div`
  width: 100vw;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: #ffc633;
  }
`;

const LeftButton = styled(NavigationButton)`
  position: absolute;
  left: 20px;
  margin-top: calc(100vh * (400 / 1280));
`;

const RightButton = styled(NavigationButton)`
  position: absolute;
  right: 20px;
  margin-top: calc(100vh * (400 / 1280));
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: calc(100vh * (130 / 1280));
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'e7dad0')};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #ffc633;
  }
`;

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tvLit, setTvLit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    if (swipeDistance > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (swipeDistance < -50) {
      // Swipe left
      setCurrentIndex((prevIndex) =>
        prevIndex < projects.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handleLeftClick = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const projects = [
    {
      id: 1,
      name: 'Noodle Doodle',
      normalImage: bowls,
      litImage: litbowls,
      holderImage: noodleDoodleHolder,
      mobileImage: mobileBowls,
      Component: NoodleDoodleImage,
      Card: NoodleDoodleCard,
      description:
        'Exhausted after a long day? Check out this hardware hack that can make tasty, custom noodles with just the click of a button.',
      link: 'https://devpost.com/software/noodle-doodle',
    },
    {
      id: 2,
      name: 'Reworkd AI',
      normalImage: reworkdAI,
      litImage: litReworkdAI,
      holderImage: reworkdAIHolder,
      mobileImage: mobileReworkdAI,
      Component: ReworkdAIImage,
      Card: ReworkdAICard,
      description:
        'Reworkd (now a YC backed startup company!) helps you generate responses for digital communication. This Chrome extension can also customize your replies to emails, message threads, or posts online.',
      link: 'https://devpost.com/software/reworkd',
    },
    {
      id: 3,
      name: 'Duo ASL',
      normalImage: duoASLHand,
      litImage: litDuoASLHand,
      holderImage: duoASLCard,
      mobileImage: mobileDuoASLHand,
      Component: DuoASLImage,
      Card: DuoASLCard,
      description:
        'DuoASL helps you learn ASL (American Sign Language) using gamification and neural networks.',
      link: 'https://devpost.com/software/duoasl',
    },
    {
      id: 4,
      name: 'Yap Yap',
      normalImage: yapYapAccessories,
      litImage: litYapYapAccessories,
      holderImage: yapYapCard,
      mobileImage: mobileYapYapAccessories,
      Component: YapYapImage,
      Card: YapYapCard,
      description:
        'Yap Yap connects pet owners through a playful and interactive app, helping you find companions for your furry friends.',
      link: 'https://devpost.com/software/yapyap-anonymous-social-journaling-app',
    },
    {
      id: 5,
      name: 'Pitch AI',
      normalImage: pitchAIModel,
      litImage: litPitchAIModel,
      holderImage: pitchAICard,
      mobileImage: mobilePitchAIModel,
      Component: PitchAIImage,
      Card: PitchAICard,
      description:
        'Pitch AI uses artificial intelligence to help improve your pitching technique by analyzing motion capture data in real-time.',
      link: 'https://devpost.com/software/pitch-ai',
    },
  ];

  return (
    <ProjectsContainer id="past-projects">
      <ProjectsBackground />
      <Title>PAST PROJECTS</Title>
      <Description>Take a tour of some amazing projects from the nwHacks archive!</Description>

      <DesktopTabletProjects>
        <ProjectItems>
          {projects.map((project) => (
            <ProjectContainer
              key={project.id}
              onMouseEnter={() => handleHover(project)}
            >
              <project.Component
                src={hoveredProject?.id === project.id ? project.litImage : project.normalImage}
              />
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
      </DesktopTabletProjects>

      <MobileProjects>
        <Carousel currentIndex={currentIndex} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {projects.map((project) => (
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
          <img src={leftArrow} />
        </LeftButton>
        <RightButton onClick={handleRightClick}>
          <img src={rightArrow} />
        </RightButton>
        <DotsContainer>
          {projects.map((_, index) => (
            <Dot
              key={index}
              isActive={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
      </MobileProjects>

    </ProjectsContainer>
  );
};

export default Projects;
