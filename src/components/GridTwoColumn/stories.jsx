import { GridTwoColumn } from './index'
import { mock_GridTwoColumn } from './mock'

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock_GridTwoColumn,
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
      <GridTwoColumn {...args} />
    </div>
  )
}
