import React, { useState } from 'react'
import styled from 'styled-components'

const WorkshopsContainer = styled.div`
  position: relative;
  background: linear-gradient(to top, #78c7f3cc 0%, #94d2f5 30%, #ddffdb 100%);
  width: 100%;
  height: 100%;
  aspect-ratio: 1520/1300;
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
    aspect-ratio: 393/1600;
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
    top: calc(100vw * (550 / 393));
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
    top: calc(100vw * (1000 / 393));
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
    top: calc(100vw * (600 / 393));
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
  max-width: calc(100vw * (500 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (26 / 393));
    max-width: calc(100vw * (1500 / 1920));
  }
`

const WorkshopSubheader = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: calc(100vw * (20 / 1920));
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
    max-width: calc(100vw * (1500 / 1920));
  }
`

const WorkshopDescription = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: calc(100vw * (20 / 1920));
  line-height: calc(100vw * (22 / 1920));
  margin: calc(100vw * (30 / 1920)) 0 0 0;
  max-width: calc(100vw * (500 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (14 / 393));
    line-height: calc(100vw * (18 / 393));
    max-width: calc(100vw * (1500 / 1920));
  }
`

const WorkshopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(100vw * (18 / 1920));
  margin-top: calc(100vw * (8 / 1920));

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (12 / 393));
    margin-top: calc(100vw * (6 / 393));
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
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: calc(100vw * (28 / 1920));
    height: auto;
  }

  ${p => p.theme.mediaQueries.mobile} {
    img {
      width: calc(100vw * (20 / 393));
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
      top: calc(100vw * (470 / 393));
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
      header: 'Intro to PRD 101',
      subheader: 'Tuesday, March 4 at 5 PM',
      description:
        'Kickstart your project journey with our Intro to PRD workshop! Learn how to craft a clear and concise Product Requirements Document (PRD) that outlines your project goals, features, and user needs. This workshop will guide you through the essential components of a PRD, helping you communicate your vision effectively to your team and stakeholders.',
    },
    {
      header: 'Intro to Git',
      subheader: 'Tuesday, March 4 at 6 PM',
      description:
        'Ready to level up your coding skills? Join us for an Intro to Git workshop! Learn the essentials of version control, including how to create repositories, commit changes, and collaborate with others using branches and pull requests. Whether you’re a beginner or looking to refresh your skills, this workshop will equip you with the tools you need to manage your code like a pro.',
    },
    {
      header: 'Intro to Figma and UX',
      subheader: 'Tuesday, March 4 at 7 PM',
      description:
        "Design is a crucial aspect of any successful hackathon project. In this workshop, we'll explore the fundamentals of UI/UX design and how to create user-friendly interfaces that captivate your audience. From wireframing to prototyping, you'll gain practical skills to elevate your project's design and make a lasting impression!",
    },
    {
      header: 'Intro to Web Dev Pt. 1 (HTML/CSS + JS)',
      subheader: 'Wednesday, March 5 at 5 PM',
      description:
        'Want to learn how to build your first website? Come to our workshop to explore the basics of Web Development, and learn how to build a simple webpage using HTML and CSS! Make your website deliciously dynamic with JavaScript, perfect for any personal projects or designing your own personal portfolio.',
    },
    {
      header: 'Intro to Web Dev Pt. 2 (React + JS)',
      subheader: 'Wednesday, March 5 at 6:40 PM',
      description:
        'Take your web dev skills to the next level with React.js! React is one of the most popular front-end JavaScript libraries in the industry. Learn how to build your very first interactive user interface. If you are looking to put your JavaScript, HTML and CSS knowledge into action and dive into the world of dynamic web applications, this workshop is for you.',
    },
    {
      header: 'Intro to Express and APIs',
      subheader: 'Thursday, March 6 at 5 PM',
      description:
        "Ever wondered how apps talk to each other? Come join us for an Intro to APIs workshop! We'll break down what APIs are, how they work, and why they're so powerful. With hands-on activities, you'll learn how to make API calls, fetch data, and even use APIs to build cool projects. No prior experience needed!",
    },
    {
      header: 'Project Integration and Final Work Session',
      subheader: 'Thursday, March 6 at 6 PM',
      description:
        "Bring your projects to life with our Project Integration and Final Work Session! This workshop is designed to help you integrate various components of your project, troubleshoot any issues, and put the finishing touches on your work. Whether you're coding, designing, or preparing your presentation, our team will be there to support you every step of the way.",
    },
    {
      header: 'Pitching 101',
      subheader: 'Friday, March 7 at 5 PM',
      description:
        "Nervous about pitching your project at the hackathon? Don't worry, we've got you covered! Join our Pitching Workshop to learn how to craft a compelling story, engage your audience, and deliver a memorable pitch. With practical tips and hands-on practice, you'll be ready to wow the judges and make your project shine!",
    },
    {
      header: 'Networking 101',
      subheader: 'Friday, March 7 at 6 PM',
      description:
        "Networking is a key skill for any aspiring hacker or entrepreneur. In this workshop, we'll explore effective networking strategies, including how to make meaningful connections, communicate your ideas, and build lasting relationships. Whether you're attending a hackathon or a tech conference, you'll gain the confidence and skills to network like a pro!",
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
        <WorkshopSubheader>{currentWorkshop.subheader}</WorkshopSubheader>
        <WorkshopDescription>{currentWorkshop.description}</WorkshopDescription>
        <WorkshopNav>
          {workshopIndex > 0 && (
            <ArrowButton type="button" onClick={handlePrev} aria-label="Previous workshop">
              <img src="/assets/images/carouselLeft.svg" alt="Previous" />
            </ArrowButton>
          )}
          {workshopIndex < workshops.length - 1 && (
            <ArrowButton type="button" onClick={handleNext} aria-label="Next workshop">
              <img src="/assets/images/carouselRight.svg" alt="Next" />
            </ArrowButton>
          )}
        </WorkshopNav>
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
        Want to prepare your mise en place before the big weekend? Join us at our pre-hackathon workshops to learn how
        to hack, design, pitch, and more. By the time you walk out, you will have new skills, connections, and a sweet
        new project to add to your repertoire!
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
