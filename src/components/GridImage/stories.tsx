import { Meta, Story } from '@storybook/react/types-6-0'
import { GridImage, gridImageProps } from './index'
import { MockGridImage } from './mock'

export default {
  title: 'GridImage',
  component: GridImage,
  args: MockGridImage,
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
