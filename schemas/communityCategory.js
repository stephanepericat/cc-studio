import { baseLanguage } from "../config/languages"

export default {
  name: 'communityCategory',
  type: 'document',
	title: 'Community Categories',
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