import { mapImage } from '../../image/map-image'
import { mapSectionsMetadata } from '../metadata/map-sections-metadata'

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: srcImg = {},
    metadata = {},
  } = section
  return {
    component,
    title,
    text,
    srcImg: mapImage(srcImg),
    ...mapSectionsMetadata(metadata),
  }
}
