import P from 'prop-types'
import { Title } from './styles'

export const Heading = ({
  children = 'testando componente',
  light = false,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Title light={light} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  )
}
Heading.propTypes = {
  children: P.node,
  light: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['huge', 'big', 'medium', 'small']),
  uppercase: P.bool,
}
