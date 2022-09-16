import styled, { css } from 'styled-components'
export const Main = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;

    > img {
      max-height: 6rem;
    }
  `}
`
