import GlobalStyle from "../theme/GlobalStyle";
import ThemeProvider from "../theme/ThemeProvider";
import '../theme/fonts/style.css'
/* eslint react/jsx-filename-extension: 0 */

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
