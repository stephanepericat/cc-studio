import { baseLanguage } from "../config/languages"

export default {
  name: 'scientific-library',
  type: 'document',
	title: 'Scientific Library',
  initialValue: {
    language: 'en',
    limitedAccess: false,
    premiumAccess: false,
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
    },
    {
      name: 'source',
      type: 'string',
      title: 'Source',
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
    },
    {
      name: 'limitedAccess',
      type: 'boolean',
      title: 'Is it Limited Access?',
    },
    {
      name: 'premiumAccess',
      type: 'boolean',
      title: 'Is it Premium Access?',
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
      title: 'title'
    }
  },
}