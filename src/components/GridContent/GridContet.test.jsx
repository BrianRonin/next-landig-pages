import { renderTheme } from '../../styles/render-theme'
import { GridContent } from './index'
import { mockGridContent } from './mock'

describe('<GridContent />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridContent {...mockGridContent} />)
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
