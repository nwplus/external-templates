/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyle from '../theme/GlobalStyle'
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'
import LoadingScreen from '@components/LoadingScreen' // Import your LoadingScreen component
/* eslint react/jsx-filename-extension: 0 */

const OuterContainer = styled(SectionContainer)`
  aspect-ratio: 748 / 4200;

  background: url('assets/background/entire-site/entire-site.png');
  width: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  

  /* @media (max-width: 1300px) {
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
  } */

  /* z-index: -98; */

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/entire-site/entire-site-mobile.png') no-repeat;
    width: 100%;
    background-color: #01064E;
    aspect-ratio: 748/12000;
    height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
  }
`

// eslint-disable-next-line react/prop-types
function App ({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.overflowX = 'hidden'
    }

    const unlockScroll = () => {
      document.body.style.overflow = 'auto'
      document.body.style.position = ''
      document.body.style.overflowX = 'hidden'
    }

    if (loading) {
      lockScroll()
      window.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      unlockScroll()
      window.removeEventListener('touchmove', preventScroll)
    }

    return () => {
      unlockScroll()
      window.removeEventListener('touchmove', preventScroll)
    }
  }, [loading])

  const preventScroll = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // set loading time to 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <OuterContainer>
          <GlobalStyle />
          {loading ? (<LoadingScreen />) : (<Component {...pageProps} />)}
        </OuterContainer>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
