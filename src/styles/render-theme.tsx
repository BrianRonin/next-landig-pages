import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { theme } from './theme'

type renderThemeProps = {
  children: React.ReactNode
}

export const renderTheme = ({ children }: renderThemeProps) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
