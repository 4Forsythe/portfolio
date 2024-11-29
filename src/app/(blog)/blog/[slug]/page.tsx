import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getBlogPost } from '@/lib/get-blog-post'
import { getBlogParams } from '@/lib/get-blog-params'

import { BlogPost } from '@/components'

import type { Metadata } from 'next'

interface IBlogPostPage {
  params: Promise<{ slug: string }>
}

const getData = cache(async (slug: string) => {
  return getBlogPost(slug)
})

export function generateStaticParams() {
  return getBlogParams()
}

export async function generateMetadata({ params }: IBlogPostPage): Promise<Metadata> {
  const { slug } = await params
  const metadata = await getData(slug)

  if (!metadata) notFound()

  const { title, description, imageUrl, tags } = metadata.frontmatter

  return {
    title,
    description,
    keywords: tags,
    ...(imageUrl && {
      openGraph: {
        images: [{ url: imageUrl }],
      },
    }),
  }
}

export default async function BlogPostPage({ params }: IBlogPostPage) {
  const { slug } = await params
  const metadata = await getData(slug)

  if (!metadata) notFound()

  return <BlogPost {...metadata} />
}
