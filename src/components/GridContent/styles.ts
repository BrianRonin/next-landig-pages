import styled, { css } from 'styled-components'
export const Main = styled.div`
  ${({ theme }) => css`
    text-align: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  `}
`
export const Container_Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`
