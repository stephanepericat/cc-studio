import { baseLanguage } from "../config/languages"

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
      name: 'articleTags',
      type: 'tags',
      title: 'Tags',
      options: {
        allowCreate: true,
        onCreate: (value) => ({
          label: value,
          value: value.toLowerCase().replace(/\W/g, '-'),
        })
      },
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
      validation: Rule => Rule.required(),
    },
    // {
    //   name: 'category',
    //   type: 'reference',
    //   title: 'Category',
    //   to: [{type: 'resourceCategory'}],
    //   validation: Rule => Rule.required(),
    // },
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
      subtitle: 'language',
      title: 'title'
    }
  },
}