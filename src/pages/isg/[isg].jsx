import { loadPages } from '../../api/load-pages'
import { Home } from '../../templates/Home'

export default function isg({ data }) {
  return <Home data={data} />
}

export async function getStaticProps(ctx) {
  return {
    props: {
      data: await loadPages(ctx.params.isg),
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const paths = (await loadPages('all')).map((page) => {
    return {
      params: { isg: page.slug },
    }
  })
  const x = {
    paths,
    fallback: false,
  }

  return x
}
