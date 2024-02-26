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

const DOCTYPE = 'feedSettings'

const docs = await client.fetch(`*[_type == "${DOCTYPE}"]`)

const convertField = (field, doc) => {
  if(!doc[field]) {
    return
  }

  return Object.keys(doc[field])
    .filter((key) => key !== '_type')
    .map((key) => ({
      _key: key,
      value: doc[field][key],
    }))
}

const patches = docs.map((d) => ({
  id: d._id,
  patch: {
    set: {
      description: convertField('description', d),
    },
  }
}))

patches.forEach(async (p) => {
  return await client
    .patch(p.id)
    .set(p.patch.set)
    .commit()
})

const updated = await client.fetch(`*[_type == "${DOCTYPE}"]`)
console.log(`migrated ${updated.length} documents of type "${DOCTYPE}"`)