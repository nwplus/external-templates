import React, { useState } from 'react'
import styled from 'styled-components'

const WorkshopsContainer = styled.div`
  position: relative;
  background: linear-gradient(to top, #94d2f500 0%, #94d2f5 30%, #ddffdb 100%);
  width: 100%;
  height: 100%;
  aspect-ratio: 1520/1200;
  height: auto;
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
  padding-left: calc(100vw * (80 / 1920));

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/assets/images/workshops/green_backdrop.svg') top center / cover no-repeat;
    z-index: 0;
    pointer-events: none;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 393/1900;
    padding-left: 0;
    align-items: center;
    text-align: center;

    &::before {
      content: none;
    }
  }
`

const HeaderSign = styled.img`
  width: calc(100vw * (600 / 1920));
  height: auto;
  margin: calc(100vw * (150 / 1920)) 0 0 calc(100vw * (60 / 1920));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    width: calc(100vw * (300 / 393));
    left: calc(100vw * (60 / 393));
  }
`

const CloudImage = styled.img`
  position: absolute;
  width: calc(100vw * (800 / 1920));
  height: auto;
  top: calc(100vw * (80 / 1920));
  left: calc(100vw * (1050 / 1920));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (900 / 393));
    left: calc(100vw * (-90 / 393));
    width: calc(100vw * (700 / 393));
  }
`

const TeaPartyImage = styled.img`
  position: absolute;
  width: calc(100vw * (850 / 1920));
  height: auto;
  top: calc(100vw * (570 / 1920));
  left: calc(100vw * (1000 / 1920));
  z-index: 2;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (1350 / 393));
    left: calc(100vw * (-70 / 393));
    width: calc(100vw * (550 / 393));
  }
`

const WorkshopOverlay = styled.div`
  position: absolute;
  width: calc(100vw * (640 / 1920));
  top: calc(100vw * (180 / 1920));
  left: calc(100vw * (1400 / 1920));
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: calc(100vw * (12 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (950 / 393));
    left: calc(100vw * (196.5 / 393));
    width: calc(100vw * (300 / 393));
    gap: calc(100vw * (8 / 393));
  }
`

const WorkshopHeader = styled.h3`
  font-family: 'Bree Serif';
  font-weight: 400;
  color: #000000;
  font-size: calc(100vw * (40 / 1920));
  margin: 0;
  max-width: calc(100vw * (380 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (26 / 393));
    max-width: calc(100vw * (1500 / 1920));
  }
`

const WorkshopSubHeader = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #000000;
  font-size: calc(100vw * (24 / 1920));
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (16 / 393));
    max-width: calc(100vw * (1500 / 1920));
  }
`

const WorkshopDescription = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: calc(100vw * (20 / 1920));
  line-height: calc(100vw * (22 / 1920));
  margin: 0;
  max-width: calc(100vw * (500 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
    line-height: calc(100vw * (18 / 393));
    max-width: calc(100vw * (1500 / 1920));
  }
`

const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vw * (150 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    min-height: calc(100vw * (150 / 393));
  }
`

// const WorkshopDots = styled.div`
//   position: absolute;
//   top: calc(100vw * (900 / 1920));
//   left: calc(100vw * (1220 / 1920));
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: calc(100vw * (10 / 1920));
//   z-index: 10;

//   img {
//     width: calc(100vw * (14 / 1920));
//     height: auto;
//   }

//   ${p => p.theme.mediaQueries.mobile} {
//     position: static;
//     margin-top: calc(100vw * (12 / 393));
//     gap: calc(100vw * (8 / 393));

//     img {
//       width: calc(100vw * (12 / 393));
//     }
//   }
// `

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.left {
    left: calc(100vw * (0 / 1920));
  }

  &.right {
    right: calc(100vw * (0 / 1920));
  }

  img {
    width: calc(100vw * (45 / 1920));
    height: auto;
  }

  ${p => p.theme.mediaQueries.mobile} {
    &.left {
      left: calc(100vw * (-35 / 393));
    }

    &.right {
      right: calc(100vw * (-35 / 393));
    }

    img {
      width: calc(100vw * (30 / 393));
    }
  }
`

const Header = styled.p`
  font-family: 'Bree Serif';
  font-weight: 400;
  color: #000000;
  font-size: calc(100vw * (55 / 1920));
  line-height: calc(100vw * (48 / 1920));
  margin: calc(100vw * (60 / 1920)) 0 0 calc(100vw * (60 / 1920));
  text-align: left;
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    font-size: calc(100vw * (28 / 393));
    line-height: calc(100vw * (30 / 393));
    top: calc(100vw * (220 / 393));
    margin: calc(100vw * (18 / 393)) auto 0;
    text-align: center;
  }
`

const Description = styled.p`
  font-weight: 400;
  font-family: 'Quicksand', sans-serif;
  font-size: calc(100vw * (22 / 1920));
  color: #000000;
  line-height: calc(100vw * (27 / 1920));
  margin: calc(100vw * (24 / 1920)) 0 0 calc(100vw * (60 / 1920));
  text-align: left;
  max-width: calc(100vw * (700 / 1920));
  z-index: 1;

  ${p => p.theme.mediaQueries.mobile} {
    position: absolute;
    top: calc(100vw * (290 / 393));
    text-align: center;
    font-size: calc(100vw * (15 / 393));
    line-height: calc(100vw * (23 / 393));
    max-width: calc(100vw * (1500 / 1920));

    & + & {
      top: calc(100vw * (800 / 393));
    }
  }
`

const TextLink = styled.a`
  color: #c63359;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #e76c79;
  }
`

const Workshops = () => {
  // const [selectedTab, setSelectedTab] = useState('one')

  const workshops = [
    {
      header: 'Setting Up Your Project For Success',
      date: 'March 2, 2026',
      description:
        'Every great project starts with clarity, not code. This workshop focuses on problem discovery and ideation, guiding you through creating a lightweight Product Requirements Document (PRD) for an in-house Pomodoro app (built exclusively by nwPlus members).',
    },
    {
      header: 'Intro to Git/Version Control',
      date: 'March 2, 2026',
      description:
        'Learn the fundamentals of Git to track changes, collaborate with teammates, and navigate your codebase confidently as your project grows.',
    },
    {
      header: 'Intro to Figma & UX',
      date: 'March 2, 2026',
      description:
        'Ready to unleash your design skills? Join us as we learn the basics of UI and UX in Figma. You will design key screens and user flows for a Pomodoro app and shape an intuitive experience from start to finish.',
    },
    {
      header: 'Intro to Web Dev',
      subHeader: 'Pt 1: HTML/CSS + JS | Pt 2: React + JS',
      date: 'March 3, 2026',
      description:
        'Bring designs to life on the frontend using HTML, CSS, JavaScript, and React. Build interactive interfaces and transform your Pomodoro project from static pages into a dynamic app.',
    },
    {
      header: 'Intro to Express & APIs',
      date: 'March 4, 2026',
      description:
        'Explore what happens behind the scenes by building a backend with Express. Create APIs, handle data requests, and support core functionality for your Pomodoro app.',
    },
    {
      header: 'Project Integration & Final Work Session',
      date: 'March 4, 2026',
      description:
        'Ever felt stuck connecting frontend and backend in the final hours of a hackathon? This new workshop walks through integration and debugging, and gives you time to wrap up your Pomodoro project.',
    },
    {
      header: 'Pitching 101',
      date: 'March 5, 2026',
      description:
        'Now that your project is built, it is time to share it! Learn how to clearly pitch your idea, explain impact, and present your project with confidence.',
    },
    {
      header: 'Networking 101',
      date: 'March 5, 2026',
      description:
        'Ready to share your project and meet new people? This workshop covers how to start conversations, connect with mentors and sponsors, and build meaningful relationships during the hackathon.',
    },
  ]

  const [workshopIndex, setWorkshopIndex] = useState(0)

  const handlePrev = () => {
    setWorkshopIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setWorkshopIndex(prev => Math.min(workshops.length - 1, prev + 1))
  }

  const currentWorkshop = workshops[workshopIndex]

  return (
    <WorkshopsContainer id="workshops">
      <HeaderSign src="/assets/images/workshops/sign.svg" alt="Workshop Sign" />
      <CloudImage src="/assets/images/workshops/cloud.svg" alt="Cloud" />
      <TeaPartyImage src="/assets/images/workshops/teaparty.svg" alt="Tea party" />
      <WorkshopOverlay>
        <WorkshopHeader>{currentWorkshop.header}</WorkshopHeader>
        {currentWorkshop.subHeader && <WorkshopSubHeader>{currentWorkshop.subHeader}</WorkshopSubHeader>}
        <WorkshopSubHeader>{currentWorkshop.date}</WorkshopSubHeader>
        <DescriptionWrapper>
          {workshopIndex > 0 && (
            <ArrowButton type="button" className="left" onClick={handlePrev} aria-label="Previous workshop">
              <img src="/assets/images/workshops/arrow_left.svg" alt="Previous" />
            </ArrowButton>
          )}
          <WorkshopDescription>{currentWorkshop.description}</WorkshopDescription>
          {workshopIndex < workshops.length - 1 && (
            <ArrowButton type="button" className="right" onClick={handleNext} aria-label="Next workshop">
              <img src="/assets/images/workshops/arrow_right.svg" alt="Next" />
            </ArrowButton>
          )}
        </DescriptionWrapper>
        {/* <WorkshopDots>
          {workshops.map((_, index) => (
            <img
              key={`workshop-dot-${index}`}
              src={
                index === workshopIndex
                  ? '/assets/images/workshops/red_dot.svg'
                  : '/assets/images/workshops/black_dot.svg'
              }
              alt={index === workshopIndex ? 'Selected workshop' : 'Workshop'}
            />
          ))}
        </WorkshopDots> */}
      </WorkshopOverlay>
      <Header>Join us @cmd-f HackWeek!</Header>
      <Description>
        From painting the roses red to slaying the Jabberwock, join us at our pre-hackathon workshop series to learn how
        to hack, design, pitch, and more. Below is our curated list of workshops to help you plan your path:
        <br />
        <br />
        To the right is our curated list of workshops to help you plan your path! Click through the arrows to learn
        more!
        <br />
        <br />
        Each workshop offers practical guidance to help you bring ideas from concept to execution. While the workshops
        collectively walk through the process of building a project from idea to presentation, each session is designed
        to stand on its own and welcomes participants at any stage. By the time the weekend arrives, you will have new
        skills, connections, and a sweet new project to help guide your hackathon experience!
      </Description>
      <Description>
        For more resources, check out our{' '}
        <TextLink href="https://www.nwplus.io/" target="_blank" rel="noreferrer">
          website
        </TextLink>{' '}
        and{' '}
        <TextLink href="https://resources.nwplus.io/" target="_blank" rel="noreferrer">
          self-learning wiki
        </TextLink>
        .
      </Description>
    </WorkshopsContainer>
  )
}

export default Workshops
