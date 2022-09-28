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
  }
  body {
    position: relative
    background: none;
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
