import styled, { css } from 'styled-components'

export const container = styled.div`
  ${({ background, theme }) => {
    return css`
      background: ${theme.colors.secondaryBg};
    `
  }}
`
