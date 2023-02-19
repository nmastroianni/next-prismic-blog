import * as React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import * as prismicH from '@prismicio/helpers'

const Post = ({ post, siteMetadata }) => {
  const { data } = post
  return (
    <Layout>
      <Head>
        <title>{`${prismicH.asText(data.title)} · ${prismicH.asText(
          siteMetadata.data.sitetitle
        )}`}</title>
        <link
          rel="canonical"
          href={
            data.canonicalurl || `${siteMetadata.data.siteurl}/${post.url}/`
          }
        />
        {data.metadescription ||
          (siteMetadata.data.sitemetadescription && (
            <meta
              name="description"
              content={
                data.metadescription || siteMetadata.data.sitemetadescription
              }
            />
          ))}
        {data.metadescription ||
          (siteMetadata.data.sitemetadescription && (
            <meta
              property="og:description"
              content={
                data.metadescription || siteMetadata.data.sitemetadescription
              }
            />
          ))}
        <meta
          property="og:url"
          content={
            data.canonicalurl || `${siteMetadata.data.siteurl}/${post.url}/`
          }
        />
        <meta property="og:type" content="website" />

        {data.metaimage.url ||
          (siteMetadata.data.sitemetaimage.url && (
            <meta
              property="og:image"
              content={
                data.metaimage.url || siteMetadata.data.sitemetaimage.url
              }
            />
          ))}

        <meta property="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content={
            data.metadescription || siteMetadata.data.sitemetadescription
          }
        />
        {data.metaimage.url ||
          (siteMetadata.data.sitemetaimage.url && (
            <meta
              property="twitter:image"
              content={
                data.metaimage.url || siteMetadata.data.sitemetaimage.url
              }
            />
          ))}
      </Head>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        {!data.hidepagetitle && (
          <header className="bg-base-100 py-4 text-center md:py-6 lg:py-8 xl:py-10">
            <PrismicRichText field={data.title} />
          </header>
        )}
        {data.slices.length > 0 && (
          <SliceZone slices={data.slices} components={components} />
        )}
      </div>
    </Layout>
  )
}
export default Post
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const post = await client.getByUID('post', params.uid)
  const siteMetadata = await client.getSingle('sitemetadata')

  return {
    props: {
      post,
      siteMetadata,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const posts = await client.getAllByType('post')
  return {
    paths: posts.map(post => prismicH.asLink(post)),
    fallback: false,
  }
}