export default {
  name: 'video',
  type: 'document',
	title: 'Videos',
  initialValue: {
    language: 'en'
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'embedCode',
      type: 'text',
      title: 'Embed Code',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
    },
    {
      name: 'summary',
      type: 'localeText',
      title: 'Summary',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'tag'}
          ]
        }
      ],
      options: {
        layout: 'dropdown'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'language',
      type: 'language',
      title: 'Original Language',
      validation: Rule => Rule.required(),
    },
    {
      name: 'visual',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      media: 'visual',
      subtitle: 'summary.en',
      title: 'title'
    }
  },
}