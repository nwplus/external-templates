/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'


const BG = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding-top:200px;
  aspect-ratio: 1512 / 1260;
  background-image: url('./assets/images/projects/bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 0;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 392 / 634;
    background-image: url('./assets/images/projects/mobile_bg.svg');
  }
`

const MobileHeader = styled.div`
  display: none;
  background: #CAE1F5;
  padding: 100px 50px;

  ${p => p.theme.mediaQueries.mobile} {
    display: block;
  }
`

const Container = styled.div`
  padding-top:200px;
  background: linear-gradient(to bottom, #CAE1F5, #DDE9EE, #CAE1F5);
  position: relative;
  aspect-ratio: 1512 / 1265;
  width: 100vw;

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 392 / 634;
  }
`

const ContentGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;

  ${p => p.theme.mediaQueries.mobile} {
    grid-template-columns: 1fr
  }
`

const ButtonsContainer = styled.div`
  position: relative;
  width: 50vw;
  margin-left: 7vw;
  aspect-ratio: 1/1;

  ${p => p.theme.mediaQueries.mobile} {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 1/2;
  }
`

const ProjectButton = styled.div`
  position: absolute;
  top: ${props => props.$top ?? 'auto'};
  bottom: ${props => props.$bottom ?? 'auto'};
  left: ${props => props.$left ?? 'auto'};
  right: ${props => props.$right ?? 'auto'};
  border-radius: 15px;
  cursor: pointer;
  color: white;
  white-space: pre-line;
  font-weight: 500;
  font-size: calc(100vw * (15 / 834));
  border: solid 2px rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.03);
  transition: all 0.17s ease;
  backdrop-filter: blur(10px);
  padding: 15px 25px;
  box-shadow: ${props => props.$isSelected ? '0 0 30px rgba(255, 247, 200, 0.6)' : 'none'};

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
    top: ${props => props.$mobileTop ?? 'auto'};
    bottom: ${props => props.$mobileBottom ?? 'auto'};
    left: ${props => props.$mobileLeft ?? 'auto'};
    right: ${props => props.$mobileRight ?? 'auto'};
  }
`

const RightColumn = styled.div`
  padding-right: 7vw;
  padding-top: 10vh;

  ${p => p.theme.mediaQueries.mobile} {
    display: none;
  }
`

const DefaultState = styled.div`
  color: #213553;
`

const Title = styled.div`
  font-size: calc(100vw * (17 / 834));
  font-weight: 500;


  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (28 / 487));
    text-align: center;
  }
`

const Subtitle = styled.div`
  padding-top: 20px;
  font-size: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
    text-align: center;
  }
`

const InstructionText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 487));
    text-align: center;
    justify-content: center;
  }
`

const SelectedState = styled.div`
  color: #213553;

  ${p => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction:column;
  }
`

const ProjectTitle = styled.div`
  font-size: calc(100vw * (17 / 834));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (28 / 487));
    text-align: center;
  }
`

const ProjectDescription = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: calc(100vw * (20 / 1512));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (18 / 487));
    text-align: center;
  }
`

const LearnMoreLink = styled.a`
  border-radius: 15px;
  cursor: pointer;
  color: #213553;
  font-weight: 500;
  text-decoration: none;
  font-size: calc(100vw * (20 / 1512));
  border: solid 2px rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.17s ease;
  backdrop-filter: blur(10px);
  padding: 15px 25px;
  display: inline-block;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 487));
    margin-left: auto;
    margin-right: auto;
  }
`

const PROJECTS = {
  1: {
    name: "Braillelearn",
    description: "Braillearn aims to make learning Braille accessible and immersive, enabling more visually impaired individuals to learn Braille.",
    link: "https://devpost.com/software/braillearn"
  },
  2: {
    name: "Chit Chart",
    description: "Chit Chart is a healthcare documentation solution that automates the conversion of unstructured clinician notes and audio transcripts into structured data using AI and NLP techniques, streamlining the traditionally manual and time-intensive process.",
    link: "https://devpost.com/software/chit-chart-f04kn3"
  },
  3: {
    name: "Red Light Green Light",
    description: "Inspired by the popular Korean TV series 'Squid Game', this project combine UI design, distributed systems, computer vision, and textiles to rebuild the doll in 'Red Light Green Light'.",
    link: "https://devpost.com/software/red-squid-dead-squid"
  },
  4: {
    name: "LEKeys",
    description: `Inspired by the popular game Piano Tiles, LEKeys is a piano with illuminated keys to help make learning piano more affordable and fun!`,
    link: "https://devpost.com/software/lekeys"
  },
  5: {
    name: "Debuggy Ducky",
    description: "DebuggyDucky is a physical rubber duck that you can directly talk to, combining the idea of the classic debugging tool with the intelligence of AI for a more interactive and engaging coding experience.",
    link: "https://devpost.com/software/debuggyducky"
  }
}

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const projectPanelRef = useRef(null);
  const buttonsRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only check if something is selected
      if (selected !== null) {
        // Check if click is outside both the project panel and the buttons
        if (
          projectPanelRef.current && 
          !projectPanelRef.current.contains(event.target) &&
          buttonsRef.current &&
          !buttonsRef.current.contains(event.target) &&
          mobileRef.current && 
          !mobileRef.current.contains(event.target)
        ) {
          setSelected(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selected]);

    return (
      <>
    <div id="past-projects" />
        <MobileHeader ref={mobileRef}>
          {selected === null ? (
            <DefaultState>
              <Title>
                Past projects
              </Title>
              <Subtitle>
                Take a tour of some amazing projects from the nwHacks archive
              </Subtitle>
              <InstructionText>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.904 17.563C7.95718 17.8019 8.08215 18.0189 8.26214 18.1847C8.44214 18.3506 8.66855 18.4574 8.91101 18.491C9.15347 18.5245 9.40037 18.4831 9.61862 18.3722C9.83686 18.2614 10.016 18.0865 10.132 17.871L12.222 14.778L17.129 19.685C17.2281 19.7841 17.3457 19.8627 17.4752 19.9163C17.6046 19.9699 17.7434 19.9975 17.8835 19.9975C18.0236 19.9975 18.1624 19.9699 18.2918 19.9163C18.4213 19.8627 18.5389 19.7841 18.638 19.685L19.685 18.638C19.7841 18.5389 19.8627 18.4213 19.9163 18.2918C19.9699 18.1624 19.9975 18.0236 19.9975 17.8835C19.9975 17.7434 19.9699 17.6046 19.9163 17.4752C19.8627 17.3457 19.7841 17.2281 19.685 17.129L14.778 12.222L17.891 10.132C18.1065 10.0159 18.2814 9.8367 18.3921 9.61839C18.5029 9.40008 18.5442 9.15312 18.5106 8.91064C18.477 8.66816 18.37 8.44177 18.204 8.26184C18.038 8.08191 17.821 7.95704 17.582 7.904L4 4L7.904 17.563Z" stroke="#213553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Select a bubble to learn more!
              </InstructionText>
            </DefaultState>
          ) : (
            <SelectedState ref={projectPanelRef}>
              <ProjectTitle>
                {PROJECTS[selected].name}
              </ProjectTitle>
              <ProjectDescription>
                {PROJECTS[selected].description}
              </ProjectDescription>
              <LearnMoreLink href={PROJECTS[selected].link} target="_blank" rel="noreferrer noopener">
                Learn more
              </LearnMoreLink>
            </SelectedState>
          )}
        </MobileHeader>
        <Container>
          <BG />
          <ContentGrid>
            <ButtonsContainer ref={buttonsRef}>
            {[{
              id: 1,
              name: "Braillelearn",
              top: "30%",
              left: "0%",
              mobileTop: "7%",
              mobileLeft: "0%",
            },
            {
              id: 2,
              name: "Chit Chart",
              top: "15%",
              right: "25%",
              mobileTop: "10%",
              mobileRight: "5%",
            },
            {
              id: 3,
              name: `Red Light
              Green Light`,
              bottom: "30%",
              left: "10%",
              mobileTop: "20%",
              mobileLeft: "30%",
            },
            {
              id: 4,
              name: "LEKeys",
              top: "40%",
              right: "10%",
              mobileTop: "40%",
              mobileRight: "10%",
            },
            {
              id: 5,
              name: "Debuggy Ducky",
              bottom: "8%",
              left: "45%",
              mobileBottom: "45%",
              mobileLeft: "10%",
            }].map((b) => (
              <ProjectButton 
                key={b.id}
                $top={b.top}
                $bottom={b.bottom}
                $left={b.left}
                $right={b.right}
                $mobileTop={b.mobileTop}
                $mobileBottom={b.mobileBottom}
                $mobileLeft={b.mobileLeft}
                $mobileRight={b.mobileRight}
                $isSelected={selected === b.id}
                onClick={() => setSelected(selected === b.id ? null : b.id)}
              >
                {b.name}
              </ProjectButton>
            ))}
            </ButtonsContainer>

            <RightColumn>
              {selected === null ? (
                <DefaultState>
                  <Title>
                    Past projects
                  </Title>
                  <Subtitle>
                    Take a tour of some amazing projects from the nwHacks archive
                  </Subtitle>
                  <InstructionText>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.904 17.563C7.95718 17.8019 8.08215 18.0189 8.26214 18.1847C8.44214 18.3506 8.66855 18.4574 8.91101 18.491C9.15347 18.5245 9.40037 18.4831 9.61862 18.3722C9.83686 18.2614 10.016 18.0865 10.132 17.871L12.222 14.778L17.129 19.685C17.2281 19.7841 17.3457 19.8627 17.4752 19.9163C17.6046 19.9699 17.7434 19.9975 17.8835 19.9975C18.0236 19.9975 18.1624 19.9699 18.2918 19.9163C18.4213 19.8627 18.5389 19.7841 18.638 19.685L19.685 18.638C19.7841 18.5389 19.8627 18.4213 19.9163 18.2918C19.9699 18.1624 19.9975 18.0236 19.9975 17.8835C19.9975 17.7434 19.9699 17.6046 19.9163 17.4752C19.8627 17.3457 19.7841 17.2281 19.685 17.129L14.778 12.222L17.891 10.132C18.1065 10.0159 18.2814 9.8367 18.3921 9.61839C18.5029 9.40008 18.5442 9.15312 18.5106 8.91064C18.477 8.66816 18.37 8.44177 18.204 8.26184C18.038 8.08191 17.821 7.95704 17.582 7.904L4 4L7.904 17.563Z" stroke="#213553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Select a bubble to learn more!
                  </InstructionText>
                </DefaultState>
              ) : (
                <SelectedState ref={projectPanelRef}>
                  <ProjectTitle>
                    {PROJECTS[selected].name}
                  </ProjectTitle>
                  <ProjectDescription>
                    {PROJECTS[selected].description}
                  </ProjectDescription>
                  <LearnMoreLink href={PROJECTS[selected].link} target="_blank" rel="noreferrer noopener">
                    Learn more
                  </LearnMoreLink>
                </SelectedState>
              )}
            </RightColumn>
          </ContentGrid>
        </Container>
      </>
    )

}

export default Projects
