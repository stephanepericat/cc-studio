import dotenv from 'dotenv'

import { createClient } from '@sanity/client'
import countries from '../config/countries.js'

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

// console.log('client', client)

const loadCountry = async (name, code) => {
  const doc = {
    _type: 'country',
    name: {
      en: name,
      fr: null,
      es: null,
      pt: null
    },
    code: code,
  }

  return await client.create(doc)
}

countries.forEach(async ({ title, value }) => {
  await loadCountry(title, value)
})