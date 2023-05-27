import { baseLanguage } from "../config/languages"

export default {
  name: 'product',
  type: 'document',
	title: 'Product',
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
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'productCategory'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Description',
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
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`
    }
  },
}