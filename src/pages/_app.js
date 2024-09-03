/* eslint-disable react/react-in-jsx-scope */
import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyle from '../theme/GlobalStyle'
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'
/* eslint react/jsx-filename-extension: 0 */

const OuterContainer = styled(SectionContainer)`
  /* background: url('assets/background/entire-site/entire-site.png');
  width: 100vw;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top; */

  aspect-ratio: 748 / 1400;

  background: url('assets/background/entire-site/entire-site.png');
  width: 100vw;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;

  @media (max-width: 1300px) {
    aspect-ratio: 752 / 1200;
  }

  @media (max-width: 992px) {
    aspect-ratio: 710 / 1100;
  }

  @media (max-width: 768px) {
    aspect-ratio: 700 / 1000;
  }

  @media (max-width: 576px) {
    aspect-ratio: 600 / 900;
  }

  /* z-index: -98; */
  /* overflow: hidden; */

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/entire-site/entire-site.png');
    width: 115.5vw;
    margin-left: -7.7vw;
    height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
  }

`

// eslint-disable-next-line react/prop-types
function App ({ Component, pageProps }) {
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
