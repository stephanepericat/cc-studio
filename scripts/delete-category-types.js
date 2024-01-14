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

await client.delete({query: '*[_type in ["productCategory", "linkCategory", "educationCategory", "communityCategory", "scientificLibraryCategory", "resourceCategory"]]'})

const updated = await client.fetch('*[_type in ["productCategory", "linkCategory", "educationCategory", "communityCategory", "scientificLibraryCategory", "resourceCategory"]]')
console.log('updated', updated)