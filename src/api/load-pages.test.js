import { loadPages } from './load-pages'

describe('Load-pages', () => {
  let mockFetch = null
  let mockJson = null

  beforeEach(() => {
    global.fetch = jest.fn()
    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }))
    mockFetch = global.fetch
    mockFetch.mockResolvedValue({
      json: mockJson,
    })
  })

  it('should return default page', () => {
    const page = loadPages()
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })
})
