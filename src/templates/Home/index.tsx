import { GridContent, gridContentProps } from '../../components/GridContent'
import { GridImage, gridImageProps } from '../../components/GridImage'
import { GridText, gridTextProps } from '../../components/GridText'
import {
  GridTwoColumn,
  gridTwoColumnProps,
} from '../../components/GridTwoColumn'
import { Base } from '../Base'
import { PageNotFound } from '../PageNotFound'
import { Heading } from '../../components/Heading'
import { menuLinkProps } from '../../components/MenuLink'
import { logoLinkProps } from '../../components/LogoLink'

export type metadataType = {
  component: string
  name: string
  id: string
  background: boolean
}

export type sectionType = (
  | gridImageProps
  | gridTwoColumnProps
  | gridContentProps
  | gridTextProps
) &
  metadataType

export type homeProps = {
  data: {
    footerHtml: string
    slug: string
    title: string
    menu: logoLinkProps & { links: menuLinkProps[] }
    sections: sectionType[]
  }
}

export const Home = ({ data }: homeProps) => {
  if (data === null) {
    return <PageNotFound />
  }
  const { menu, sections, footerHtml: footer } = data
  const { links, text, link, srcImg } = menu
  console.log(data)
  return (
    <Base
      links={links}
      footerHtml={footer}
      logoData={{ text: text, link: link, srcImg: srcImg }}
    >
      <Heading>
        <title>{data.title}</title>
      </Heading>
      {!!data &&
        sections.map((section, i) => {
          const { component } = section

          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumn key={i + 1} {...(section as gridTwoColumnProps)} />
            )
          }

          if (component === 'section.section-content') {
            return (
              <GridContent key={i + 2} {...(section as gridContentProps)} />
            )
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={i + 3} {...(section as gridTextProps)} />
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={i + 4} {...(section as gridImageProps)} />
          }
        })}
    </Base>
  )
}
