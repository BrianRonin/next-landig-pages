import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
export const Main = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.sizes.large};

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.sizes.xlarge};
    }
  `}
`
export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.medium} {
      margin-bottom: ${theme.sizes.large};
    }
  `}
`

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`

export const Img = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`
