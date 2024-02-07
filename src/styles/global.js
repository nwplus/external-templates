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
    @media (max-width: 768px) {
      min-width: 876.29vh;
    }
  }

  .root-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }

  .mobile-root-container {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 876.29vh;
    width: 100vw;
    height: 100vh;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-points-x: repeat(100vw);
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: none;
  }
  
  :root {
      font-family: 'HK Grotesk', sans-serif;

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
      }
    }
`

export default GlobalStyles
