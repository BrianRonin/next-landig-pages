import * as S from './styles'
import Link from 'next/link'

export type menuLinkProps = {
  children: React.ReactNode
  link: string
  newTab?: boolean
}

export const MenuLink = ({ children, link, newTab = false }: menuLinkProps) => {
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
