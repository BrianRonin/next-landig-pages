import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
import { Main as Text } from '../Text/styles'
export const Main = styled.div`
  ${({ theme }) => css`
    > ${Text} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: ${theme.spacings.large};
    width: 100%;

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
    } ;
  `}
`

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    max-width: 100%;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`
