import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { Footer } from './index'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer>teste</Footer>)
    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
