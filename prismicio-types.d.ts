// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type PostDocumentDataSlicesSlice = ContentSlice

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * Title field in *Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Post Title
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * HidePageTitle field in *Post*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: post.hidepagetitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  hidepagetitle: prismic.BooleanField

  /**
   * FeaturedImage field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.featuredimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featuredimage: prismic.ImageField<never>

  /**
   * Excerpt field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Craft a short excerpt
   * - **API ID Path**: post.excerpt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  excerpt: prismic.RichTextField

  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PostDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.metadescription
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metadescription: prismic.KeyTextField

  /**
   * Meta Image field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.metaimage
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaimage: prismic.ImageField<never>

  /**
   * Canonical Url field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.canonicalurl
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  canonicalurl: prismic.KeyTextField
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, 'post', Lang>

/**
 * Content for SiteMetadata documents
 */
interface SitemetadataDocumentData {
  /**
   * SiteTitle field in *SiteMetadata*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Enter the site title
   * - **API ID Path**: sitemetadata.sitetitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sitetitle: prismic.TitleField

  /**
   * SiteUrl field in *SiteMetadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sitemetadata.siteurl
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  siteurl: prismic.KeyTextField

  /**
   * SiteMetadescription field in *SiteMetadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sitemetadata.sitemetadescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sitemetadescription: prismic.KeyTextField

  /**
   * SiteMetaimage field in *SiteMetadata*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sitemetadata.sitemetaimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  sitemetaimage: prismic.ImageField<never>

  /**
   * SiteTheme field in *SiteMetadata*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: sitemetadata.sitetheme
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  sitetheme: prismic.SelectField<'default' | 'primary '>

  /**
   * Blog Posts Per Page field in *SiteMetadata*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: sitemetadata.blogpostsperpage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  blogpostsperpage: prismic.NumberField
}

/**
 * SiteMetadata document from Prismic
 *
 * - **API ID**: `sitemetadata`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SitemetadataDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SitemetadataDocumentData>,
    'sitemetadata',
    Lang
  >

export type AllDocumentTypes = PostDocument | SitemetadataDocument

/**
 * Primary content in *Content → Primary*
 */
export interface ContentSliceDefaultPrimary {
  /**
   * Content field in *Content → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField
}

/**
 * Default variation for Content Slice
 *
 * - **API ID**: `default`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ContentSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Content*
 */
type ContentSliceVariation = ContentSliceDefault

/**
 * Content Shared Slice
 *
 * - **API ID**: `content`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSlice = prismic.SharedSlice<'content', ContentSliceVariation>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      PostDocument,
      PostDocumentData,
      SitemetadataDocument,
      SitemetadataDocumentData,
      AllDocumentTypes,
      ContentSlice,
      ContentSliceVariation,
      ContentSliceDefault,
    }
  }
}