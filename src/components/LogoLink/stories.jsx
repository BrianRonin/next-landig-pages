import { LogoLink } from './index'
export default {
  title: 'LogoLink',
  component: LogoLink,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Text = (args) => {
  return (
    <div>
      <LogoLink text='logo' link='google.com' />
    </div>
  )
}

export const Image = (args) => {
  return (
    <div>
      <LogoLink text='logo' srcImg='/assets/images/Bananas.svg' />
    </div>
  )
}
