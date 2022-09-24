import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { LogoLink } from './index'

describe('<LogoLink />', () => {
  // it('should render logo text', () => {
  //   renderTheme(<LogoLink link='#' text='logo' />)
  //   expect(screen.getByText('logo')).toBeInTheDocument()
  // })
  // it('should render image', () => {
  //   renderTheme(<LogoLink link='#' srcImg='imagem' text='logo' />)
  //   expect(screen.getByAltText('logo')).toHaveAttribute('src', 'imagem')
  // })
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link='#' srcImg='imagem' text='logo' />,
    )
    expect(container).toMatchSnapshot()
  })
})
