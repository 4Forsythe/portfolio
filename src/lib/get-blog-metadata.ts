import fs from 'fs'
import path from 'path'

import { getBlogPost } from '@/lib/get-blog-post'

import type { BlogType } from '@/types'

const contentDir = path.join(process.cwd(), 'src/content/blog')

export async function getBlogMetadata(): Promise<BlogType[] | []> {
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.mdx'))

  const metadata = await Promise.all(
    files.map(async (file) => await getBlogPost(path.parse(file).name))
  )

  const blog = metadata.filter((file) => file !== undefined)

  return blog.sort((one, two) => {
    const dateOne = new Date(one.frontmatter.createdAt)
    const dateTwo = new Date(two.frontmatter.createdAt)

    return dateTwo.getDate() - dateOne.getDate()
  })
}
