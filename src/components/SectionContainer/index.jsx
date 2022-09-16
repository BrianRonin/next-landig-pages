import * as S from './styles'
import P from 'prop-types'

export const SectionContainer = ({ children }) => {
  return <S.Main>{children}</S.Main>
}

SectionContainer.propTypes = {
  children: P.node,
}
