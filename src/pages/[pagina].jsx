import P from 'prop-types'
import { loadPages } from '../api/load-pages'
import { Heading } from '../components/Heading'
import { Home } from '../templates/Home'

export default function Page({ data }) {
  return <Home data={data} />
}

Page.propTypes = {
  data: P.object,
}

export const getStaticProps = async (ctx) => {
  let data = null
  console.log(ctx.params)
  try {
    data = await loadPages(ctx.params.pagina)
  } catch {
    data = null
  }

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = (await loadPages('all')).map((page) => {
    return {
      params: { pagina: page.slug },
    }
  })
  const x = {
    paths,
    fallback: false,
  }

  return x
}
