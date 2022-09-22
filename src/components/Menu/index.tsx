import * as S from './styles'
import { SectionContainer } from '../SectionContainer'
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { useState } from 'react'
import { logoLinkProps } from '../LogoLink'
import { navLinksProps } from '../NavLinks'
import { menuLinkProps } from '../MenuLink'

export type menuProps = {
  logoData: logoLinkProps
  links?: menuLinkProps[]
}

export const Menu = ({ links = [], logoData }: menuProps) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <S.Button
        onClick={() => setMenuVisible(true)}
        visible={menuVisible}
        aria-label='Open/Close menu'
      >
        {menuVisible ? (
          <CloseIcon aria-label='Close menu' />
        ) : (
          <MenuIcon aria-label='Open menu' />
        )}
      </S.Button>

      <S.Main onClick={() => setMenuVisible(false)} visible={menuVisible}>
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Main>
    </>
  )
}
