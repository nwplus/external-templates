
import GlobalStyles from '@styles/global'
import { ParallaxProvider } from 'react-scroll-parallax';
/* eslint react/jsx-filename-extension: 0 */
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'

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
