import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { theme } from './theme'

export const renderTheme = (x: any) => {
  return render(<ThemeProvider theme={theme}>{x}</ThemeProvider>)
}
