import * as S from './styles'
import { Heading } from '../Heading'
import Link from 'next/link'
import { JsxElement } from 'typescript'
import { Style } from 'util'

export type logoLinkProps = {
  text?: string
  srcImg?: string
  link: string
}

export const LogoLink = ({ text, srcImg = '', link = '' }: logoLinkProps) => {
  const isNextLink = link.match(/^\//) ? true : false
  if (isNextLink) {
    return (
      <Heading size='small' uppercase>
        <Link href={link} passHref>
          <S.Main>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </S.Main>
        </Link>
      </Heading>
    )
  }

  return (
    <Heading size='small' uppercase>
      <S.Main href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Main>
    </Heading>
  )
}
