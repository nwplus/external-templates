import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import w1 from '../../public/assets/images/workshops/step1.svg'
import w2 from '../../public/assets/images/workshops/step2.svg'
import w3 from '../../public/assets/images/workshops/step3.svg'
import w4 from '../../public/assets/images/workshops/step4.svg'
import w5 from '../../public/assets/images/workshops/step5.svg'
import w6 from '../../public/assets/images/workshops/step6.svg'
import w7 from '../../public/assets/images/workshops/step7.svg'
import w8 from '../../public/assets/images/workshops/step8.svg'
import WorkshopCard from '@components/WorkshopCard'

const WorkshopsContainer = styled.div`
  position: relative;
  width: 100%;
  background: #f0e9d7;
  padding: calc(100vw * (150 / 1920));
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${p => p.theme.mediaQueries.tablet} {
    position: relative;
    aspect-ratio: 834 / 955;
  }

  ${p => p.theme.mediaQueries.mobile} {
    aspect-ratio: 487 / 1658;
    top: calc(100vw * (-470 / 487));
  }
`

const TabButtons = styled.div`
  display: flex;
  gap: calc(100vw * (20 / 1920));
  text-align: center;
  margin: calc(100vw * (30 / 1920)) 0px;

  ${p => p.theme.mediaQueries.mobile} {
    gap: calc(100vw * (10 / 393));
    margin: calc(100vw * (50 / 393)) 0px;
  }
`

const TabButton = styled.button`
  width: calc(100vw * (142.5 / 1920));
  padding: calc(100vw * (10 / 1920));
  font-family: Poppins;
  font-weight: 700;
  border-radius: 10.23px;
  border: solid #a6321e;
  background: ${({ selected }) => (selected ? '#a6321e' : 'none')}; // change background color when selected
  color: ${({ selected }) => (selected ? '#f0e9d7' : '#a6321e')};

  ${p => p.theme.mediaQueries.mobile} {
    width: calc(100vw * (90 / 393));
    border-radius: 6.7px;
    font-size: calc(100vw * (12.5 / 393));
  }
`

const Header = styled.h1`
  font-family: Gloock;
  font-weight: 400;
  font-size: calc(100vw * (64 / 1920));
  text-align: center;
  color: #a6321e;

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (30 / 393));
  }
`

const Link = styled.a`
  color: #51483e;
`

const Description = styled.p`
  font-weight: 400;
  font-family: 'Poppins';
  font-size: calc(100vw * (18 / 1920));
  color: #4f2f22;
  line-height: calc(100vw * (27 / 1920));
  margin: calc(100vw * (30 / 1920));
  text-align: center;

  ${p => p.theme.mediaQueries.mobile} {
    margin: calc(100vw * (20 / 393)) 0px;
    text-align: left;
    font-size: calc(100vw * (15 / 393));
    line-height: calc(100vw * (23 / 393));
    width: 84%;
  }
`

const WorkshopContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${p => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    gap: calc(100vw * (50 / 393));
  }
`

const Workshops = () => {
  const [selectedTab, setSelectedTab] = useState('one')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
  }, [])

  const items = {
    one: [
      {
        number: 1,
        name: 'Hackathons + Pitching 101',
        dateAndTime: 'Tuesday, March 4 at 5 PM',
        description:
          'Want to get the most out of your hackathon experience? Wondering what judges are looking for as you demo your project? Look no further, as the Hackathons + Pitching 101 workshop will teach you the key ingredients of a successful hackathon experience and set your team up for all the best at cmd-f!',
        imgSrc: w1,
      },
      {
        number: 2,
        name: 'Intro to Figma',
        dateAndTime: 'Tuesday, March 4 at 6 PM',
        description:
          "Want to learn the fundamentals of the UI/UX industry's leading design platform? Come join our Intro to Figma workshop where we will explore the fundamental tools of Figma. We will be exploring basic prototyping and take you through our design process to transform some low-fidelity sketches into high-fidelity designs.",
        imgSrc: w2,
      },
      {
        number: 3,
        name: 'Intro to Version Control',
        dateAndTime: 'Tuesday, March 4 at 7 PM',
        description:
          'Everything you need to know about collaborating with your teammates and transferring over code for cmd-f! Git ready to learn about version control, pull requests, branches, and more!',
        imgSrc: w3,
      },
    ],
    two: [
      {
        number: 4,
        name: 'Intro to Web Development',
        dateAndTime: 'Wednesday, March 5 at 5 PM',
        description:
          'Want to learn how to build your first website? Come to our workshop to explore the basics of Web Development, and learn how to build a simple webpage using HTML and CSS! This is perfect for any personal projects or designing your own personal portfolio.',
        imgSrc: w4,
      },
      {
        number: 5,
        name: 'Intro to JavaScript',
        dateAndTime: 'Wednesday, March 5 at 6 PM',
        description:
          "Ready to Level Up Your JavaScript Skills? Join our 80-min workshop for a deep dive into JavaScript essentials! From basic types to native functions, event handling, and DOM manipulation, you'll learn ways to make your amazing websites deliciously dynamic and functional with JavaScript.",
        imgSrc: w5,
      },
      {
        number: 6,
        name: 'Intro to React',
        dateAndTime: 'Wednesday, March 5 at 7:30 PM',
        description:
          'Take your web dev skills to the next level with React.js! React is one of the most popular front-end JavaScript libraries in the industry. Learn how to build your very first interactive user interface. If you are looking to put your JavaScript, HTML and CSS knowledge into action and dive into the world of dynamic web applications, this workshop is for you.',
        imgSrc: w6,
      },
    ],
    three: [
      {
        number: 7,
        name: 'Intro to Machine Learning (Python)',
        dateAndTime: 'Thursday, March 7 at 5 PM',
        description:
          "Join our workshop to whip up the basics of machine learning using Python! Perfect for beginners, you'll learn to mix data and algorithms to bake your own models. With hands-on exercises, you'll discover how to create and serve up data-driven solutions.",
        imgSrc: w7,
      },
      {
        number: 8,
        name: 'Internships + Networking 101',
        dateAndTime: 'Thursday, March 7 at 6:30 PM',
        description:
          "Ready to rise in the tech world? In this workshop, we'll mix the perfect ingredients for landing your first internship and building a network that sticks. You’ll learn about the job search process, gain resume tips, prep for interviews, and network with experienced panelists from diverse backgrounds.",
        imgSrc: w8,
      },
    ],
  }

  return (
    <WorkshopsContainer id="workshops">
      <Header>Workshops</Header>
      <Description>
        Want to prepare your mise en place before the big weekend? Join us at our pre-hackathon workshops to learn how
        to hack, design, pitch, and more. By the time you walk out, you will have new skills, connections, and a sweet
        new project to add to your repertoire!
      </Description>
      <Description>
        For more resources, check out our{' '}
        <Link href="https://www.nwplus.io/" target="_blank" rel="noreferrer">
          website
        </Link>{' '}
        and{' '}
        <Link href="https://resources.nwplus.io/" target="_blank" rel="noreferrer">
          self-learning wiki
        </Link>
        .
      </Description>
      <TabButtons>
        <TabButton onClick={() => setSelectedTab('one')} selected={selectedTab === 'one'}>
          Day 1
        </TabButton>
        <TabButton onClick={() => setSelectedTab('two')} selected={selectedTab === 'two'}>
          Day 2
        </TabButton>
        <TabButton onClick={() => setSelectedTab('three')} selected={selectedTab === 'three'}>
          Day 3
        </TabButton>
      </TabButtons>
      <WorkshopContent>
        {items[selectedTab].map((w, index) => (
          <WorkshopCard key={index} info={w} />
        ))}
      </WorkshopContent>
    </WorkshopsContainer>
  )
}

export default Workshops
