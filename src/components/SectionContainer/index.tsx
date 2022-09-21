import * as S from './styles'
import P from 'prop-types'

export type sectionContainerProps = {
  children: React.ReactNode
}

export const SectionContainer = ({ children }: sectionContainerProps) => {
  return <S.Main>{children}</S.Main>
}
