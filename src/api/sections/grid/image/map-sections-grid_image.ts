import { typeArrayImages } from './../../../image/map-image'
import { mapImage } from '../../../image/map-image'
import { mapSectionsMetadata } from '../../metadata/map-sections-metadata'

export const mapSectionsGridImage = (gridImage: any = {}) => {
  const {
    title = '',
    description = '',
    image_grid: { image = [] } = {},
    metadata = {},
  } = gridImage

  const returnValue = {
    component:
      Object.keys(image).length > 0 ? 'section.section-grid-image' : '',
    title,
    description,
    grid: mapImage(image),
    ...mapSectionsMetadata(metadata),
  } as {
    component: string
    title: string
    description: string
    grid: typeArrayImages
  } & ReturnType<typeof mapSectionsMetadata>

  return returnValue
}
