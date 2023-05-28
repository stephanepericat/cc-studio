import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'cccc.org',

  projectId: 'yt0dcu6v',
  dataset: 'production',

  plugins: [
    deskTool(),
    media(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: schemaTypes,
  },
})

