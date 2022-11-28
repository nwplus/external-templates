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
    // background: blue;
    height: 300%; // For now
    background: linear-gradient(180deg, #FED9CD 0%, #CDCAEC 40.1%, #081160 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  body {
    position: relative
  }
  
  :root {
      @font-face {
        font-family: 'Example font';
        src: local('Example font'), url(./fonts/local_example_font.otf) format('otf');
      }

      font-family: 'Example font';

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
      }
    }
`

export default GlobalStyles
