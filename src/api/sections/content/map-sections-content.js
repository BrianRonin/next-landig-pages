import { mapSectionsMetadata } from '../metadata/map-sections-metadata'

export const mapSectionContent = (section = {}) => {
  const {
    title = '',
    content: html = '',
    __component: component = '',
    metadata = {},
  } = section
  return {
    component,
    title,
    html,
    ...mapSectionsMetadata(metadata),
  }
}
