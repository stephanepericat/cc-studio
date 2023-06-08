import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Covid Conscious CMS',

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
})

