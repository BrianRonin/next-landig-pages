import * as S from './styles'
import { ArrowDropUp } from '@styled-icons/material-outlined/ArrowDropUp'

export type GoTopProps = {
  background?: boolean
}

export const GoTop = ({ background = false }: GoTopProps) => {
  return (
    <S.Main background={background} href='#' target={'_self'} title='Go to top'>
      <ArrowDropUp />
    </S.Main>
  )
}
