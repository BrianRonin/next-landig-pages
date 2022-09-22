import { homeProps } from '../templates/Home'
import { mapMenu } from './menu/map-menu'
import { mapSections } from './sections/map-sections'

export const mapData = (api: any = {}): homeProps[] => {
  const { data: pagesData = [{}] } = api

  return pagesData.map((data: any = {}): typeof returnValue => {
    const { attributes = {} } = data
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = attributes

    const returnValue = {
      footerHtml,
      slug,
      title,
      menu: mapMenu(menu),
      sections: mapSections(sections),
    } as {
      footerHtml: string
      slug: string
      title: string
      menu: ReturnType<typeof mapMenu>
      sections: ReturnType<typeof mapSections>
    }

    return returnValue
  })
}
