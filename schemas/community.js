import { baseLanguage } from "../config/languages"
import { uriGenerator } from '../scripts/hash-generator'

export default {
  name: 'community',
  type: 'document',
	title: 'Community',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'uri',
      type: 'slug',
      title: 'URI',
      options: {
        source: `title.${baseLanguage.id}`,
        slugify: uriGenerator,
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
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'communityCategory'}],
      // validation: Rule => Rule.required(),
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
      name: 'description',
      type: 'localeBlock',
      title: 'Description',
    },
    {
      name: 'contactInfo',
      type: 'contactInfo',
      title: 'Contact Info',
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
      title: `title.${baseLanguage.id}`
    }
  },
}