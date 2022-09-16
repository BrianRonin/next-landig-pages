import { GoTop } from './index'

export default {
  title: 'GoTop',
  component: GoTop,
  args: {},
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export const Template = (light) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        dolores ipsa ab sit velit doloribus dolorum! Provident ut, similique
        quasi omnis fuga ad. Culpa exercitationem doloribus quo debitis eveniet
        nemo?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius sit
        eos ipsa accusantium quia nam enim, voluptate repudiandae magni suscipit
        sunt velit incidunt tempora eveniet cumque. Veniam, inventore rerum?
      </p>
      <GoTop {...light} />
    </div>
  )
}
