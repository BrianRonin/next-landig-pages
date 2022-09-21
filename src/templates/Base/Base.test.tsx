import { renderTheme } from '../../styles/render-theme'
import { Base } from './index'
import { MockBase } from './mock'

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...MockBase} />)
    expect(container).toMatchSnapshot()
  })
})
