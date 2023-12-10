import dotenv from 'dotenv'

import { createClient } from '@sanity/client'
// import countries from './countries.js'

dotenv.config()

const { SANITY_DATASET, SANITY_PROJECTID, SANITY_TOKEN } = process.env
// console.log(SANITY_DATASET, SANITY_PROJECTID)

const client = createClient({
  projectId: SANITY_PROJECTID,
  dataset: SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-09-04',
  token: SANITY_TOKEN,
})

client.patch({ query: '*[_type == $type]', params: { type: 'scientific-library' } }).unset(['description']);
