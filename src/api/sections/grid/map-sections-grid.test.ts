import { mockApi } from '../../mockApi2'
import { mapSectionGrid } from './map-sections-grid'

describe('map-section-grid', () => {
  it('should return the text-grid section', () => {
    const sectionGrid = mapSectionGrid(mockApi.data[0].attributes.sections[2])
    expect(sectionGrid).toEqual({
      component: 'section.section-grid-text',
      title: 'works',
      description: 'all works',
      grid: mockApi.data[0].attributes.sections[2].text_grid,
      name: 'grid-one',
      id: 'grid-one',
      background: true,
    })
  })
  it('should return the image-grid section', () => {
    const sectionGrid = mapSectionGrid(mockApi.data[1].attributes.sections[2])
    expect(sectionGrid).toEqual({
      component: 'section.section-grid-image',
      title: 'works',
      description: 'all works',
      grid: [
        'https://res.cloudinary.com/brianronin/image/upload/v1662772483/800x800_78230a377d.jpg',
        'https://res.cloudinary.com/brianronin/image/upload/v1662772500/800x800_6c695611a0.jpg',
        'https://res.cloudinary.com/brianronin/image/upload/v1662772516/800x800_9267725d72.jpg',
        'https://res.cloudinary.com/brianronin/image/upload/v1662772355/800x800_ee870b345a.jpg',
      ],
      name: 'grid-one',
      id: 'grid-one',
      background: true,
    })
  })
})
