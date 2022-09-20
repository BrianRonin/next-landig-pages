import { Meta, Story } from '@storybook/react/types-6-0'
import { LogoLink, logoLinkProps } from './index'

export default {
  title: 'LogoLink',
  component: LogoLink,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Text: Story<logoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink text='logo' link='google.com' />
    </div>
  )
}

export const Image: Story<logoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink
        text='logo'
        link='google.com'
        srcImg='/assets/images/Bananas.svg'
      />
    </div>
  )
}
