import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'
import { Main as Text } from '../Text/styles'
export const Main = styled.div`
  ${({ theme }) => css``}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    width: 100%;
    overflow: hidden;
    ${Text} {
      margin-bottom: ${theme.spacings.xhuge};
    }

    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
    } ;
  `}
`

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${Title} {
      position: relative;
      left: 5rem;
    }

    ${Title}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(10deg);
    }
  `}
`
