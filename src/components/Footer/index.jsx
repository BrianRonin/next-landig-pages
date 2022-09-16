import * as S from './styles'
import P from 'prop-types'
import { Text } from '../Text'
import { SectionBackground } from '../SectionBackground'
import { SectionContainer } from '../SectionContainer'

export const Footer = ({ children, background = false }) => {
  return (
    <S.Main>
      <SectionContainer>
        <Text isHtml={true}>{children}</Text>
      </SectionContainer>
    </S.Main>
  )
}

Footer.propTypes = {
  footerHtml: P.string,
  background: P.bool,
}
