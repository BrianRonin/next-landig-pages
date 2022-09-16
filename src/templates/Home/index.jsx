import { useEffect, useState } from 'react'
import { mapData } from '../../api/map-data'
import { GridContent } from '../../components/GridContent'
import { GridImage } from '../../components/GridImage'
import { GridText } from '../../components/GridText'
import { GridTwoColumn } from '../../components/GridTwoColumn'
import { Base } from '../Base'
import Head from 'next/head'
import { MockBase } from '../Base/mock'
import { Loading } from '../Loading'
import { PageNotFound } from '../PageNotFound'
import P from 'prop-types'
import * as Styled from './styles'
import { Heading } from '../../components/Heading'

export const Home = ({ data }) => {
  if (data === null) {
    return <PageNotFound />
  }

  const { menu, sections, footerHtml: footer } = data
  const { links, text, link, srcImage } = menu

  return (
    <Base
      links={links}
      footerHtml={footer}
      logoData={{ text: text, link: link, srcImage: srcImage }}
    >
      <Heading>
        <title>{data.title}</title>
      </Heading>
      {!!data &&
        sections.map((section, i) => {
          const { component } = section

          if (component === 'section.section-two-columns') {
            return <GridTwoColumn key={i + 1} {...section} />
          }

          if (component === 'section.section-content') {
            return <GridContent key={i + 2} {...section} />
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={i + 3} {...section} />
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={i + 4} {...section} />
          }
        })}
    </Base>
  )
}

Home.propTypes = {
  data: P.object,
}
