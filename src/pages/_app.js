import GlobalStyles from '@styles/global'
/* eslint react/jsx-filename-extension: 0 */
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
