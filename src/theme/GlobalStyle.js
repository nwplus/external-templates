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
    margin: 0;
    font-family: ${p => p.theme.typography.bodyFont};
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
  }
`

export default GlobalStyles
