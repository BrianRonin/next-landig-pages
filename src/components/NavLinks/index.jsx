import { MenuLink } from '../MenuLink'
import P from 'prop-types'
import * as S from './styles'

export const NavLinks = ({ Links = [] }) => {
  return (
    <S.Main aria-label='Main menu'>
      {Links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </S.Main>
  )
}

NavLinks.propTypes = {
  Links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      Links: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
}
