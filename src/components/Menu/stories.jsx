import { Menu } from './index'

import linksMock from '../NavLinks/mock'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      links: '#',
      srcImg: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Template = (args) => {
  return (
    <div
      style={{
        background: 'gray',
        height: '300vh',
      }}
    >
      <Menu {...args} />
    </div>
  )
}
