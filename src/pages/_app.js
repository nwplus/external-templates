import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyle from '../theme/GlobalStyle'
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'
/* eslint react/jsx-filename-extension: 0 */

const OuterContainer = styled(SectionContainer)`
  background: url('assets/background/entire-site/entire-site.png');
  /* width: 100%; */
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  /* aspect-ratio: 1440/989; */
  /* z-index: -98; */
  /* overflow: hidden; */
`

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <OuterContainer>
          <GlobalStyle />
          <Component {...pageProps} />
        </OuterContainer>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
