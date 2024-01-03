import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {tags} from 'sanity-plugin-tags'
import {schemaTypes} from './schemas'

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
      tags(),
      visionTool(),
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
      tags(),
      visionTool(),
    ],
  
    schema: {
      types: schemaTypes,
    },
  }
])

