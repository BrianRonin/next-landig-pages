import P from 'prop-types'
import { loadPages } from '../api/load-pages'
import { Home } from '../templates/Home'

export default function Index({ data }) {
  return <Home data={data} />
}

export const getStaticProps = async () => {
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

Index.propTypes = {
  data: P.array,
}
