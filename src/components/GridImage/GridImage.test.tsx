import { renderTheme } from '../../styles/render-theme'
import { GridImage } from './index'
import { MockGridImageNoAlt } from './mock'

describe('<GridImage />', () => {
  it('should to match snapshot', () => {
    const { container } = renderTheme(<GridImage {...MockGridImageNoAlt} />)
    expect(container).toMatchSnapshot()
  })
})
