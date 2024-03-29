export default {
  name: 'feedSettings',
  type: 'document',
	title: 'Feed Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'internationalizedArrayString',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      type: 'feedAuthor',
      title: 'Author',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'logo',
      subtitle: `description.0.value`,
      title: 'title',
    }
  },
}