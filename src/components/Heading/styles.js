import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)}
  `,
}

const mediaFont = (theme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.sizes.xlarge};
  }
`

export const Title = styled.h1`
  ${({ theme, light, size, uppercase }) => css`
    color: ${light ? theme.colors.white : theme.colors.primaryColor};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    ${titleSize[size](theme)};
  `}
`
