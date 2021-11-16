import GlobalStyles from '@styles/global'
import CustomThemeProvider from '../theme/ThemeProvider'
/* eslint react/jsx-filename-extension: 0 */

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  )
}

export default App
