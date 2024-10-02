/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useCallback } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyle from '../theme/GlobalStyle'
import ThemeProvider from '../theme/ThemeProvider'
import '../theme/fonts/style.css'
import { SectionContainer } from '@lib/Containers'
import styled from 'styled-components'
import LoadingScreen from '@components/LoadingScreen'

/* eslint react/jsx-filename-extension: 0 */

const OuterContainer = styled(SectionContainer)`
  aspect-ratio: 748 / 4200;
  background: url('assets/background/entire-site/entire-site2.png');
  width: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  /* mask-image: linear-gradient(to bottom, black 100%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 100%, transparent 100%); */
  /* height: 0; */
  overflow: hidden;
  /* padding-bottom: 50%; */

  ${p => p.theme.mediaQueries.mobile} {
    background: url('assets/mobile/entire-site/entire-site-mobile.png') no-repeat;
    width: 100%;
    background-color: #01064e;
    aspect-ratio: 748/11190;
    /* height: 170vw; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
`

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  const checkReadyState = useCallback(() => {
    if (document.readyState === 'complete') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLoading(false)
        })
      })
    } else {
      requestAnimationFrame(checkReadyState)
    }
  }, [])

  useEffect(() => {
    checkReadyState()

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
  }, [checkReadyState])

  const preventScroll = e => {
    e.preventDefault()
  }

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <OuterContainer id="outer">
          <GlobalStyle />
          {loading ? <LoadingScreen /> : <Component {...pageProps} />}
        </OuterContainer>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
