import { GetStaticProps } from 'next'
import { loadPages } from '../api/load-pages'
import { Home } from '../templates/Home'

export type IndexProps = {
  data: []
}

export default function Index({ data }: IndexProps) {
  return <Home data={data} />
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null
  try {
    data = await loadPages()
  } catch {
    //
  }

  if (data) {
    return {
      props: {
        data: data,
      },
    }
  } else {
    return {
      props: {
        data: null,
      },
    }
  }
}
