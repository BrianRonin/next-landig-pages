import * as S from './styles'
import P from 'prop-types'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const GridContent = ({ title, html, background, id = '' }) => {
  return (
    <S.Main>
      <SectionBackground background={background} sectionId={id}>
        <Heading uppercase light={background} as='h2'>
          {title}
        </Heading>
        <S.Container_Html>
          <Text isHtml={true}>{html}</Text>
        </S.Container_Html>
      </SectionBackground>
    </S.Main>
  )
}

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  id: P.string,
}
