import fs from 'fs'
import path from 'path'
import rehypePrettyCode from 'rehype-pretty-code'

import { calcReadingTime } from '@/lib/utils'
import { CONTENT_DIR } from '@/lib/get-blog-metadata'
import { compileMDX } from 'next-mdx-remote/rsc'

import { rehypePrettyCodeOptions } from '@/config/rehype-plugins.config'

import type { BlogFrontmatterType, BlogType } from '@/types'

export async function getBlogPost(slug: string): Promise<BlogType | undefined> {
  const fileName = slug + '.mdx'
  const filePath = path.join(CONTENT_DIR, fileName)

  const isFile = fs.existsSync(filePath)

  if (!isFile) return undefined

  const file = fs.readFileSync(filePath, 'utf-8')

  const { frontmatter, content } = await compileMDX<BlogFrontmatterType>({
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        format: 'mdx',
      },
    },
  })

  if (frontmatter.isPublished === false) return undefined

  return {
    slug: path.parse(fileName).name,
    frontmatter,
    content,
    reading: calcReadingTime(file),
  }
}
