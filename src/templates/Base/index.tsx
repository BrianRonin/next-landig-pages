import * as S from './styles'
import { Menu, menuProps } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'
import { navLinksProps } from '../../components/NavLinks'
import { menuLinkProps } from '../../components/MenuLink'
import { logoLinkProps } from '../../components/LogoLink'

export type baseProps = {
  links: menuLinkProps[]
  logoData: logoLinkProps
  children: React.ReactNode
  footerHtml: string
}

export const Base = ({
  links = [],
  logoData,
  footerHtml,
  children,
}: baseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <S.Main>
        {children}
        <Footer>{footerHtml}</Footer>
      </S.Main>
      <GoTop />
    </>
  )
}
