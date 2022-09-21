import { Meta, Story } from '@storybook/react/types-6-0'
import { GridText, gridTextProps } from './index'
import { MockGridText } from './mock'

export default {
  title: 'GridText',
  component: GridText,
  args: MockGridText,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<gridTextProps> = (light) => {
  return (
    <div>
      <GridText {...light} />
    </div>
  )
}
