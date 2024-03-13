import { baseLanguage } from "../config/languages"
import { uriGenerator } from '../scripts/hash-generator'

export default {
  name: 'resource',
  type: 'document',
	title: 'Resources',
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
      name: 'uri',
      type: 'slug',
      title: 'URI',
      options: {
        maxLength: 10,
        source: 'title',
        slugify: uriGenerator
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'summary',
      type: 'internationalizedArrayText',
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
      name: 'language',
      type: 'language',
      title: 'Content Language',
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
      subtitle: `tags.0.name.${baseLanguage.id}`,
      title: 'title'
    }
  },
}