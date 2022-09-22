import styled, { css, DefaultTheme } from 'styled-components'

type background = {
  background: boolean
}

const modeBackground = (theme: DefaultTheme) => css`
  color: ${theme.colors.white};
  background: ${theme.colors.primaryColor};
`

export const Main = styled.div<background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && modeBackground(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`
