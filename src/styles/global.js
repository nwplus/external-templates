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
    background: #F0E9D7;
  }
  body {
    position: relative;
  }
  
  :root {
      font-family: 'Poppins', sans-serif;

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
      }
    }
`

export default GlobalStyles
