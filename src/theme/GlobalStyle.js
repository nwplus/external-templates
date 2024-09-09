import { createGlobalStyle } from 'styled-components'

// Remove comment once font is replaced
export const GlobalStyles = createGlobalStyle`
  * {
    :not(p) {
      margin: 0;
    }
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    position: relative;
    font-family: ${p => p.theme.typography.bodyFont};
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
    height: ${p => p.bodyHeight};
    overflow: hidden;

    ${p => p.theme.mediaQueries.mobile} {
      // uncomment this line when removing the placeholder for mobile
      ${'' /* height: auto; */}
      height: 170vw;
    }
  }
`

export default GlobalStyles
