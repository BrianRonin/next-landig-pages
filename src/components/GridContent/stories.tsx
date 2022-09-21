import { Meta, Story } from '@storybook/react/types-6-0'
import { GridContent, gridContentProps } from './index'
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
} as Meta

export const Template: Story<gridContentProps> = (light) => {
  return (
    <div>
      <GridContent {...light} />
    </div>
  )
}
