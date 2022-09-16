import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const GridImage = ({
  background,
  description,
  title,
  grid,
  id = '',
}) => {
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

GridImage.propTypes = {
  background: P.oneOf([P.bool, undefined]),
  description: P.oneOf[(P.string, undefined)],
  title: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  id: P.string,
}
