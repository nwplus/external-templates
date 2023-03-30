import GlobalStyles from '@styles/global'
/* eslint react/jsx-filename-extension: 0 */

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      SE MINUS
      <Component {...pageProps} />
    </>
  )
}

export default App
