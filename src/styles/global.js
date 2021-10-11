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
    position: relative;
    background: black;
  }

  a {
    color: #052446;
    text-decoration: underline;
    transition: 200ms;

    &:hover {
      color: #00D88A;
      text-decoration: underline;
    }
  }
  
  :root {
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-Black.woff');
      font-style: normal;
      font-weight: 900;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-Bold.woff');
      font-style: normal;
      font-weight: 700;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-ExtraBold.woff');
      font-style: normal;
      font-weight: 800;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-Italic.woff');
      font-style: italic;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-Light.woff');
      font-style: normal;
      font-weight: 300;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-Medium.woff');
      font-style: normal;
      font-weight: 500;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-Regular.woff');
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'HK Grotesk';
      src: url('/assets/fonts/HKGrotesk-SemiBold.woff');
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }    

    font-family: 'HK Grotesk', sans-serif;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }
  }
`

export default GlobalStyles
