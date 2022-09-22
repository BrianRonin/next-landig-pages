import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export type gridContentProps = {
  title: string
  html: string
  background?: boolean
  id?: string
}

export const GridContent = ({
  title,
  html,
  background,
  id = '',
}: gridContentProps) => {
  return (
    <S.Main>
      <SectionBackground background={background} sectionId={id}>
        <Heading uppercase light={background} as='h2'>
          {title}
        </Heading>
        <S.Container_Html>
          <Text>{html}</Text>
        </S.Container_Html>
      </SectionBackground>
    </S.Main>
  )
}
