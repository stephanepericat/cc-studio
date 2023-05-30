import { baseLanguage } from "../config/languages"

export default {
  name: 'link',
  type: 'document',
	title: 'Link',
  fields: [
    {
      name: 'title',
      type: 'localeString',
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
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'linkCategory'}],
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
      name: 'visual',
      type: 'image',
      title: 'Visual',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      subtitle: `source`,
      title: `title.${baseLanguage.id}`
    }
  },
}