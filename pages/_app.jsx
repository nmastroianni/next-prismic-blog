import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
// import Script from 'next/script'
import { PrismicProvider, PrismicLink } from '@prismicio/react'
import { PrismicPreview, PrismicNextImage } from '@prismicio/next'
import { repositoryName } from '../prismicio'
// import { getCookie } from 'cookies-next'

const richTextComponents = {
  heading1: ({ children }) => (
    <h1 className="my-4 first:mt-0 last:mb-0">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="my-4 last:mb-0 text-themed-base">{children}</h2>
  ),
  heading3: ({ children }) => <h3 className="my-4 last:mb-0">{children}</h3>,
  heading4: ({ children }) => <h4 className="my-4 last:mb-0">{children}</h4>,
  paragraph: ({ children }) => (
    <p className={`my-4 last:mb-0 md:text-lg lg:text-xl xl:text-2xl`}>
      {children}
    </p>
  ),
  oList: ({ children }) => (
    <ol className="my-4 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2 md:text-lg lg:text-xl xl:text-2xl">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="my-4 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2 md:text-lg lg:text-xl xl:text-2xl">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="my-4 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg lg:text-xl">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="underline">
      {children}
    </PrismicLink>
  ),
  embed: ({ node }) => {
    return (
      <div className="mx-auto max-w-screen-sm overflow-hidden rounded shadow-xl">
        <div
          className="aspect-h-9 aspect-w-16"
          dangerouslySetInnerHTML={{ __html: node.oembed.html }}
        />
      </div>
    )
  },
  image: ({ node }) => {
    return (
      <div className="my-4 flex justify-center">
        <a href={node.url} target="_blank" rel="noreferrer">
          <PrismicNextImage field={node} className="max-w-screen-sm" />
        </a>
      </div>
    )
  },
}

export default function App({ Component, pageProps }) {
  // const consent = getCookie(`localConsent`)
  return (
    <PrismicProvider
      internalLinkComponent={props => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied' });(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N7N7XJ9');`}
        </Script>
        {consent === true && (
          <Script
            id="consupd"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
            }}
          />
        )} */}
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
