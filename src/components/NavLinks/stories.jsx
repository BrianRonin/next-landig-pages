import { NavLinks } from './index'
import links from './mock'

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    Links: links,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark2',
    },
  },
}

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  )
}
