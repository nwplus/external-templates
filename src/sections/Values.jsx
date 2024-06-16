import React from 'react'
import styled from 'styled-components'
/* eslint-disable react/no-danger */

const SectionTitle = styled.p`
  position: absolute;
  left: 428.92vh;
  top: 15.98vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`

const ValueCircle = styled.div`
  background-color: #000;
  color: #fbfbfb;
  font-family: "Yatra One";
  font-size: 2.84vh;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  width: 4.48vh;
  height: 4.48vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.19vh;
  padding-right: 0.05vh;
`

const ValueTitle = styled.p`
  margin-top: 1.5vh;

  color: #08373D;
  font-feature-settings: 'liga' off;
  font-size: calc(1rem + 1.5vh);
  font-style: normal;
  font-weight: 800;
  line-height: 140%;
  letter-spacing: 0.38px;
`

const ValueDescription = styled.p`
  margin-top: 1.52vh;
  width: 36.72vh;

  color: #08373D;
  font-family: "HK Grotesk Medium";
  font-size: calc(0.5rem + 1.2vh);
  font-style: normal;
  font-weight: 500;
  line-height: 122%;
  letter-spacing: -0.1px;
`

const ConfidenceValueContainer = styled.div`
  position: absolute;
  left: 428.92vh;
  top: 23.03vh;
`

const LearnValueContainer = styled.div`
  position: absolute;
  left: 472.5vh;
  top: 23.03vh;
`

const ExploreValueContainer = styled.div`
  position: absolute;
  left: 516.17vh;
  top: 23.03vh;
`

const Values = () => (
  <>
    <SectionTitle>Our Main Values</SectionTitle>
    <ConfidenceValueContainer>
      <ValueCircle>1</ValueCircle>
      <ValueTitle>Build confidence</ValueTitle>
      <ValueDescription>Develop career-ready skills, fight impostor syndrome, and build an invaluable support network with friends, mentors, and sponsors. You are welcome! Regardless of your background, you bring a unique and important perspective to tech. Set sail to discover your place in tech—a space where everyone belongs.</ValueDescription>
    </ConfidenceValueContainer>
    <LearnValueContainer>
      <ValueCircle>2</ValueCircle>
      <ValueTitle>Learn together</ValueTitle>
      <ValueDescription>Whether you have never coded before, or you dream in assembly, challenge yourself to create something meaningful. Learn new skills at our workshops and apply them to innovative projects! Regardless of your project’s completion at the end of the weekend, take pride in the knowledge gained or the courage to try something new. Let’s celebrate our journeys together!</ValueDescription>
    </LearnValueContainer>
    <ExploreValueContainer>
      <ValueCircle>3</ValueCircle>
      <ValueTitle>Explore in a safe space</ValueTitle>
      <ValueDescription>Discover a community of like-minded, creative, and passionate individuals. Build lasting bonds, share experiences, and create memories. We're all here unified under one cause – to strive for better representation in tech.</ValueDescription>
    </ExploreValueContainer>
  </>
)

export default Values