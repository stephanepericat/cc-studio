import dotenv from 'dotenv'

import { createClient } from '@sanity/client'

dotenv.config()

const { SANITY_DATASET, SANITY_PROJECTID, SANITY_TOKEN } = process.env

const client = createClient({
  projectId: SANITY_PROJECTID,
  dataset: SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-09-04',
  token: SANITY_TOKEN,
})

const docs = await client.fetch('*[_type in ["product", "link", "education", "community", "scientific-library", "resource"]]')
// console.log('docs', docs)
const patches = docs.map((d) => ({
  id: d._id,
  patch: {
    unset: ['category']
  }
}))

patches.forEach(async (p) => {
  return await client
    .patch(p.id)
    .unset(p.patch.unset)
    .commit()
})

const updated = await client.fetch('*[_type in ["product", "link", "education", "community", "scientific-library", "resource"]]')
console.log('updated', updated)