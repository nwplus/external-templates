import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  :root {
      @font-face {
        font-family: 'HK Grotesk';
        src: local('HK Grotesk'), url(./fonts/HKGrotesk-Regular.otf) format('otf');
      }

      font-family: 'HK Grotesk';

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
      }
    }
`

export default GlobalStyles
