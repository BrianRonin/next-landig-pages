import { homeProps } from '../templates/Home'
import { mapData } from './map-data'

export const loadPages = async (slug = '') => {
  const cleanSlug = slug.replace(/[^a-z0-9-_]/gi, '')
  let URL: string
  let isAll = false
  switch (slug) {
    case 'all':
      URL = process.env.API_ALL as string
      isAll = true
      break
    case '':
      URL = process.env.API_SLUG + 'minha'
      break
    default:
      URL = process.env.API_SLUG + cleanSlug
      break
  }

  const res = await fetch(URL)
  const json = await res.json()
  const data = mapData(json)
  if (isAll) return data
  return data[0]
}
