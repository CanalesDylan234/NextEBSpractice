import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // false will allow you not to wait for 60 seconds for things to be loaded
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
