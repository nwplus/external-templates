// import { MOBILE } from '@constants/measurements'
import { createGlobalStyle } from 'styled-components'

// Remove comment once font is replaced
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html, body {
    overflow-x: hidden;
    background: linear-gradient(355deg, rgba(58,175,215,1) 0%, rgba(159,223,232,1) 100%);
  }
  body {
    position: relative;
  }
  
  :root {
      font-family: 'Space Grotesk', sans-serif;

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
      }
    }
`

export default GlobalStyles
