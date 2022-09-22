import { mockApi } from '../../../mockApi2'
import { mapSectionsGridImage } from './map-sections-grid_image'

describe('map-sections-grid_image', () => {
  it('should return values', () => {
    const gridImage = mapSectionsGridImage(
      mockApi.data[1].attributes.sections[2],
    )
    expect(gridImage).toEqual({
      title: 'works',
      description: 'all works',
      component: 'section.section-grid-image',
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
  it('should return default values', () => {
    const gridImage = mapSectionsGridImage([])
    expect(gridImage).toEqual({
      title: '',
      description: '',
      component: '',
      grid: [],
      name: '',
      id: '',
      background: false,
    })
  })
})
