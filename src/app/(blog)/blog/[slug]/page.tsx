import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getBlogPost } from '@/lib/get-blog-post'
import { getBlogMetadata } from '@/lib/get-blog-metadata'

import { BlogPost } from '@/components'

interface IBlogPostPage {
  params: Promise<{ slug: string }>
}

const getData = cache(async (slug: string) => {
  return getBlogPost(slug)
})

export async function generateStaticParams() {
  const metadata = await getBlogMetadata()

  return metadata.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: IBlogPostPage) {
  const { slug } = await params
  const metadata = await getData(slug)

  if (!metadata) notFound()

  return <BlogPost {...metadata} />
}
