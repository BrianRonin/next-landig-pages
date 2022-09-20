import * as S from './styles'
import P from 'prop-types'
import { Text } from '../Text'
import { SectionBackground } from '../SectionBackground'
import { SectionContainer } from '../SectionContainer'

export type FooterProps = {
  footerHtml: string
  background: boolean
}

export const Footer = ({ children, background = false }: FooterProps) => {
  return (
    <S.Main>
      <SectionContainer>
        <Text isHtml={true}>{children}</Text>
      </SectionContainer>
    </S.Main>
  )
}
