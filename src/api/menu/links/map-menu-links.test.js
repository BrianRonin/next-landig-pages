import { mockApi } from '../../mockApi2'
import { mapMenuLinks } from './map-menu-links'

describe('map-menu-links', () => {
  it('should return correct values', () => {
    expect(
      mapMenuLinks(mockApi.data[0].attributes.menu.menu_links),
    ).toStrictEqual([
      { newTab: false, children: 'why us', Link: '#why-us' },
      { newTab: false, children: 'grid one', Link: '#grid-one' },
      { newTab: false, children: 'intro', Link: '#index' },
    ])
  })
  it('should return default values', () => {
    expect(mapMenuLinks()).toEqual([
      {
        Link: '',
        children: '',
        newTab: false,
      },
    ])
  })
})
