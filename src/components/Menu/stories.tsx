import { Menu, menuProps } from './index'

import { MockNavLinks } from '../NavLinks/mock'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: MockNavLinks,
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
} as Meta

export const Template: Story<menuProps> = (args) => {
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
