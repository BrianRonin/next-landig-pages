import { sectionType } from '../../templates/Home'
import { mapSectionContent } from './content/map-sections-content'
import { mapSectionGrid } from './grid/map-sections-grid'
import { mapSectionTwoColumns } from './two-columns/map-two-columns'

export const mapSections = (sections: any[] = []): sectionType[] => {
  return sections.map((section: any) => {
    switch (section.__component) {
      case 'section.section-two-columns':
        return mapSectionTwoColumns(section)
      case 'section.section-content':
        return mapSectionContent(section)
      case 'section.section-grid':
        return mapSectionGrid(section)
      default:
        return section
    }
  })
}
