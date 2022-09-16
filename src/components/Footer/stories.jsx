import { Footer } from './index'

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

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
