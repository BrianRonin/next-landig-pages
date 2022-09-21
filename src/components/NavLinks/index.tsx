import { MenuLink, menuLinkProps } from '../MenuLink'
import * as S from './styles'

export type navLinksProps = {
  links: menuLinkProps[]
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
