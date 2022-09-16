import * as S from './styles'
import P from 'prop-types'
import { ArrowDropUp } from '@styled-icons/material-outlined/ArrowDropUp'

export const GoTop = ({ background = false }) => {
  return (
    <S.Main background={background} href='#' target={'_self'} title='Go to top'>
      <ArrowDropUp />
    </S.Main>
  )
}

GoTop.propTypes = {
  background: P.bool,
}
