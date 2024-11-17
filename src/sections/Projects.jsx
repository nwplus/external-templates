import React, { useState } from 'react';
import styled from 'styled-components';

import noodleDoodleHolder from '@assets/images/projects/NoodleDoodleHolder.svg';
import reworkdAIHolder from '@assets/images/projects/ReworkdAIHolder.svg';
import bowls from '@assets/images/projects/bowls.svg';
import litbowls from '@assets/images/projects/litbowls.svg';
import TV from '@assets/images/projects/TV.svg';
import OnTV from '@assets/images/projects/onTV.svg';
import reworkdAI from '@assets/images/projects/sculptures.svg';
import litReworkdAI from '@assets/images/projects/litSculptures.svg';
import duoASLCard from '@assets/images/projects/duoASLCard.svg';
import duoASLHand from '@assets/images/projects/handSculptures.svg';
import litDuoASLHand from '@assets/images/projects/litHandSculptures.svg';
import yapYapCard from '@assets/images/projects/yapYapCard.svg';
import yapYapAccessories from '@assets/images/projects/yapYapAccessories.svg';
import litYapYapAccessories from '@assets/images/projects/litYapYapAccessories.svg';
import pitchAICard from '@assets/images/projects/pitchAICard.svg';
import pitchAIModel from '@assets/images/projects/pitchAIModel.svg';
import litPitchAIModel from '@assets/images/projects/litPitchAIModel.svg';
import nuggetImg from '@assets/images/projects/nugget.svg';
import nuggetArm from '@assets/images/projects/nuggetArm.svg';

const ProjectsContainer = styled.div`
  aspect-ratio: 1280/812;
  height: 100%;
  position: relative;
  z-index: 1;
  width: 100%;
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
`;

const Description = styled.p`
  font-family: 'LT Museum';
  color: white;
  font-size: 1.2em;
  position: relative;
  top: 140px;
  text-align: center;
  z-index: 1;
`;

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
  // z-index: 1;
  width: 100%;
`;

const ProjectImageCard = styled.img`
  position: relative;
  display: block;
  margin: 0 auto;
  // z-index: 2;
`;

const NoodleDoodleImage = styled(ProjectImageBase)`
`;

const NoodleDoodleCard = styled(ProjectImageCard)`
  width: 267.95px;
  height: auto;
  top: -140px;
`;


const ReworkdAIImage = styled(ProjectImageBase)`
`;

const ReworkdAICard = styled(ProjectImageCard)`
  width: 267.95px;
  height: auto;
  top: -140px;
`;


const DuoASLImage = styled(ProjectImageBase)`
  top: -300px;
  z-index: 4;
`;

const DuoASLCard = styled(ProjectImageCard)`
  width: 140.52px;
  height: auto;
  top: -300px;
`;


const YapYapImage = styled(ProjectImageBase)`
  top: -300px;
  z-index: 3;
`;

const YapYapCard = styled(ProjectImageCard)`
  width: 140.52px;
  height: auto;
  top: -340px;
`;

const PitchAIImage = styled(ProjectImageBase)`
  top: -300px;
  z-index: 3;
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
`;

const TVButton = styled.a`
  display: inline-block;
  background-color: #F0D798;
  color: black;
  font-family: 'LT Museum';
  font-size: 1em;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFC633;
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

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tvLit, setTvLit] = useState(false);

  const handleHover = (project) => {
    setHoveredProject(project);
    setTvLit(true);
    setTimeout(() => setTvLit(false), 10000);
    setTimeout(() => setHoveredProject(null), 10000);
  };

  const projects = [
    {
      id: 1,
      name: 'Noodle Doodle',
      normalImage: bowls,
      litImage: litbowls,
      holderImage: noodleDoodleHolder,
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
    </ProjectsContainer>
  );
};

export default Projects;
