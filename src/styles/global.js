import { MOBILE } from '@constants/measurements'
import { createGlobalStyle } from 'styled-components'

// Remove comment once font is replaced
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    @media-query (max-width: ${MOBILE}) {
      background: #BFEFF0;
    }
  }
  body {
    position: relative;
    // min-width: 1562.3vh; // probably temporary
    overflow-y: hidden;
    max-height: 100vh;
  }

  .root-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-root-container {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 100svh;
    height: 100svh;
    max-height: 100svh;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-points-x: repeat(100vw);
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: none;

    @media (min-width: 768px) {
      display: none;
    }
  }
  
  :root {
      font-family: 'HK Grotesk', sans-serif;

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
      }
    }

  @keyframes sparkle {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sealAnimation {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
  }
    
`

export default GlobalStyles
