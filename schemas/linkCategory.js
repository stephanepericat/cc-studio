import { baseLanguage } from "../config/languages"

export default {
  name: 'linkCategory',
  type: 'document',
	title: 'Link Category',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'uri',
      type: 'slug',
      title: 'URI',
      options: {
        source: `name.${baseLanguage.id}`,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: `name.${baseLanguage.id}`
    }
  },
}