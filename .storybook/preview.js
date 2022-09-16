import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme.tsx'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: theme.colors.lightBg,
      },
      {
        name: 'dark2',
        value: theme.colors.darkBg,
      },
      {
        name: 'dark',
        value: 'black',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
]
