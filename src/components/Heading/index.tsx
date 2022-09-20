import P from 'prop-types'
import { Title } from './styles'

export type HeadingProps = {
  children: React.ReactNode
  light?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'huge' | 'big' | 'medium' | 'small'
  uppercase?: boolean
}

export const Heading = ({
  children = 'testando componente',
  light = false,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Title light={light} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  )
}
