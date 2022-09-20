import { Meta, Story } from '@storybook/react/types-6-0'
import { Footer, FooterProps } from './index'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: `<p>feito com carinho por brian S2</p>`,
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

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
