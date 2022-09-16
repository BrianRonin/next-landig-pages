import { GridImage } from './index'
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
}

export const Template = (light) => {
  return (
    <div>
      <GridImage {...light} />
    </div>
  )
}
