import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'That Covid Life CMS - Production',
    basePath: '/production',
  
    projectId: 'yt0dcu6v',
    dataset: 'production',
  
    plugins: [
      deskTool(),
      media(),
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
      visionTool(),
    ],
  
    schema: {
      types: schemaTypes,
    },
  }
])

