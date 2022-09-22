import { mockApi } from '../../mockApi2'
import { mapSectionsMetadata } from './map-sections-metadata'

describe('map-sections-metadata', () => {
  it('should return values', () => {
    const metadata = mapSectionsMetadata(
      mockApi.data[0].attributes.sections[0].metadata,
    )
    expect(metadata).toEqual({
      name: 'index',
      id: 'index',
      background: true,
    })
  })
  it('should return default values', () => {
    const metadata = mapSectionsMetadata()
    expect(metadata).toEqual({
      name: '',
      id: '',
      background: false,
    })
  })
})
