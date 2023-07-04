import { baseLanguage } from "../config/languages"

export default {
  name: 'disclaimer',
  type: 'document',
	title: 'Disclaimer',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'website',
      type: 'localeBlock',
      title: 'Website Disclaimer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'links',
      type: 'localeBlock',
      title: 'External Links Disclaimer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'professional',
      type: 'localeBlock',
      title: 'Professional Disclaimer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'testimonials',
      type: 'localeBlock',
      title: 'Testimonials Disclaimer',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    }
  },
}