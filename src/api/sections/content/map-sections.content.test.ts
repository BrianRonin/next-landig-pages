import { mockApi } from '../../mockApi2'
import { mapSectionContent } from './map-sections-content'

describe('map-section-content', () => {
  it('should return values', () => {
    const sectionContent = mapSectionContent()
    expect(sectionContent).toEqual({
      title: '',
      html: '',
      component: '',
      id: '',
      name: '',
      background: false,
    })
  })
  it('should return values', () => {
    const sectionContent = mapSectionContent(
      mockApi.data[0].attributes.sections[1],
    )
    expect(sectionContent).toEqual({
      title: 'Titulo qualquer',
      html: "Lorem Ipsum is **simply dummy t**ext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since _the 1500s, _when an unknown printer\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      component: 'section.section-content',
      id: 'why-us',
      name: 'why-us',
      background: false,
    })
  })
})
