import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const GridTwoColumn = ({ title, text, background, srcImg, id }) => {
  return (
    <SectionBackground background={background} sectionId={id}>
      <S.Main>
        <S.TextContainer>
          <Heading uppercase light={background} as='h2'>
            {title}
          </Heading>
          <Text>{text}</Text>
        </S.TextContainer>
        <S.ImageContainer>
          <S.Img src={srcImg} alt={title} />
        </S.ImageContainer>
      </S.Main>
    </SectionBackground>
  )
}

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
}
