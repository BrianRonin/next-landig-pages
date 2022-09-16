import { mockApi } from '../mockApi2'
import { mapImage } from './map-image'

describe('map-image', () => {
  it('should return default values', () => {
    const img = mapImage('')
    expect(img).toBe('')
  })
  it('should return values', () => {
    const img = mapImage(mockApi.data[0].attributes.menu.image)
    expect(img).toBe(
      'https://res.cloudinary.com/brianronin/image/upload/v1661544963/landing_page_2_c6baa21725_db7d79cda1.svg',
    )
  })
  it('should return values in array', () => {
    const img = mapImage(
      mockApi.data[1].attributes.sections[2].image_grid.image,
    )
    expect(img).toEqual([
      'https://res.cloudinary.com/brianronin/image/upload/v1662772483/800x800_78230a377d.jpg',
      'https://res.cloudinary.com/brianronin/image/upload/v1662772500/800x800_6c695611a0.jpg',
      'https://res.cloudinary.com/brianronin/image/upload/v1662772516/800x800_9267725d72.jpg',
      'https://res.cloudinary.com/brianronin/image/upload/v1662772355/800x800_ee870b345a.jpg',
    ])
  })
})
