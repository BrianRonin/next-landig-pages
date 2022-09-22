import { mapImage } from '../../image/map-image'
import { mapSectionsMetadata } from '../metadata/map-sections-metadata'

export const mapSectionTwoColumns = (section: any = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: srcImg = {},
    metadata = {},
  } = section

  const returnValue = {
    component,
    title,
    text,
    srcImg: mapImage(srcImg),
    ...mapSectionsMetadata(metadata),
  } as {
    component: string
    title: string
    text: string
    srcImg: ReturnType<typeof mapImage>
  } & ReturnType<typeof mapSectionsMetadata>

  return returnValue
}
