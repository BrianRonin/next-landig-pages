import { Meta, Story } from '@storybook/react/types-6-0'
import { NavLinks, navLinksProps } from './index'
import { MockNavLinks } from './mock'

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: MockNavLinks,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark2',
    },
  },
} as Meta

export const Template: Story<navLinksProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  )
}
