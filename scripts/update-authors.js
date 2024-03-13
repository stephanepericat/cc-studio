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

const docs = await client.fetch('*[_type in ["event", "resource", "scientific-library"]]')
const authors = await client.fetch('*[_type == "author"]')
// console.log('authors', authors)
const malli = authors.find((a) => a.nickname === 'Malli Nalli')
const jules = authors.find((a) => a.nickname !== 'Malli Nalli')
// console.log('malli', malli)
// console.log('jules', jules)
// console.log(docs.find((d) => d.language === 'fr'))
const patches = docs.map((d) => ({
  id: d._id,
  patch: {
    set: { author: { _ref: d.language === 'fr' ? jules._id : malli._id  } }, 
  }
}))

patches.forEach(async (p) => {
  await client
    .patch(p.id)
    .set(p.patch.set)
    .commit()
})

console.log(`updated ${docs.length} documents`)