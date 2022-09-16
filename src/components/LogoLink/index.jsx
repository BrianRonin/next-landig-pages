import * as S from './styles'
import P from 'prop-types'
import { Heading } from '../Heading'
import Link from 'next/link'

export const LogoLink = ({ text, srcImg = '', link = '' }) => {
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

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
}
