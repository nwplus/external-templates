import React from 'react'
import styled, { keyframes } from 'styled-components'

// Keyframes for floating animation
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-60px);
  }
`

// Styled component for loading screen container
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #97C1FF; /* You can customize the background */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

// Styled component for floating image
const FloatingImage = styled.img`
  width: 39.7vw;
  height: 25.75vw;
  animation: ${float} 3s ease-in-out infinite;

  ${p => p.theme.mediaQueries.mobile} {
    width: 55.83vw;
    height: 36.23vw;
  }
`

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <FloatingImage src="assets/background/loading-screen/loading-screen.png" alt="LoadingScreen" />
    </LoadingContainer>
  )
}

export default LoadingScreen
