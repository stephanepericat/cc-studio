import { baseLanguage } from "../config/languages"

export default {
  name: 'event',
  type: 'document',
	title: 'Events',
  initialValue: {
    isEventFree: true,
    language: 'en',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'eventDate',
      type: 'date',
      title: 'Event Date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'eventInfo',
      type: 'localeText',
      title: 'Event Info',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
    },
    {
      name: 'language',
      type: 'language',
      title: 'Event Language',
      validation: Rule => Rule.required(),
    },
    {
      name: 'isEventFree',
      type: 'boolean',
      title: 'Is it Free?',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'tag'}
          ]
        }
      ],
      options: {
        layout: 'dropdown'
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      subtitle: 'language',
      title: 'title'
    }
  },
}