import { Meta, Story } from '@storybook/react/types-6-0'
import { GridImage, gridImageProps } from './index'
import { MockGridImageNoAlt } from './mock'

export default {
  title: 'GridImage',
  component: GridImage,
  args: MockGridImageNoAlt,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<gridImageProps> = (light) => {
  return (
    <div>
      <GridImage {...light} />
    </div>
  )
}
