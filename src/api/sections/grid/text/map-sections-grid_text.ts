import { mapSectionsMetadata } from '../../metadata/map-sections-metadata'

export const mapSectionGridText = (gridText: any = []): typeof returnValue => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata = {},
  } = gridText

  const returnValue = {
    component: grid.length > 0 ? 'section.section-grid-text' : '',
    title,
    description,
    grid: mapGrid(grid),
    ...mapSectionsMetadata(metadata),
  } as {
    name: string
    id: string
    background: boolean
    component: string
    title: string
    description: string
    grid: ReturnType<typeof mapGrid>
  }

  return returnValue
}

const mapGrid = (
  grid: [],
): Array<{ title: string; description: string }> | [] => {
  return grid.map((content) => {
    const { title, description } = content
    return { title, description }
  })
}
