import { MenuLink, MenuLinkProps } from '../MenuLink'
import * as S from './styles'

export type navLinksProps = {
  links?: MenuLinkProps[]
}

export const NavLinks = ({ links = [] }: navLinksProps) => {
  return (
    <S.Main aria-label='Main menu'>
      {links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </S.Main>
  )
}
