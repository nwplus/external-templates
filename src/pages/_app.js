import GlobalStyle from "../theme/GlobalStyle";
import '@fortawesome/fontawesome-svg-core/styles.css'
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
