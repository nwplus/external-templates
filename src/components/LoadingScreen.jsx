import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Header1, Header3 } from './Typography'
// import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const HeadingAnimation = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: -22.94px 18.53px 193.2px 0px #fff8cc80;
  }
`
const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #142e3d;
`
const TitleContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  padding: 1.2rem;

  background-color: #70605a;
  border-bottom: solid #433f3f 0.3rem;
  border-radius: 0.5rem;

  animation: ${HeadingAnimation};
  animation-delay: 2s;
  animation-duration: 5s;
`
const TitleContent = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  padding: 1.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  border: solid #5b4f49 0.3rem;
  background-color: white;
  border-radius: 0.5rem;
`
const Heading = styled(Header1)`
  color: black;
  font-size: 6rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
const Subheading = styled(Header3)`
  color: black;
  font-size: 2rem;
  font-weight: 700;
`

const LoadingScreen = () => (
  <LoadingScreenContainer>
    <TitleContainer>
      <TitleContent>
        <Heading>nwHacks</Heading>
        <Subheading>2024</Subheading>
      </TitleContent>
    </TitleContainer>
  </LoadingScreenContainer>
)

export default LoadingScreen
