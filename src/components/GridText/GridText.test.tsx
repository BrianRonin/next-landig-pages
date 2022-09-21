import { renderTheme } from '../../styles/render-theme'
import { GridText } from './index'
import { MockGridText } from './mock'

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...MockGridText} />)
    expect(container).toMatchSnapshot()
  })
})
