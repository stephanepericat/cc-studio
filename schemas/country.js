import { baseLanguage } from "../config/languages"

export default {
  name: 'country',
  type: 'document',
	title: 'Countries',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Country Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'code',
      type: 'string',
      title: 'Country Code',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      subtitle: `code`,
      title: `name.${baseLanguage.id}`
    }
  },
}