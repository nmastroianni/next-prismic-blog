import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from './slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'post',
    path: '/blog/:uid',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
