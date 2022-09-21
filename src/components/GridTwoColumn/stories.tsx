import { Meta, Story } from '@storybook/react/types-6-0'
import { GridTwoColumn, gridTwoColumnProps } from './index'
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
} as Meta

export const Template: Story<gridTwoColumnProps> = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  )
}
