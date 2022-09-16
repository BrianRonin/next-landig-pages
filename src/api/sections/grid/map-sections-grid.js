import { mapSectionsGridImage } from './image/map-sections-grid_image'
import { mapSectionGridText } from './text/map-sections-grid_text'

export const mapSectionGrid = (section) => {
  if (section) {
    if (section?.text_grid.length === 0) {
      return mapSectionsGridImage(section)
    } else {
      if (section.text_grid.length > 0) return mapSectionGridText(section)
    }
  } else {
    return {}
  }
}
