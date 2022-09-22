import { GetStaticPaths, GetStaticProps } from 'next'
import { loadPages } from '../api/load-pages'
import { Home, homeProps } from '../templates/Home'

export default function Page({ data }: homeProps) {
  return <Home data={data} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  let data = null
  try {
    data = await loadPages(ctx?.params?.pagina as string)
  } catch {
    data = null
  }

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ((await loadPages('all')) as homeProps[]).map((page: any) => {
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
