import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { SectionBackground } from './index'

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground sectionId='1' background={true}>
        <h1>teste</h1>
      </SectionBackground>,
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
  it('should render with background white', () => {
    const { container } = renderTheme(
      <SectionBackground sectionId='1' background={false}>
        <h1>teste</h1>
      </SectionBackground>,
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
