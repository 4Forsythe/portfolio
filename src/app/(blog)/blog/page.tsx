import { getBlogMetadata } from '@/lib/get-blog-metadata'

import { Blog } from '@/components'

export default async function BlogPage() {
  const items = await getBlogMetadata()

  return <Blog items={items} />
}
