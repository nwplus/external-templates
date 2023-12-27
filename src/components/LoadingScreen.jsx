import { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'

const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #142e3d;
`
const TitleContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2rem;
  background-color: #70605a;
  border-bottom: solid #433f3f 0.3rem;
  box-shadow: -22.94px 18.53px 193.2px 0px #fff8cc80;
`

const TitleContent = styled.div`
  border: solid #433f3f 0.3rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const LoadingScreen = () => {
  return (
    <LoadingScreenContainer>
      <TitleContainer>
        <TitleContent>nwHacks</TitleContent>
      </TitleContainer>
    </LoadingScreenContainer>
  )
}

export default LoadingScreen
