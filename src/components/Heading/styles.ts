import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)}
  `,
}

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.sizes.xlarge};
  }
`

export const Title = styled.h1<
  Pick<HeadingProps, 'light' | 'size' | 'uppercase'>
>`
  ${({ theme, light, size, uppercase }) => css`
    color: ${light ? theme.colors.white : theme.colors.primaryColor};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    ${!!size && titleSize[size](theme)};
  `}
`
