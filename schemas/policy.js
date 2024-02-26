export default {
  name: 'policy',
  type: 'document',
	title: 'Policies',
  fields: [
    {
      name: 'title',
      type: 'internationalizedArrayString',
      title: 'Policy Title',
    },
    {
      name: 'contents',
      type: 'internationalizedArrayRichText',
      title: 'Contents',
    },
  ],
  preview: {
    select: {
      title: `title.0.value`,
    },
  },
}