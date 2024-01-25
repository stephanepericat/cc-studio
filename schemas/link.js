// import { baseLanguage } from "../config/languages"

export default {
  name: 'link',
  type: 'document',
	title: 'News',
  initialValue: {
    freeAccess: true,
    language: 'en',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'source',
      type: 'string',
      title: 'Source',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
    },
    {
      name: 'language',
      type: 'language',
      title: 'Content Language',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publicationDate',
      type: 'date',
      title: 'Publication Date',
      // validation: Rule => Rule.required(),
    },
    {
      name: 'freeAccess',
      type: 'boolean',
      title: 'Is it Free Access?',
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
      subtitle: `source`,
      title: `title`
    }
  },
}