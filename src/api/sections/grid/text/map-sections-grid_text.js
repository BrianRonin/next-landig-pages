import { mapSectionsMetadata } from '../../metadata/map-sections-metadata'

export const mapSectionGridText = (gridText = []) => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata = {},
  } = gridText

  const x = {
    component: grid.length > 0 ? 'section.section-grid-text' : '',
    title,
    description,
    grid: mapGrid(grid),
    ...mapSectionsMetadata(metadata),
  }
  console.log(x)
  return x
}

const mapGrid = (grid) => {
  return grid.map((content) => {
    const { title, description } = content
    return { title, description }
  })
}
