import { baseLanguage } from "../config/languages"

export default {
  name: 'educationCategory',
  type: 'document',
	title: 'Education Category',
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