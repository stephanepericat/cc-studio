import dotenv from 'dotenv'

import { createClient } from '@sanity/client'

import { uriGenerator } from './hash-generator.js'

dotenv.config()

const { SANITY_DATASET, SANITY_PROJECTID, SANITY_TOKEN } = process.env

const client = createClient({
  projectId: SANITY_PROJECTID,
  dataset: SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-09-04',
  token: SANITY_TOKEN,
})

const docs = await client.fetch('*[_type in ["event", "resource", "scientific-library"]]')

const patches = docs.map((d) => ({
  id: d._id,
  patch: {
    set: { uri: { type: "slug", current: uriGenerator(d.title) } }, 
  }
}))

patches.forEach(async (p) => {
  await client
    .patch(p.id)
    .set(p.patch.set)
    .commit()
})

console.log(`updated ${docs.length} documents`)