import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/theme'
/* tslint:disable */
const x = 'fsfoshsofhsoefh'

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
