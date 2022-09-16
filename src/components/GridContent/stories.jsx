import { GridContent } from './index'
import { mockGridContent } from './mock'

export default {
  title: 'GridContent',
  component: GridContent,
  args: mockGridContent,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Template = (light) => {
  return (
    <div>
      <GridContent {...light} />
    </div>
  )
}
