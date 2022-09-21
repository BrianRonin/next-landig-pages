import { Story } from '@storybook/react/types-6-0'
import { Heading } from '../Heading'
import { SectionContainer } from '../SectionContainer'
import { SectionBackground, sectionBackgroundProps } from './index'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>teste</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          officiis, sequi odio perferendis quaerat illum possimus magni libero
          aliquid deserunt maxime a voluptatum temporibus cupiditate dicta
          perspiciatis amet non odit?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
  },
}

export const Template: Story<sectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}
