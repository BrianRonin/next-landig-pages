import * as S from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export type gridImageProps = {
  background?: boolean
  description: string
  title: string
  grid: Array<string>
  id?: string
}

export const GridImage = ({
  background,
  description,
  title,
  grid,
  id = '',
}: gridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={id}>
      <S.Main>
        <Heading size='huge' uppercase light={background} as='h2'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <S.Grid>
          {grid.map((element, i) => (
            <S.GridElement key={i}>
              <S.Image src={element} />
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Main>
    </SectionBackground>
  )
}
