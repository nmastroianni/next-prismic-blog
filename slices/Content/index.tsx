import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import { Section } from '@/components/Section'

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps): JSX.Element => (
  <Section
    width="full"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    <div className="prose mx-auto md:prose-lg lg:prose-xl">
      <PrismicRichText field={slice.primary.content} />
    </div>
  </Section>
)

export default Content
