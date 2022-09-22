import { mockApi } from '../../../mockApi2'
import { mapSectionGridText } from './map-sections-grid_text'

describe('map-sections-grid-text', () => {
  it('should return values', () => {
    const gridText = mapSectionGridText(mockApi.data[0].attributes.sections[2])
    expect(gridText).toEqual({
      title: 'works',
      component: 'section.section-grid-text',
      description: 'all works',
      grid: mockApi.data[0].attributes.sections[2].text_grid,
      name: 'grid-one',
      id: 'grid-one',
      background: true,
    })
  })
  it('should return default values', () => {
    const gridText = mapSectionGridText()
    expect(gridText).toEqual({
      title: '',
      component: '',
      description: '',
      grid: [],
      name: '',
      id: '',
      background: false,
    })
  })
})
