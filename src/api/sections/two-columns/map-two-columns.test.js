import { mockApi } from '../../mockApi2'
import { mapSectionTwoColumns } from './map-two-columns'

describe('map-sections-two-columns', () => {
  it('should return default values', () => {
    const twoColumns = mapSectionTwoColumns('')
    expect(twoColumns).toEqual({
      component: '',
      title: '',
      text: '',
      srcImg: {},
      name: '',
      id: '',
      background: false,
    })
  })

  it('should return values', () => {
    const twoColumns = mapSectionTwoColumns(
      mockApi.data[0].attributes.sections[0],
    )
    expect(twoColumns).toEqual({
      component: 'section.section-two-columns',
      title: 'titulo qualquer',
      text: 'uma breve desc',
      srcImg:
        'https://res.cloudinary.com/brianronin/image/upload/v1661488338/analytics_re_wxt8_1920e22fe3.svg',
      name: 'index',
      id: 'index',
      background: true,
    })
  })
})
