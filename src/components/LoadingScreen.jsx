import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from 'src/theme/ThemeProvider'
import LoadingScreenImg from 'src/assets/images/loadingScreen.png'

const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #142e3d;
`

const LoadingScreen = () => {
  const hello = 10

  return <LoadingScreenContainer></LoadingScreenContainer>
}

export default LoadingScreen
