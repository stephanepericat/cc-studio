import { baseLanguage } from "../config/languages"

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
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'localeBlock',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
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
      title: `title.${baseLanguage.id}`
    }
  },
}