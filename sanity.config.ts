import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {internationalizedArray, PluginConfig} from 'sanity-plugin-internationalized-array'

const internationalizedConfig: PluginConfig = {
  languages: [
    {id: 'en', title: 'English'},
    {id: 'es', title: 'Spanish'},
    {id: 'fr', title: 'French'},
    {id: 'pt', title: 'Portuguese'},
  ],
  defaultLanguages: [],
  fieldTypes: [
    'string',
    'text',
    {
      name: 'richText',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  buttonAddAll: true,
  buttonLocations: ['field'],
};

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'That Covid Life CMS - Live',
    basePath: '/live',
  
    projectId: 'yt0dcu6v',
    dataset: 'production',
  
    plugins: [
      deskTool(),
      media(),
      visionTool(),
      internationalizedArray(internationalizedConfig)
    ],
  
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'preview-workspace',
    title: 'That Covid Life CMS - Preview',
    basePath: '/preview',
  
    projectId: 'yt0dcu6v',
    dataset: 'development',
  
    plugins: [
      deskTool(),
      media(),
      visionTool(),
      internationalizedArray(internationalizedConfig)
    ],
  
    schema: {
      types: schemaTypes,
    },
  }
])

