import styled, { css } from 'styled-components'

export const container = styled.div`
  ${({ theme }) => {
    return css`
      background: ${theme.colors.secondaryBg};
    `
  }}
`
