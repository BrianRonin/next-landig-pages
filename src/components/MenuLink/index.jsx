import * as S from './styles'
import P from 'prop-types'
import Link from 'next/link'

export const MenuLink = ({ children, Link: link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self'
  const isNextLink = link.match(/^\//) ? true : false
  if (isNextLink) {
    return (
      <Link href={link} passHref>
        <S.Main target={target}>{children}</S.Main>
      </Link>
    )
  }
  return (
    <S.Main href={link} target={target}>
      {children}
    </S.Main>
  )
}

MenuLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
}
