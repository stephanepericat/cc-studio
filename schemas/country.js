export default {
  name: 'country',
  type: 'document',
	title: 'Countries',
  fields: [
    {
      name: 'name',
      type: 'internationalizedArrayString',
      title: 'Country Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'code',
      type: 'string',
      title: 'Country Code',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      subtitle: `code`,
      title: `name.0.value`
    }
  },
}