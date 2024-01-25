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

const docs = await client.fetch('*[_type in ["link", "scientific-library"]]')

const patches = docs.map((d) => ({
  id: d._id,
  patch: {
    set: { freeAccess: true }, 
  }
}))

patches.forEach(async (p) => {
  return await client
    .patch(p.id)
    .set(p.patch.set)
    .commit()
})

const updated = await client.fetch('*[_type in ["link", "scientific-library"]]')
console.log('updated', updated)