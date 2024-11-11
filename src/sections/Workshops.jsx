import React, { useState } from 'react';
import styled from 'styled-components'
import nugget from '../../public/assets/images/nugget.svg'
import apis1 from '../../public/assets/images/apis1.svg'
import apis2 from '../../public/assets/images/apis2.svg'
import hackathons1 from '../../public/assets/images/hackathons1.svg'
import hackathons2 from '../../public/assets/images/hackathons2.svg'
import figma1 from '../../public/assets/images/figma1.svg'
import figma2 from '../../public/assets/images/figma2.svg'
import internships1 from '../../public/assets/images/internships1.svg'
import internships2 from '../../public/assets/images/internships2.svg'
import react1 from '../../public/assets/images/react1.svg'
import react2 from '../../public/assets/images/react2.svg'
import version1 from '../../public/assets/images/version1.svg'
import version2 from '../../public/assets/images/version2.svg'
import webdev1 from '../../public/assets/images/webdev1.svg'
import webdev2 from '../../public/assets/images/webdev2.svg'
import careers1 from '../../public/assets/images/careers1.svg'
import careers2 from '../../public/assets/images/careers2.svg'
import pitching1 from '../../public/assets/images/pitching1.svg'
import pitching2 from '../../public/assets/images/pitching2.svg'

const WorkshopsContainer = styled.div`
  position: relative;
  min-height: calc(100vw * (2050 / 1280));
  top: calc(100vw * (-630 / 1280));
`

const Nugget = styled.img`
  position: absolute;
  margin-left: calc(100vw * (190 / 1280));
  margin-top: calc(100vw * (-72 / 1280));
  width: calc(100vw * (164 / 1280));
  height: calc(100vw * (180 / 1280));
`

const Schedule = styled.div`
  position: absolute;
  margin-top: calc(100vw * (32 / 1280));
  margin-right: calc(100vw * (128 / 1280));
  z-index: 1;
  background-image: url('./assets/images/schedule.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  aspect-ratio: 349/513;
  width: calc(100vw * (310 / 1280));
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 28% 37% 37%;
  gap: 50px;
`

const Text = styled.div`
  margin-left: calc(100vw * (84 / 1280));
`

const Title = styled.h1`
  font-weight: 700;
  font-size: calc(100vw * (30 / 1280));
  color: #51483E;
  margin-top: calc(100vw * (25.6 / 1280));
  white-space: nowrap;
`

const SubTitle = styled.p`
  position: relative;
  font-weight: 600;
  font-size: calc(100vw * (22 / 1280));
  color: white;
  text-align: center;
  margin-top: calc(100vw * (32 / 1280));
`

const Paragraph = styled.p`
  font-weight: 500;
  font-size: calc(100vw * (16 / 1280));
  color: white;
  justify-self: center;
  align-self: center;
  width: 74%;
  margin-top: calc(100vw * (12 / 1280));
`

const ParagraphSmall = styled.p`
  font-weight: 500;
  font-size: calc(100vw * (14 / 1280));
  color: white;
  justify-self: center;
  align-self: center;
  width: 74%;
  margin-top: calc(100vw * (6.4 / 1280));
`

const Description = styled.p`
  font-weight: 500;
  font-size: calc(100vw * (16 / 1280));
  color: #51483E;
`

const Squares = styled.div`
  margin-top: calc(100vw * (32 / 1280));
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Square = styled.img`
  margin-right: calc(100vw * (12 / 1280));
  margin-bottom: calc(100vw * (14 / 1280));
  width: calc(100vw * (145 / 1280));
  height: calc(100vw * (124 / 1280));
`

const Workshops = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (item, e) => {
    setHoveredItem(item);
    e.currentTarget.src = item.hoverSrc;
  };

  const handleMouseLeave = (item, e) => {
    setHoveredItem(null);
    e.currentTarget.src = item.defaultSrc;
  };

  const items = [
    { name: "Hackathons 101", dateAndTime: "Tuesday, Jan 14 | 5:00 PM", description: "First-time hacker? Mosey on down to Hackathons 101! In this workshop, we’ll cover the basics of hackathons, including building your team, kickstarting your project, and making the most of your time. We will also cover key HackCamp information to ensure you’re prepped for the weekend!", defaultSrc: hackathons2, hoverSrc: hackathons1 },
    { name: "Intro to Figma", defaultSrc: figma2, hoverSrc: figma1 },
    { name: "Intro to Version Control", defaultSrc: version2, hoverSrc: version1 },
    { name: "Intro to Web Dev", defaultSrc: webdev2, hoverSrc: webdev1 },
    { name: "Intro to React", defaultSrc: react2, hoverSrc: react1 },
    { name: "Intro to APIs", defaultSrc: apis2, hoverSrc: apis1 },
    { name: "Internships 101", defaultSrc: internships2, hoverSrc: internships1 },
    { name: "Tech Career Exploration", defaultSrc: careers2, hoverSrc: careers1 },
    { name: "Pitching 101", defaultSrc: pitching2, hoverSrc: pitching1 },
  ];

  return (
    <WorkshopsContainer>
      <Grid>
        <Text>
          <Title>Discover New Skills</Title>
          <Description>Not sure where to start? Don’t worry, hackathons are a great place to learn new skills! Before the hackathon, nwHacks will host a series of workshops to help hackers gear up for the weekend. Everyone is invited to attend our workshops, regardless of skill level! 
          <br/><br/> Throughout the hackathon, there will also be opportunities for hackers to attend sponsor-led workshops.
          <br/><br/> For more resources, check out our self-learning wiki.</Description>
        </Text>
        <Squares>
        {items.map((item, index) => (
            <Square
              key={index}
              src={item.defaultSrc}
              onMouseOver={(e) => handleMouseOver(item, e)}
              onMouseLeave={(e) => handleMouseLeave(item, e)}
            />
          ))}
        </Squares>
        <div>
            {hoveredItem ? (
              <Schedule>
                <SubTitle>{hoveredItem.name}</SubTitle>
                <Paragraph>{hoveredItem.dateAndTime}</Paragraph>
                <Paragraph>{hoveredItem.description}</Paragraph>
              </Schedule>
            ) : (
              <Schedule>
                <SubTitle>Workshop Schedule</SubTitle>
                <Paragraph>Tuesday, Jan 14</Paragraph>
                <ParagraphSmall><b>5:00PM</b> &nbsp; &nbsp; Hackathons 101</ParagraphSmall>
                <ParagraphSmall><b>6:00PM</b> &nbsp; &nbsp; Intro to Figma</ParagraphSmall>
                <ParagraphSmall><b>7:30PM</b> &nbsp; &nbsp; Intro to Version Control</ParagraphSmall>
                <Paragraph>Wednesday, Jan 15</Paragraph>
                <ParagraphSmall><b>5:00PM</b> &nbsp; &nbsp; Intro to Web Dev</ParagraphSmall>
                <ParagraphSmall><b>6:00PM</b> &nbsp; &nbsp; Intro to APIs</ParagraphSmall>
                <ParagraphSmall><b>7:30PM</b> &nbsp; &nbsp; Intro to React</ParagraphSmall>
                <Paragraph>Thursday, Jan 16</Paragraph>
                <ParagraphSmall><b>5:00PM</b> &nbsp; &nbsp; Internships 101</ParagraphSmall>
                <ParagraphSmall><b>6:00PM</b> &nbsp; &nbsp; Tech Career Exploration</ParagraphSmall>
                <ParagraphSmall><b>7:30PM</b> &nbsp; &nbsp; Pitching 101</ParagraphSmall>
              </Schedule>
            )}
        </div>
      </Grid>
      <Nugget src={nugget} />
    </WorkshopsContainer>
  )
}

export default Workshops
