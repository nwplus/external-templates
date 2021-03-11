import GlobalStyles from '@styles/global'
import Header from '@components/Header'
/* eslint react/jsx-filename-extension: 0 */

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
