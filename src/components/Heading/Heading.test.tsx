import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>testando</Heading>)

    const heading = screen.getByRole('heading', { name: 'testando' })
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.sizes.xhuge,
      'text-transform': 'none',
    })
  })
  it('should render with white color', () => {
    renderTheme(<Heading light={true}>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    })
  })
  it('should render correct render size small', () => {
    renderTheme(<Heading size='small'>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      'font-size': theme.sizes.medium,
    })
  })
  it('should render correct render size medium', () => {
    renderTheme(<Heading size='medium'>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      'font-size': theme.sizes.large,
    })
  })
  it('should render correct render size big', () => {
    renderTheme(<Heading size='big'>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      'font-size': theme.sizes.xlarge,
    })
  })
  it('should render correct render size huge', () => {
    renderTheme(<Heading size='huge'>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      'font-size': theme.sizes.xhuge,
    })
  })
  it('should render correct render with uppercase', () => {
    renderTheme(<Heading uppercase>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    })
  })
  it('should render as h6', () => {
    const { container } = renderTheme(<Heading as={'h6'}>testando</Heading>)
    const h6 = container.querySelector('h6') as HTMLHeadingElement
    expect(h6.tagName.toLowerCase()).toBe('h6')
  })
  it('should to match snapshot', () => {
    const { container } = renderTheme(<Heading>testando</Heading>)
    expect(container).toMatchSnapshot()
  })
})

describe('<Heading /> with screen medium', () => {
  it('should render correct render size huge', () => {
    renderTheme(<Heading size='huge'>testando</Heading>)
    const heading = screen.getByRole('heading', { name: 'testando' })

    expect(heading).toHaveStyleRule('font-size', theme.sizes.xlarge, {
      media: theme.media.medium,
    })
  })
})
