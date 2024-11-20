import { getBlogMetadata } from '@/lib/get-blog-metadata'

import { Blog } from '@/components'

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getBlogMetadata()

  const titles = metadata.map((post) => post.frontmatter.title).join('; ')

  return {
    title: 'Блог',
    description: titles ? `Список статей: ${titles}.` : 'Статей нет.',
  }
}

export default async function BlogPage() {
  const items = await getBlogMetadata()

  return <Blog items={items} />
}
