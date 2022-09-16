import { renderTheme } from '../../styles/render-theme'
import { Menu } from './index'
import linksMock from '../NavLinks/mock'
import { fireEvent, screen } from '@testing-library/react'
import { theme } from '../../styles/theme'

const logoData = {
  text: 'Logo',
  link: '#',
}

const testStyleRule = (element, tag, value, option = undefined) => {
  try {
    expect(element).toHaveStyleRule(tag, value, option)
  } catch (e) {
    throw new Error(e)
  }
}

describe('<Menu />', () => {
  it('should render navigation', () => {
    renderTheme(<Menu logoData={logoData} links={linksMock} />)
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument()
  })

  it('should render link and logo', () => {
    renderTheme(<Menu logoData={logoData} links={linksMock} />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
    // expect(screen.getByRole('link', 'Link 1')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={linksMock} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render menu mobile and buttom for open and close the menu', () => {
    renderTheme(<Menu logoData={logoData} links={linksMock} />)

    const button = screen.getByLabelText('Open/Close menu')
    const menuContainer = button.nextSibling
    const mobileMedia = { media: theme.media.medium }

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    testStyleRule(button, 'display', 'none')
    testStyleRule(button, 'display', 'flex', mobileMedia)
    testStyleRule(menuContainer, 'opacity', '0', mobileMedia)
    testStyleRule(menuContainer, 'visibility', 'hidden', mobileMedia)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    testStyleRule(menuContainer, 'opacity', '1', mobileMedia)
    testStyleRule(menuContainer, 'visibility', 'visible', mobileMedia)
    fireEvent.click(menuContainer)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    testStyleRule(menuContainer, 'opacity', '0', mobileMedia)
    testStyleRule(menuContainer, 'visibility', 'hidden', mobileMedia)
  })

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />)
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
