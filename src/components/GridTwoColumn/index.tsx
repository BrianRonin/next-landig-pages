import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export type gridTwoColumnProps = {
  title: string
  text: string
  background?: boolean
  srcImg: string
  id: string
}

export const GridTwoColumn = ({
  title,
  text,
  background,
  srcImg,
  id,
}: gridTwoColumnProps) => {
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
