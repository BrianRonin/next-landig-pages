import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { MenuLink } from './index'

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink Link={'google.com'}>teste</MenuLink>)
    expect(screen.getByRole('link', 'teste')).toBeInTheDocument()
  })
  it('should have default target', () => {
    renderTheme(<MenuLink Link={'google.com'}>teste</MenuLink>)
    expect(screen.getByRole('link', { name: 'teste' })).toHaveAttribute(
      'target',
      '_self',
    )
  })
  it('should have attributes', () => {
    renderTheme(
      <MenuLink newTab={true} Link={'google.com'}>
        teste
      </MenuLink>,
    )
    expect(screen.getByRole('link', 'teste')).toHaveAttribute(
      'target',
      '_blank',
    )
  })
  it('should snapshot', () => {
    renderTheme(<MenuLink Link={'google.com'}>teste</MenuLink>)
    expect(screen.getByRole('link', { name: 'teste' })).toMatchSnapshot()
  })
})
