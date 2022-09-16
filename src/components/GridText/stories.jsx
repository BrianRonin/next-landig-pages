import { GridText } from './index'
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
}

export const Template = (light) => {
  return (
    <div>
      <GridText {...light} />
    </div>
  )
}
