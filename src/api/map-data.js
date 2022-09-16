import { mapMenu } from './menu/map-menu'
import { mapSections } from './sections/map-sections'

export const mapData = (api = {}) => {
  const { data: pagesData = [{}] } = api

  return pagesData.map((data) => {
    const { attributes = {} } = data
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = attributes

    const x = {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    }

    return x
  })
}
