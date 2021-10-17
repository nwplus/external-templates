import { config } from '@fortawesome/fontawesome-svg-core'
import GlobalStyles from "../theme/GlobalStyle";
import '@fortawesome/fontawesome-svg-core/styles.css'
import ThemeProvider from "../theme/ThemeProvider";
import '../theme/fonts/style.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
