import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  id = '',
}) => {
  return (
    <S.Main>
      <SectionBackground background={background} sectionId={id}>
        <Heading size='huge' uppercase light={background} as='h2'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <S.Grid>
          {grid.map((element, i) => (
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

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  id: P.string,
}
