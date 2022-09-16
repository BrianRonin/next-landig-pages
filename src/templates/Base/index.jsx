import * as S from './styles'
import P from 'prop-types'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'

export const Base = ({ links = [], logoData, footerHtml, children }) => {
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

Base.propTypes = {
  ...Menu.propTypes,
  children: P.node.isRequired,
  footerHtml: P.string.isRequired,
}
