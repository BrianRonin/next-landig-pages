// import { theme } from '../styles/theme'
// import 'styled-components'
// interface IPalette {
//   main: string
//   contrastText: string
// }
// declare module 'styled-components' {
//   export interface DefaultTheme extends theme
// }

import { theme } from '../styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
}
