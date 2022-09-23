import { GetStaticProps } from 'next'
import { loadPages } from '../api/load-pages'
import { Home, homeProps } from '../templates/Home'

export default function Index({ data }: homeProps) {
  return <Home data={data} />
}

export const getStaticProps: GetStaticProps = async () => {
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
