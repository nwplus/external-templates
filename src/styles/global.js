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
    min-width: 1562.3vh; // probably temporary
    overflow-y: hidden;
  }

  .root-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
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
