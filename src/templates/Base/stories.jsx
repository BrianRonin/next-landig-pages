import { Base } from './index'
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
}

export const Template = (light) => {
  return (
    <div>
      <Base {...light} />
    </div>
  )
}
