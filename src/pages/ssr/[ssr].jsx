import { loadPages } from '../../api/load-pages'
import { Home } from '../../templates/Home'

export default function SSR({ data }) {
  return <Home data={data} />
}

export async function getServerSideProps() {
  return {
    props: {
      data: await loadPages(),
    },
  }
}
