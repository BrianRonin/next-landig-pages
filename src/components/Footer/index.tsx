import * as S from './styles'
import P from 'prop-types'
import { Text } from '../Text'
import { SectionBackground } from '../SectionBackground'
import { SectionContainer } from '../SectionContainer'

export type footerProps = {
  children: string
  background?: boolean
}

export const Footer = ({ children, background = false }: FooterProps) => {
  return (
    <S.Main>
      <SectionContainer>
        <Text>{children}</Text>
      </SectionContainer>
    </S.Main>
  )
}
