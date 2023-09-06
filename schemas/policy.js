import { baseLanguage } from "../config/languages"

export default {
  name: 'policy',
  type: 'document',
	title: 'Policies',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Policy Title',
    },
    {
      name: 'contents',
      type: 'localeBlock',
      title: 'Contents',
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
}