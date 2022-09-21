import { GetStaticPaths, GetStaticProps } from 'next'
import { loadPages } from '../api/load-pages'
import { Home, homeProps } from '../templates/Home'

export default function Page({ data }: homeProps) {
  return <Home data={data} />
}

export const getStaticProps: GetStaticProps<homeProps> = async (ctx) => {
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
  const paths = (await loadPages('all')).map((page: homeProps) => {
    return {
      params: { pagina: page.data.slug },
    }
  })
  const x = {
    paths,
    fallback: false,
  }

  return x
}
