import styled, { css } from 'styled-components'

const Light = (theme) => css`
  color: ${theme.colors.primaryColor};
  background: ${theme.colors.white};
`

export const Main = styled.a`
  ${({ theme, background }) => css`
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    right: 2rem;
    bottom: 2rem;
    z-index: 6;
    opacity: 0.8;
    border-radius: 50%;
    ${background && Light(theme)};
  `}
`
