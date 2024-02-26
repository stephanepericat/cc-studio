export default {
  name: 'appSettings',
  type: 'document',
	title: 'App Settings',
  fields: [
    {
      name: 'key',
      type: 'string',
      title: 'key',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          { title: 'String', value: 'string'},
          { title: 'Boolean', value: 'boolean'},
          { title: 'Number', value: 'number'},
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'valueString',
      type: 'string',
      title: 'Value',
      hidden: ({ document }) => document.type !== 'string',
    },
    {
      name: 'valueBoolean',
      type: 'boolean',
      title: 'Enabled',
      hidden: ({ document }) => document.type !== 'boolean',
    },
    {
      name: 'valueNumber',
      type: 'number',
      title: 'Value',
      hidden: ({ document }) => document.type !== 'number',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'description'
    }
  },
}