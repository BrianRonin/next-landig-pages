import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Testando o heading',
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
}

export const Dark = (args) => <Heading {...args} />
export const Light = (args) => <Heading {...args} />

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
}
Light.args = {
  light: false,
}

Dark.parameters = {
  backgrounds: {
    default: 'dark2',
  },
}
Dark.args = {
  light: true,
}
