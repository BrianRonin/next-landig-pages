import { mockApi } from '../mockApi2'
import { mapMenu } from './map-menu'

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu('')
    expect(menu.link).toEqual('')
    expect(menu.text).toBe('')
  })

  it('should map menuto match keys and values required', () => {
    const menu = mapMenu(mockApi.data[0].attributes.menu)
    expect(menu.link).toEqual('#index')
    expect(menu.text).toBe('Logo')
  })
})
