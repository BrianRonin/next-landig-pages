import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { SectionContainer } from './index'

describe('<SectionContainer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <SectionContainer>teste</SectionContainer>,
    )
    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
