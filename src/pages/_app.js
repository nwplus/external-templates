
import GlobalStyles from '@styles/global'
/* eslint react/jsx-filename-extension: 0 */
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'

import { ParallaxProvider } from 'react-scroll-parallax';

// import NavigationBar from '../components/NavigationBar';

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <ParallaxProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
