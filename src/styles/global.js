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
    overflow-x: hidden;

    @media-query (max-width: ${MOBILE}) {
      background: #BFEFF0;
    }
  }
  body {
    position: relative;
  }
  .root-container {
    position: relative;
    padding-top: 120px;
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
