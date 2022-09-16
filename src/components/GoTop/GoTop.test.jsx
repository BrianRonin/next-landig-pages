import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { GoTop } from './index'

describe('<GoTop />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GoTop />)
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    )
    expect(container).toMatchSnapshot()
  })
})
