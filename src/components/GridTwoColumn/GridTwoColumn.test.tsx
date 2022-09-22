import { renderTheme } from '../../styles/render-theme'
import { GridTwoColumn } from './index'
import { mock_GridTwoColumn } from './mock'

describe('<GridTwoColumn />', () => {
  it('should render two column grid and to match snapshot', () => {
    const { container } = renderTheme(
      <GridTwoColumn id='id' {...mock_GridTwoColumn} />,
    )
    expect(container).toMatchSnapshot()
  })
})
