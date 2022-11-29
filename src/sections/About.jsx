import React from 'react';

import styled from 'styled-components';

import { LAPTOP, TABLET } from '@constants/measurements'


const AboutContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: 160px;
  min-height: calc(calc(779 / 1440) * 100vw);
  position: relative;
  z-index: 1;
  display: block;
`

const AboutLeft = styled.div`
  position: relative;
  width: 45%;
  left: 15%;
  display: block;
  @media (max-width: ${LAPTOP}) {
    width: 90%;
    left: 5%;
  }
  @media (max-width: ${TABLET}) {
    width: 90%;
    left: 5%;
  }
`
const AboutRight = styled.div`
  position: relative;
  margin-top: 60px;
  width: 45%;
  float: right;
  right: 5%;
  @media (max-width: ${LAPTOP}) {
    float: none;
    width: 90%;
    left: 5%;
  }
  @media (max-width: ${TABLET}) {
    float: none;
    width: 90%;
    left: 5%;
  }
`
const AboutTitle = styled.h1`
  font-weight: bold;
  font-family: 'HK Grotesk';
  font-weight: 900;
`

const AboutParagraph = styled.p`
  font-family: 'HK Grotesk';
  font-weight: 500;
`

function About() {
  return (
    <AboutContainer>
      <AboutLeft>
        <AboutTitle style={{ color: "#4453B0" }}>About nwHacks</AboutTitle>
        <AboutParagraph style={{ color: "#4453B0" }}>Join hundreds of hackers across the world at nwHacks on January  14-15th, 2023! Apply by December 27th, 2022 to participate as a hacker and apply by December 19th, 2022 to participate as a mentor or a volunteer.<br /><br />Whether you’re a seasoned hacker or you’re just getting into tech, nwHacks welcomes you; just bring an open mind and an insatiable desire to learn, and we’ll take care of the rest. Create a project, learn new skills, and bond with friends, old and new — all in 24 hours.</AboutParagraph>
      </AboutLeft>

      <AboutRight>
        <AboutTitle style={{ color: "#3C4BA5" }}>We’re back in person!</AboutTitle>
        <AboutParagraph style={{ color: "#3C4BA5" }}>Last year, we connected over 650 of the brightest developers, engineers, and designers worldwide to collaborate and create amazing projects online. This year, not only are we back in-person, we will also be bigger and better than ever! We will be returning to our regular in-person operations, and providing you with a more traditional hackathon experience. We look forward to seeing you—whether we are reuniting or meeting you for the first time—at nwHacks 2023.</AboutParagraph>
      </AboutRight>
    </AboutContainer>
  )
}

export default About;