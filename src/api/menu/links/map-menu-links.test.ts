import { mockApi } from '../../mockApi2'
import { mapMenuLinks } from './map-menu-links'

describe('map-menu-links', () => {
  it('should return correct values', () => {
    expect(
      mapMenuLinks(mockApi.data[0].attributes.menu.menu_links),
    ).toStrictEqual([
      { newTab: false, children: 'why us', link: '#why-us' },
      { newTab: false, children: 'grid one', link: '#grid-one' },
      { newTab: false, children: 'intro', link: '#index' },
    ])
  })
  it('should return default values', () => {
    expect(mapMenuLinks()).toEqual([
      {
        link: '',
        children: '',
        newTab: false,
      },
    ])
  })
})
