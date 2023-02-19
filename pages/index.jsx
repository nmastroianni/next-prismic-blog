import Head from 'next/head'
import Layout from '@/components/Layout'
import Heading from '@/components/Heading'
import { createClient } from '@/prismicio'
import * as prismicH from '@prismicio/helpers'

export default function Home({ siteMetadata }) {
  const {
    data: { sitetitle, siteurl, sitemetadescription, sitemetaimage },
  } = siteMetadata
  return (
    <Layout>
      <Head>
        <title>{`${prismicH.asText(sitetitle)}`}</title>
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
        <meta
          name="description"
          content="THIS IS A METADESCRIPTION: REPLACE WITH YOURS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* BUILD YOUR HOMEPAGE HERE */}
      <div>
        <Heading as="h1" size={'7xl'} className="mx-auto max-w-screen-2xl">
          This is a Homepage (/index.jsx) Heading1 Component set to 7xl
        </Heading>
        <p className="mx-auto mb-8 max-w-xl rounded-lg bg-neutral-200 p-6 text-center shadow-lg shadow-purple-300">
          Code for the Heading component above...
          <code className="inline-block">{`<Heading as="h2" size="7xl">This is a Homepage (/index.jsx) Heading1 Component set to 7xl</Heading>`}</code>
        </p>
        <p className="mx-auto max-w-xl rounded-lg bg-neutral-900 p-6 text-center text-neutral-200 shadow-lg shadow-purple-300">
          Fonts used: Headings = Lora, Body = Quicksand
        </p>
      </div>
    </Layout>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')

  return {
    props: {
      siteMetadata,
    },
  }
}
