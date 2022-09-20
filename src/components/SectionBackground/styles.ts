import styled, { css } from 'styled-components'
const modeBackground = (theme) => css`
  color: ${theme.colors.white};
  background: ${theme.colors.primaryColor};
`

export const Main = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && modeBackground(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`
