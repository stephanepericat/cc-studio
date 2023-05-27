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
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`
    }
  },
}