// import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import expandedCake from '@assets/images/expanded_cake.svg'

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  margin-right: 20px;
  margin-left: 20px;
`

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 8rem;
  }
`

const Title = styled.p`
  color: #A6321E;
  font-family: 'Gloock Regular', normal;
  text-align: center;
  font-size: calc(100vw * (52 / 1280));
  margin-bottom: calc(100vw * (40 / 1280));

  ${p => p.theme.mediaQueries.tablet} {
    font-size: calc(100vw * (40 / 834));
    font-weight: 700;
  }

  ${p => p.theme.mediaQueries.mobile} {
    font-size: calc(100vw * (42 / 487));
  }
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ExpandedCakeImage = styled.img`
  width: calc(100vw * (340 / 1280));
  height: auto;
  margin-top: -40px;
  @media (max-width: 768px) {
    margin-top: 8px;
    margin-bottom: -48px;
  }
`

const ValuesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  margin-top: 16px;
`

const ValueItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem; /* Space between dot/line and text */
`

const DotLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px; 
  margin-right: calc(100vw * (80 / 1280));

  @media (max-width: 768px) {
    display: none;
  }

`

const Dot = styled.div`
  width: calc(100vw * (16 / 1280));
  height: calc(100vw * (16 / 1280));
  background-color: #A6321E;
  border-radius: 50%;
`

const Line1 = styled.div`
  width: 3px;
  background-color: #A6321E;
  margin-top: 8px;
  margin-bottom: -56px;
  height: calc(100vw * (168 / 1280))
`

const Line2 = styled.div`
  width: 3px;
  background-color: #A6321E;
  margin-top: 8px;
  margin-bottom: -56px;
  height: calc(100vw * (188 / 1280))
`

const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw * (400 / 1280));

  @media (max-width: 768px) {
    max-width: calc(100vw * (880 / 1280));
  }
`

const ValueTitle = styled.p`
  font-size: calc(100vw * (20 / 1280));
  color: #A6321E;
  font-weight: bold;
  font-family: 'HappyTime', normal;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: calc(100vw * (32 / 1280));
  }
`

const ValueDescription = styled.p`
  font-size: calc(100vw * (12 / 1280));
  color: #4F2F22;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: calc(100vw * (24 / 1280));
  }
`

const Values = () => {
  return (
    <OuterContainer>
      <Title>Our Values</Title>
      <ValuesContainer>
        <ColumnContainer>
          <ExpandedCakeImage src={expandedCake} alt="Expanded Cake" />
        </ColumnContainer>
        <ColumnContainer>
          <ValuesList>
            <ValueItem>
              <DotLineContainer>
                <Dot />
                <Line1 />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Build Confidence</ValueTitle>
                <ValueDescription>
                  Develop career-ready skills, fight impostor syndrome, and create an invaluable support
                  network with friends, mentors, and sponsors. Regardless of your background, you bring a
                  unique and important perspective to tech. Like how there is always a treat for everyone,
                  there is always a place for you in tech—a space where everyone belongs.
                </ValueDescription>
              </ValueContent>
            </ValueItem>

            <ValueItem>
              <DotLineContainer>
                <Dot />
                <Line2 />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Learn Together</ValueTitle>
                <ValueDescription>
                  Whether you have never coded before, or you dream in assembly, challenge yourself to create
                  something meaningful! Learn new skills at our workshops and apply them to fresh and creative
                  projects! Regardless of your project’s completion at the end of the weekend, take pride in the
                  knowledge gained or the courage to try something new. It’s time to rise to the occasion because
                  it’s always sweet to learn more!
                </ValueDescription>
              </ValueContent>
            </ValueItem>

            <ValueItem>
              <DotLineContainer>
                <Dot />
              </DotLineContainer>
              <ValueContent>
                <ValueTitle>Explore in a Safe Space</ValueTitle>
                <ValueDescription>
                  Discover a community of like-minded, creative, and passionate individuals. Form lasting bonds,
                  share experiences, and create memories in an environment free from judgment, where all gender
                  identities and expressions are respected. We're all here unified under one cause—to strive for
                  better representation in tech!
                </ValueDescription>
              </ValueContent>
            </ValueItem>
          </ValuesList>
        </ColumnContainer>
      </ValuesContainer>
    </OuterContainer>
  )
}

export default Values;

// const [isMobile, setIsMobile] = useState(false)
// const [isTablet, setIsTablet] = useState(false)

// useEffect(() => {
//   const updateDeviceType = () => {
//     setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS.mobile)
//     setIsTablet(window.innerWidth <= SCREEN_BREAKPOINTS.tablet)
//   }

//   updateDeviceType()
//   window.addEventListener('resize', updateDeviceType)

//   return () => {
//     window.removeEventListener('resize', updateDeviceType)
//   }
// }, [])