import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import P from 'prop-types'

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}

renderTheme.propTypes = {
  children: P.node,
}
