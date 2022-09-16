import * as S from './styles'
import P from 'prop-types'

export const Text = ({ children, isHtml = false }) => {
  return <S.Main dangerouslySetInnerHTML={{ __html: children }} />
}

Text.propTypes = {
  children: P.node,
}
