import styled, { css } from 'styled-components'
export const Main = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
  `}
`
