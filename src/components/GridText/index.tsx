import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export type gridTextElement = {
  title: string
  description: string
}

export type gridTextProps = {
  title: string
  description: string
  grid?: gridTextElement[]
  background?: boolean
  id?: string
}

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  id = '',
}: gridTextProps) => {
  return (
    <S.Main>
      <SectionBackground background={background} sectionId={id}>
        <Heading size='huge' uppercase light={background} as='h2'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <S.Grid>
          {!!grid &&
            grid.map((element, i) => (
              <S.GridElement key={i}>
                <Heading size='medium' light={background} as='h3'>
                  {element.title}
                </Heading>
                <Text>{element.description}</Text>
              </S.GridElement>
            ))}
        </S.Grid>
      </SectionBackground>
    </S.Main>
  )
}
