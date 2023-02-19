import Head from 'next/head'
import Layout from '@/components/Layout'
import Heading from '@/components/Heading'
import { createClient } from '@/prismicio'
import * as prismicH from '@prismicio/helpers'

const BlogIndex = ({ posts, siteMetadata }) => {
  const {
    data: { sitetitle, siteurl, sitemetadescription, sitemetaimage },
  } = siteMetadata
  return (
    <Layout>
      <Head>
        <title>{`Blog · ${prismicH.asText(sitetitle)}`}</title>
        <link rel="canonical" href={`${siteurl}/blog`} />
        <>
          <meta name="description" content={sitemetadescription} />
          <meta property="og:description" content={sitemetadescription} />
        </>

        <meta property="og:url" content={`${siteurl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={sitemetaimage.url} />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:image" content={sitemetaimage.url} />
      </Head>
      <Heading as="h2" size="5xl">
        Blog Index Page 1
      </Heading>
      <code>{JSON.stringify(posts)}</code>
    </Layout>
  )
}
export default BlogIndex
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const posts = await client.getByType('post', {
    pageSize: siteMetadata.data.blogpostsperpage,
    page: 1,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })

  return {
    props: {
      posts,
      siteMetadata,
    },
  }
}
