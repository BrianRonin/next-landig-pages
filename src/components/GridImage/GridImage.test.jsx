import { renderTheme } from '../../styles/render-theme'
import { GridImage } from './index'
import { MockGridImage } from './mock'

describe('<GridImage />', () => {
  it('should to match snapshot', () => {
    const { container } = renderTheme(<GridImage {...MockGridImage} />)
    expect(container).toMatchSnapshot()
  })
})
