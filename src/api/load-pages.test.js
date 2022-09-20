// import { loadPages } from './load-pages'
// import * as mapDataModule from './map-data'

// jest.mock('./map-data.js', () => {
//   return {
//     mapData: jest.fn().mockResolvedValue(Promise.resolve(['f'])),
//   }
// })

// describe('Load-pages', () => {
//   let mockFetch = null
//   let mockJson = null

//   beforeEach(() => {
//     global.process.env = {
//       API_URL: 'api_url',
//       API_SLUG: 'api_slug',
//       API_ALL: 'api_all',
//     }

//     global.fetch = jest.fn()
//     mockJson = jest.fn().mockResolvedValue(Promise.resolve([{ toJson: 1 }]))
//     mockFetch = global.fetch
//     mockFetch.mockResolvedValue({
//       json: mockJson,
//     })
//   })

//   afterAll(() => {
//     jest.clearAllMocks()
//   })

//   it('should call default', async () => {
//     loadPages()
//     expect(mockFetch).toHaveBeenCalledTimes(1)
//     expect(mockFetch).toHaveBeenCalledWith(process.env.API_SLUG + 'minha')
//     expect(mockJson).toHaveBeenCalledTimes(1)
//     expect(mapDataModule.mapData).toHaveBeenCalledTimes(1)
//     expect(mapDataModule.mapData).toHaveBeenCalledWith([{ toJson: 1 }])
//     expect(mapDataModule.mapData).toEqual({ mapped: 1 })
//   })
// })
