import { baseLanguage } from "../config/languages"

export default {
  name: 'product',
  type: 'document',
	title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name',
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
      title: `name.${baseLanguage.id}`
    }
  },
}