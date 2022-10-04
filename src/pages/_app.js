import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyle from '../theme/GlobalStyle'
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'
/* eslint react/jsx-filename-extension: 0 */

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
