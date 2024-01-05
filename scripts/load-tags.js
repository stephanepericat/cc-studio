import dotenv from 'dotenv'

import { createClient } from '@sanity/client'
import _ from 'lodash'

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

// cleaning old tags
await client.delete({query: '*[_type == "tag"]'})

// console.log('client', client)
const categories = await client.fetch('*[_type in ["communityCategory", "educationCategory", "linkCategory", "productCategory", "resourceCategory", "scientificLibraryCategory"]]')
const uniqueCategories = _.uniqBy(categories, 'name.en').map(({ name, uri }) => {
  return {
    name,
    uri,
  }
})

const loadTag = async (name, uri) => {
  const doc = {
    _type: 'tag',
    name,
    uri,
  }

  return await client.create(doc)
}

console.log('categories', uniqueCategories)

uniqueCategories.forEach(async ({ name, uri }) => {
  await loadTag(name, uri)
})