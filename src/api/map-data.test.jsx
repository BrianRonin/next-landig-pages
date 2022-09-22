import { mapData } from './map-data'
import { mockApi } from './mockApi2'
describe('map-data', () => {
  it('should return correct values', () => {
    const map = mapData(mockApi)
    expect(map).toMatchSnapshot()
    const mapNo = mapData()
    expect(mapNo).toEqual([
      {
        footerHtml: '',
        slug: '',
        title: '',
        sections: [],
        menu: { link: '', text: '', srcImg: {}, links: [] },
      },
    ])

    // const util = require('util')
    // console.log(util.inspect(mapNo, false, null, true /* enable colors */))

    const data = [
      ({
        footerHtml: 'feito com carinho por BrianRonin',
        slug: 'minha-pagina',
        title: 'minha pagina',
        sections: [
          {
            component: 'section.section-two-columns',
            title: 'titulo qualquer',
            text: 'uma breve desc',
            srcImg:
              'https://res.cloudinary.com/brianronin/image/upload/v1661488338/analytics_re_wxt8_1920e22fe3.svg',
            name: 'index',
            id: 'index',
            background: true,
          },
          {
            title: 'Titulo qualquer',
            html:
              "Lorem Ipsum is **simply dummy t**ext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since _the 1500s, _when an unknown printer\n" +
              '\n' +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer\n" +
              '\n' +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            name: 'why-us',
            id: 'why-us',
            background: false,
          },
          {
            title: 'works',
            description: 'all works',
            grid: [
              {
                title: 'titulo 1',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
              },
              {
                title: 'titulo 2',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
              },
              {
                title: 'titulo 3',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
              },
            ],
            name: 'grid-one',
            id: 'grid-one',
            background: true,
          },
        ],
        menu: {
          link: '#index',
          text: 'Logo',
          srcImg:
            'https://res.cloudinary.com/brianronin/image/upload/v1661544963/landing_page_2_c6baa21725_db7d79cda1.svg',
          links: [
            { newTab: false, children: 'why us', Link: '#why-us' },
            { newTab: false, children: 'grid one', Link: '#grid-one' },
            { newTab: false, children: 'intro', Link: '#index' },
          ],
        },
      },
      {
        footerHtml: 'feito com carinho por BrianRonin',
        slug: 'minha-pagina2',
        title: 'minha pagina2',
        sections: [
          {
            component: 'section.section-two-columns',
            title: 'titulo qualquer',
            text: 'uma breve desc',
            srcImg:
              'https://res.cloudinary.com/brianronin/image/upload/v1661488338/analytics_re_wxt8_1920e22fe3.svg',
            name: 'index',
            id: 'index',
            background: true,
          },
          {
            title: 'Titulo qualquer',
            html:
              "Lorem Ipsum is **simply dummy t**ext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since _the 1500s, _when an unknown printer\n" +
              '\n' +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer\n" +
              '\n' +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            name: 'why-us',
            id: 'why-us',
            background: false,
          },
          {
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
          },
        ],
        menu: {
          link: '#index',
          text: 'Logo',
          srcImage:
            'https://res.cloudinary.com/brianronin/image/upload/v1661544963/landing_page_2_c6baa21725_db7d79cda1.svg',
          links: [
            { newTab: false, children: 'why us', Link: '#why-us' },
            { newTab: false, children: 'grid one', Link: '#grid-one' },
            { newTab: false, children: 'intro', Link: '#index' },
          ],
        },
      }),
    ]
  })
})
