import { baseLanguage } from "../config/languages"

export default {
  name: 'productCategory',
  type: 'document',
	title: 'Product Category',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: `name.${baseLanguage.id}`
    }
  },
}