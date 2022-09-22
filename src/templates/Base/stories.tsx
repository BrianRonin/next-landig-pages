import { Meta, Story } from '@storybook/react/types-6-0'
import { Base, baseProps } from './index'
import { MockBase } from './mock'

export default {
  title: 'Templates/Base',
  component: Base,
  args: MockBase,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<baseProps> = (light) => {
  return (
    <div>
      <Base {...light} />
    </div>
  )
}
