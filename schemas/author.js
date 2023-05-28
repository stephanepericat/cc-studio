import { baseLanguage } from "../config/languages"

export default {
  name: 'author',
  type: 'document',
	title: 'Author',
  fields: [
    {
      name: 'nickname',
      type: 'string',
      title: 'Nickname',
      validation: Rule => Rule.required().max(256),
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mail Address',
      validation: Rule => Rule.required(),
    },
    {
      name: 'uri',
      type: 'slug',
      title: 'URI',
      options: {
        source: 'nickname',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'bio',
      type: 'localeText',
      title: 'Biography',
    },
    {
      name: 'twitterUsername',
      type: 'string',
      title: 'Twitter Username',
    },
    {
      name: 'visual',
      type: 'image',
      title: 'Visual',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      media: 'visual',
      subtitle: `email`,
      title: 'nickname',
    }
  },
}