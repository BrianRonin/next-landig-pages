import styled, { css } from 'styled-components'

export const Main = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.sizes.large};
    width: 100%;
    position: relative;
  `}
`
