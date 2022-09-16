import { Text } from '.'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `
    ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt temp
    oribus vero atque error magni beatae quaerat quo dolor obcaecati pa
    riatur ullam fugit, dolorum sit dolore quisquam explicabo eligendi
    molestias.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '3rem' }}>
      <Text {...args} />
    </div>
  )
}

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
