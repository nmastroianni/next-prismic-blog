import Head from 'next/head'
import Layout from '@/components/Layout'
import { createClient } from '@/prismicio'
import * as prismicH from '@prismicio/helpers'

export default function Home({ siteMetadata }) {
  const {
    data: { sitetitle, siteurl, sitemetadescription, sitemetaimage, sitetheme },
  } = siteMetadata
  return (
    <Layout theme={sitetheme}>
      <Head>
        <title>{`${prismicH.asText(sitetitle)}`}</title>
        <link rel="canonical" href={`${siteurl}`} />
        <>
          <meta name="description" content={sitemetadescription} />
          <meta property="og:description" content={sitemetadescription} />
        </>

        <meta property="og:url" content={`${siteurl}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={sitemetaimage.url} />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:image" content={sitemetaimage.url} />
        <meta
          name="description"
          content="THIS IS A METADESCRIPTION: REPLACE WITH YOURS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* BUILD YOUR HOMEPAGE HERE */}
      <div>
        <h1 className="mx-auto max-w-screen-2xl text-center lg:text-left">
          This is a Homepage (/index.jsx)
        </h1>
        <p className="mx-auto max-w-xl rounded-lg bg-neutral-900 p-6 text-center text-neutral-200 shadow-lg shadow-purple-300">
          Fonts used: Headings = Lora, Body = Quicksand
        </p>
      </div>
    </Layout>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  let siteMetadata = {}
  try {
    siteMetadata = await client.getSingle('sitemetadata')
  } catch (error) {
    siteMetadata.data = {
      sitetitle: [{ spans: [], text: 'ADD SITE METADATA', type: 'heading1' }],
      siteurl: 'https://addsitemetadta.com',
      sitemetadescription: 'ADD SITEMETADATA IN PRISMIC',
      sitemetaimage: {
        url: 'https://images.unsplash.com/photo-1599227294320-6de91c96396d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
      },
    }
  }

  return {
    props: {
      siteMetadata,
    },
  }
}
