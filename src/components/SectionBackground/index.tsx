import * as S from './styles'
import P from 'prop-types'
import { SectionContainer } from '../SectionContainer'

export type sectionBackgroundProps = {
  children: React.ReactNode
  background?: boolean
  sectionId: string
}

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: sectionBackgroundProps) => {
  return (
    <S.Main background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </S.Main>
  )
}
